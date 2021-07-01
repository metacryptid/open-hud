const express = require("express");
const app = express();
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.get("/hud.js", function (req, res) {
    res.sendFile(__dirname + "/hud.js");
});
app.get("/style.css", function (req, res) {
    res.sendFile(__dirname + "/style.css");
});
app.listen(3000, function () {
    console.log("Server is running on localhost3000");
});
