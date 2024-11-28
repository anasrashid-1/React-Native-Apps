const {EventEmitter} = require("events")
const Player = new EventEmitter;

Player.on("shot", () => {
    console.log("Player injured")
})

Player.on("dead", () => {
    console.log("Player Dead")
})


Player.emit("shot");
Player.emit("dead")