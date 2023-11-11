chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method === "callOpenAI") {
    fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
      },
      body: JSON.stringify({
        'prompt': request.message,
        'max_tokens': 60
      })
    })
    .then(response => response.json())
    .then(data => sendResponse({data: data}))
    .catch(error => sendResponse({error: error}));
    return true;  // Will respond asynchronously.
  }
});