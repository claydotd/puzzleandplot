;(() => {
  function notifyHeight() {
    const height = Math.ceil(
      Math.max(
        document.documentElement.scrollHeight,
        document.body?.scrollHeight || 0,
      ),
    )
    window.parent.postMessage({ type: 'agdforms:resize', height }, '*')
  }

  function watchHeight() {
    window.addEventListener('load', notifyHeight)
    window.addEventListener('resize', notifyHeight)

    if (typeof ResizeObserver !== 'undefined') {
      new ResizeObserver(notifyHeight).observe(document.documentElement)
      if (document.body) new ResizeObserver(notifyHeight).observe(document.body)
    }

    notifyHeight()
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', watchHeight)
  } else {
    watchHeight()
  }
})()
