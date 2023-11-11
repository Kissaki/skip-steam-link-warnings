const urlFilterPrefix = 'https://steamcommunity.com/linkfilter/?u='
const urlPattern = urlFilterPrefix + '*'

console.debug('Loading…')

let onBeforeRequestHandler = function(details) {
  console.debug(`onBeforeRequest with url value '${details.url}'`)
  if (!details.url.startsWith(urlFilterPrefix)) {
    console.warning('Invalid operation - URL does not match expected prefix')
    return {}
  }
  const targetUrl = details.url.substring(urlFilterPrefix.length).replaceAll('%3A', ':').replaceAll('%2F', '/')
  console.debug(`Returning redirect target '${targetUrl}'…`)
  return { redirectUrl: targetUrl }
}
const requestFilter = { urls: [urlPattern], types: ["main_frame"] }
// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest
chrome.webRequest.onBeforeRequest.addListener(onBeforeRequestHandler, requestFilter, ["blocking"])

console.debug('Loaded')
