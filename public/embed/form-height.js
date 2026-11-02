;(() => {
  function contentHeight() {
    const visible = [...document.querySelectorAll('.enquiry-form')].find(
      (el) => !el.classList.contains('is-hidden'),
    )
    const target = visible || document.body
    if (!target) return 0

    const rect = target.getBoundingClientRect()
    const styles = getComputedStyle(target)
    const margin =
      (parseFloat(styles.marginTop) || 0) + (parseFloat(styles.marginBottom) || 0)

    // Prefer the form/root box over documentElement.scrollHeight — the latter
    // collapses to the iframe viewport when the frame is shorter than content.
    return Math.ceil(
      Math.max(target.scrollHeight, target.offsetHeight, rect.height) + margin,
    )
  }

  function notifyHeight() {
    window.parent.postMessage(
      { type: 'agdforms:resize', height: Math.max(contentHeight(), 1) },
      '*',
    )
  }

  function watchHeight() {
    window.addEventListener('load', notifyHeight)
    window.addEventListener('resize', notifyHeight)

    if (typeof ResizeObserver !== 'undefined') {
      const ro = new ResizeObserver(notifyHeight)
      ro.observe(document.documentElement)
      if (document.body) ro.observe(document.body)
      for (const el of document.querySelectorAll('.enquiry-form')) ro.observe(el)
    }

    notifyHeight()
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', watchHeight)
  } else {
    watchHeight()
  }
})()
