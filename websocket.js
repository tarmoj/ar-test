// websocket stuff

let websocket = null;
let time = -1;

// TODO: REWRITE according to websocket-test

function doConnect()
{
    websocket = new WebSocket("wss://data.elektron.art");
    websocket.onopen = function(evt) { onOpen(evt) };
    websocket.onclose = function(evt) { onClose(evt) };
    websocket.onmessage = function(evt) { onMessage(evt) };
    websocket.onerror = function(evt) { onError(evt) };
}

function onOpen(evt)
{
    console.log("connected\n");
    // const connectButton = document.getElementById("connectButton");
    // //connectButton.disabled = true;
    // connectButton.innerHTML = "Connected";

}

function onClose(evt)
{
    console.log("disconnected\n");
    // const connectButton = document.getElementById("connectButton");
    // connectButton.disabled = false;
    // connectButton.innerHTML = "Connect";
}

function onMessage(event)
{
    //console.log("response: " + evt.data + '\n');
    const data = JSON.parse(event.data);
    console.log("Data: ", data);
    if (data.hasOwnProperty("TT_time")) {
        console.log("Time is in seconds: ", data.TT_time )
    }

    const mess_array = console.log();
    // let's assume it is time
    //console.log(mess_array[0]);
    let timeString = "xx:xx"
    if (mess_array[0] == "b") {
        timeString = mess_array[1].padStart(2, "0") + ":" +  mess_array[2].padStart(2, "0");
        time = parseInt(mess_array[1])*60 + parseInt(mess_array[2]);
        console.log(time, timeString);

        if (wsMessageCallback) {
            wsMessageCallback(time, timeString);
        }
    }
}

function onError(evt)
{
    console.log('error: ' + evt.data + '\n');
    websocket.close();
    // const connectButton = document.getElementById("connectButton");
    // connectButton.disabled = false;
    // connectButton.innerHTML = "Connect";

}


function doSend(message)
{
    console.log("sent: " + message + '\n');
    websocket.send(message);
}

