// websocket stuff

let websocket = null;
let time = -1;

function doConnect()
{
    websocket = new WebSocket("ws://live.uuu.ee:6006/ws");
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

function onMessage(evt)
{
    //console.log("response: " + evt.data + '\n');
    const mess_array = evt.data.split(" ");
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

    if (mess_array[0] == "n") {	// notification
        mess_array.splice(0,1); // get rid of the "n" and join word intro string back again
        const message = mess_array.join(" ");
        //notification(message);
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

