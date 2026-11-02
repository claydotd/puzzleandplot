import { useEffect, useId, useState } from 'react'

const PROD_FORM_HOST = 'https://agdforms.netlify.app'
const PROD_FORM_PATH = '/puzzle-and-plot/'

type Service = 'online' | 'wedding' | 'city-trail'

type FormEmbedProps = {
  /** Pre-selects the service dropdown on the embedded form. */
  service?: Service
  title?: string
}

function formLocation() {
  // Local Vite middleware serves the sibling agdforms project (see vite.config.ts).
  if (import.meta.env.DEV) {
    return {
      host: window.location.origin,
      path: '/__forms/puzzle-and-plot/',
    }
  }
  return { host: PROD_FORM_HOST, path: PROD_FORM_PATH }
}

function parentBaseUrl() {
  const base = import.meta.env.BASE_URL || '/'
  const normalized = base.endsWith('/') ? base.slice(0, -1) : base
  return `${window.location.origin}${normalized}`
}

function formSrc(service?: Service) {
  const { host, path } = formLocation()
  const params = new URLSearchParams()
  params.set('parent', parentBaseUrl())
  if (service) params.set('service', service)
  return `${host}${path}?${params.toString()}`
}

export default function FormEmbed({
  service,
  title = 'Enquiry form',
}: FormEmbedProps) {
  const titleId = useId()
  // Start unset so the form can measure its natural height before we clamp the frame.
  const [height, setHeight] = useState<number | null>(null)
  const src = formSrc(service)

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      const allowed = new Set([PROD_FORM_HOST, window.location.origin])
      // postMessage origins never include a path
      if (!allowed.has(event.origin)) return
      if (event.data?.type !== 'agdforms:resize') return
      if (typeof event.data.height !== 'number' || !Number.isFinite(event.data.height)) {
        return
      }
      setHeight(Math.max(320, Math.ceil(event.data.height)))
    }

    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])

  return (
    <section className="form-embed" aria-labelledby={titleId}>
      <h2 id={titleId} className="form-embed__title">
        {title}
      </h2>
      <iframe
        className="form-embed__frame"
        title={title}
        src={src}
        loading="lazy"
        style={{ height: height == null ? '0px' : `${height}px` }}
      />
    </section>
  )
}
