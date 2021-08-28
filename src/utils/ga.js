// log the pageview with their URL
export const pageview = (url) => {
  window.gtag('config', 'UA-135029522-1', {
    page_path: url,
  })
}

// log specific events happening.
export const event = ({action, params}) => {
  window.gtag('event', action, params)
}
