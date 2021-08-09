
/*Depgo client  API */

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Global app object
const app = express();

// Middleware config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// Database connection
mongoose.connect(  
    "mongodb+srv://daniela:bedujavascript@cluster0.yyi8g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true}
);

app.get("/", function (req, res) {
    res.send("Welcome to depgo API!");
});

// Bootstrap server
const server = app.listen(process.env.PORT || 3000, function () {
    console.log(`App running.Listening on port ${server.address().port}`);
});