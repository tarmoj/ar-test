// websocket stuff

let websocket = null;

// would be better to rewrite as a class or similar...

function setStatus(status) {
  // TODO: give the element
  //document.querySelector("#status").innerHTML = status;
}

function doConnect(onMessage = () => {}) {
  if (websocket && websocket.readyState === WebSocket.OPEN) {
    console.log("Socket seems to be OK and open. Ignoring.");
    return;
  }
  websocket = new ReconnectingWebSocket("wss://data.elektron.art");
  websocket.onopen = function (evt) {
    onOpen(evt);
  };
  websocket.onclose = function (evt) {
    onClose(evt);
  };
  websocket.onmessage = function (evt) {
    const data = JSON.parse(evt.data);
    onMessage(data);
  };
  websocket.onerror = function (evt) {
    onClose(evt);
  };
}

function onOpen(evt) {
  console.log("connected\n");
  setStatus("connected");

  if (typeof wsOpenCallback === "function") {
    wsOpenCallback();
  }
}

function onClose(evt) {
  console.log("disconnected");
  setStatus("disconnected");
  if (typeof wsClosedCallback === "function") {
    wsClosedCallback();
  }
}

// function onMessage(event) {
//   const data = JSON.parse(event.data);
//   //console.log("Data: ", data);

//   if (typeof wsMessageCallback === "function") {
//     wsMessageCallback(data);
//   }
// }
//
// function onError(evt)
// {
//     console.log('error: ' + evt.data + '\n');
//     websocket.close();
// }

//
function doSend(message) {
  if (websocket.readyState === WebSocket.OPEN) {
    websocket.send(message);
    console.log("sent: " + message);
  } else {
    console.log("Socket is not open");
  }
}
