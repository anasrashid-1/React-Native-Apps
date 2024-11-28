
// const {WebSocketServer} = require("ws");
// const wss = new WebSocketServer({port: 8080});


// wss.on("connection", (client) => {
//     console.log("A NEW CONNECTION WAS MADE");

//     client.on("message", (msg)=>{
//         console.log("client : " + msg);
//     });

//     client.send("Hey from server!");
// })


// client from brower console
// const socket = new WebSocket("ws://localhost:8080/");
// socket.onopen = () => {
//     console.log("Connected to server.");
//     socket.send("Hey from client!");
//     socket.onmessage = (event) =>{
//         console.log("server : " + event.data)
//     }
// };



const {WebSocketServer} = require("ws");

const wss = new WebSocketServer({port: 8080});
wss.on("connection",(socket) => {
    console.log("A NEW CONNECTION WAS MADE");

    socket.on("message", (msg) => {
        // console.log(typeof msg)
        console.log(
            "Client : " + msg
        );
        if(msg.toString() === "hey"){
            socket.send("hello")
        } else if(msg.toString() === "bye"){
            socket.send("ta ta")
        }
    })

    socket.on("close", () => {
        console.log("A CONNECTION WAS CLOSED");
    })
})