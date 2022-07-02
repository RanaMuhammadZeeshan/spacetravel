const useDetectSafari = () => {
  // Detect Chrome
  let chromeAgent = navigator.userAgent.indexOf('Chrome') > -1

  // Detect Safari
  let safariAgent = navigator.userAgent.indexOf('Safari') > -1

  // Discard Safari since it also matches Chrome
  if (chromeAgent && safariAgent) safariAgent = false

  return safariAgent
}

export default useDetectSafari
