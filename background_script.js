// https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/webRequest/onBeforeRequest
chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    if (!details.url.startsWith('https://steamcommunity.com/linkfilter/?url=')) {
      throw 'invalid operation'
    }
    const targetUrl = details.url.substring(43)
    return { redirectUrl: targetUrl }
  },
  {
    urls: [
      "https://steamcommunity.com/linkfilter/?url=*"
    ],
    types: [
      "main_frame"
    ]
  },
  ["blocking"]
)
