import { useEffect, useId, useState } from 'react'

const FORM_ORIGIN = 'https://agdforms.netlify.app'

type Service = 'online' | 'wedding' | 'city-trail'

type FormEmbedProps = {
  /** Pre-selects the service dropdown on the embedded form. */
  service?: Service
  title?: string
}

function parentBaseUrl() {
  const base = import.meta.env.BASE_URL || '/'
  const normalized = base.endsWith('/') ? base.slice(0, -1) : base
  return `${window.location.origin}${normalized}`
}

function formSrc(service?: Service) {
  const params = new URLSearchParams()
  params.set('parent', parentBaseUrl())
  if (service) params.set('service', service)
  return `${FORM_ORIGIN}/?${params.toString()}`
}

export default function FormEmbed({
  service,
  title = 'Enquiry form',
}: FormEmbedProps) {
  const titleId = useId()
  const [height, setHeight] = useState(640)
  const src = formSrc(service)

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (event.origin !== FORM_ORIGIN) return
      if (event.data?.type !== 'agdforms:resize') return
      if (typeof event.data.height !== 'number') return
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
        style={{ height: `${height}px` }}
      />
    </section>
  )
}
