if ("WebSocket" in window) {
     var ws = new WebSocket("ws://echo.websocket.org/");
     console.log('Connected');
     ws.onopen = function() {
        ws.send("Hello");
        console.log('Message sent.');
     };
     ws.onmessage = function (evt) {
        var received_msg = evt.data;
        console.log(received_msg);
     };
     ws.onclose = function() {
        console.log("Connection is closed...");
     };
} else {
     console.log("WebSocket NOT supported by your Browser!");
}
