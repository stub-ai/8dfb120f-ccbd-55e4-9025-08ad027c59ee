document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key === 'q') {
    let message = prompt("Enter your message for OpenAI API:");
    chrome.runtime.sendMessage({method: "callOpenAI", message: message}, function(response) {
      console.log(response);
    });
  }
});