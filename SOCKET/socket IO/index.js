const express =  require('express');
const http = require('http');
const {Server} = require('socket.io');



const app = express();
const httpServer = http.createServer();
const websocketServer = new Server(httpServer)


app.get((req, res) => {
    res.json({
        message: "Hello, world"
    })
})

let users = {};
let count = 0;
websocketServer.on("connection", (socket) => {
    console.log("new user connected to websocket server");
    count++;
    websocketServer.emit("userConnection", count);

    socket.on("registerUser", (userName) => {
        users[socket.id] = userName || "Anonymous";
        console.log(users[socket.id] + " connected");
    })

    socket.on("userMessage", (msg) => {
        websocketServer.emit("message", users[socket.id], msg);
    })


    socket.on("disconnect", () =>{
        console.log("user disconnected from websocket server");
        count--;
        websocketServer.emit("userConnection", count);
        socket.broadcast.emit("userLeft", users[socket.id]);
        delete users[socket.id];
    })
})



// socket.emit -> sent to that particular client.
// socket.broadcast.emit -> sent to everyone except that user.
// websocketServer.emit -> sent to everyone


httpServer.listen(8080, () => {
    console.log("App listening on port 8080");
})