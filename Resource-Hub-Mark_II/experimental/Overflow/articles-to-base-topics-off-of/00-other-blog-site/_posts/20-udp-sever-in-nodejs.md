When you want to communicate between two processes, one of the popular approch is `sockets`. So when I need a notification system I thought of writing as a seperate service and pass data from my main web application to this notifier via a UDP socket.

So I wrote a nodejs app for the UDP server to accept data from my client (webapp) and notifiy the other clients using websockets.

To write a server which accepts UDP connections you can use [dgram](https://nodejs.org/api/dgram.html) module in nodejs.

    var dgram = require("dgram");
    var udpPort = process.env.UDPPORT || 3000;

    var server = dgram.createSocket("udp4");
    server.bind(udpPort);

    server.on("listening", function () {
      console.log("Server started at ", udpPort);
    });

    server.on("message", function (msg, info) {
      var message = msg.toString(); // need to convert to string
      // since message is received as buffer
      // receive the message and do task
    });

    server.on("error", function () {
      // handle error
    });

You can bind to `lisening` event to task after the server is up and for startup message. To recieve message from the clients you need to bind `message` event.

Now if you are using PHP to send data to UDP port then

    <?php
    $socket = socket_create(AF_INET, SOCK_DGRAM, SOL_UDP);
    if(!socket_connect($socket, 'localhost', '3000')) {
        echo "socket connection error";
        return;
    }

    $msg = "Sample message from PHP";
    $bytes = socket_write($socket, $msg_json);

    ?>

$
