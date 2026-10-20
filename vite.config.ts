import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig, type Plugin } from 'vite'

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

// https://vite.dev/config/
export default defineConfig({
  base: pagesBase(),
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    githubPagesSpaFallback(),
  ],
})
