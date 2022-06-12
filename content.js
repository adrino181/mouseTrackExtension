const messagesFromReactAppListener = (msg, sender, sendResponse) => {
  const response = {
    title: 'response'
  };
  (function() {
      document.onmousemove = handleMouseMove;
      function handleMouseMove(event) {
          event = event || window.event;
          chrome.runtime.sendMessage({eventType: 'SET_MOUSE', position: {x: event.pageX, y:event.pageY}}, () => {});
      }

      document.onkeydown = handleKeyDown;
      function handleKeyDown(event) {
        event = event || window.event;
        chrome.runtime.sendMessage({eventType: 'SET_KEYBOARD', data: {key: event.key, code:event.code}}, () => {});
      }
      document.addEventListener('keypress', (key)=>{console.log(key)});
  })();

  sendResponse(response)
}

chrome.runtime.onMessage.addListener(messagesFromReactAppListener);
