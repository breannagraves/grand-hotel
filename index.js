const express = require("express");

const app = express(); 

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use(express.static('public'))

app.get("/", (request, response) => {
    response.status(200).json({message: "Hello"});
});

app.get("/home", (request, response) => {
    response.sendFile(__dirname + "/index.html");
});

app.get("/about", (request, response) => {
    response.sendFile(__dirname + "/about.html");
});

app.get("/rooms", (request, response) => {
    response.sendFile(__dirname + "/rooms.html");
});

app.get("/events", (request, response) => {
    response.sendFile(__dirname + "/events.html");
});

app.get("/customers", (request, response) => {
    response.sendFile(__dirname + "/customers.html");
});

app.get("/contact", (request, response) => {
    response.sendFile(__dirname + "/contact.html");
});