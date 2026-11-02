import {
  copyFileSync,
  createReadStream,
  existsSync,
  statSync,
} from 'node:fs'
import { extname, join, normalize, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig, type Plugin } from 'vite'

const rootDir = fileURLToPath(new URL('.', import.meta.url))

// Project Pages sites are served from /<repo>/. Leave unset for local dev (`/`).
function pagesBase() {
  const raw = process.env.BASE_PATH?.trim()
  if (!raw || raw === '/') return '/'
  const withLeading =
    raw.startsWith('/') || /^https?:\/\//.test(raw) ? raw : `/${raw}`
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`
}

// GitHub Pages has no SPA rewrite. A copy of index.html at 404.html
// keeps client routes working on refresh.
function githubPagesSpaFallback(): Plugin {
  let outDir = 'dist'
  return {
    name: 'github-pages-spa-fallback',
    apply: 'build',
    configResolved(config) {
      outDir = resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      const indexPath = resolve(outDir, 'index.html')
      if (!existsSync(indexPath)) return
      copyFileSync(indexPath, resolve(outDir, '404.html'))
    },
  }
}

const AGDFORMS_ROOT = resolve(rootDir, '../agdforms')
const MIME: Record<string, string> = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.json': 'application/json',
}

/** Serve the sibling agdforms project in dev so iframe height work can be tested locally. */
function localAgdforms(): Plugin {
  return {
    name: 'local-agdforms',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || ''
        if (!url.startsWith('/__forms/')) return next()

        const rel = decodeURIComponent(url.slice('/__forms/'.length).split('?')[0] || '')
        const filePath = normalize(join(AGDFORMS_ROOT, rel))
        if (!filePath.startsWith(AGDFORMS_ROOT)) {
          res.statusCode = 403
          res.end('Forbidden')
          return
        }

        let target = filePath
        try {
          if (statSync(target).isDirectory()) {
            target = join(target, 'index.html')
          }
        } catch {
          res.statusCode = 404
          res.end('Not found')
          return
        }

        res.setHeader('Content-Type', MIME[extname(target)] || 'application/octet-stream')
        res.setHeader('Cache-Control', 'no-store')
        createReadStream(target).pipe(res)
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: pagesBase(),
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    githubPagesSpaFallback(),
    localAgdforms(),
  ],
})
