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
    socket.join('general-room');
    count++;
    websocketServer.to("general-room").emit("userConnection", count);

    socket.on("registerUser", (userName) => {
        users[socket.id] = userName || "Anonymous";
        console.log(users[socket.id] + " connected");
    })

    socket.on("userMessage", (msg) => {
        websocketServer.to("general-room").emit("message", users[socket.id], msg);
    })



    socket.on("disconnect", () =>{
        console.log("user disconnected from websocket server");
        count--;
        websocketServer.to("general-room").emit("userConnection", count);
        socket.broadcast.emit("userLeft", users[socket.id]);
        delete users[socket.id];
    })
})




// namespace
const javaNameSpace = websocketServer.of("/java");
let javaRoomCount = 0;

javaNameSpace.on("connection", (socket) => {
    socket.join("java-room");
    console.log(users[socket.id] + " connected java room.")
    javaRoomCount++;
    javaNameSpace.to("java-room").emit("userConnection", javaRoomCount);
    socket.on("registerUser", (userName) => {
        users[socket.id] = userName || "Anonymous";
    })


    socket.on("userMessage", (msg) => {
        javaNameSpace.to("java-room").emit("message", users[socket.id], msg);
    })


    socket.on("disconnect", () =>{
        console.log("user disconnected from /java");
        javaRoomCount--;
        javaNameSpace.to("java-room").emit("userConnection", javaRoomCount);
        socket.broadcast.to("java-room").emit("userLeft", users[socket.id]);
        delete users[socket.id];
    })
});




// namespace

const jsNameSpace = websocketServer.of("/js");
let jsRoomCount = 0;

jsNameSpace.on("connection", (socket) => {
    socket.join("js-room");
    console.log(users[socket.id] + " connected js room.")
    jsRoomCount++;
    jsNameSpace.to("js-room").emit("userConnection", jsRoomCount);
    socket.on("registerUser", (userName) => {
        users[socket.id] = userName || "Anonymous";
    })


    socket.on("userMessage", (msg) => {
        jsNameSpace.to("js-room").emit("message", users[socket.id], msg);
    })


    socket.on("disconnect", () =>{
        console.log("user disconnected from /js");
        jsRoomCount--;
        jsNameSpace.to("js-room").emit("userConnection", jsRoomCount);
        socket.broadcast.to("js-room").emit("userLeft", users[socket.id]);
        delete users[socket.id];
    })
});




// socket.emit -> sent to that particular client.
// socket.broadcast.emit -> sent to everyone except that user.
// websocketServer.emit -> sent to everyone


httpServer.listen(8080, () => {
    console.log("App listening on port 8080");
})