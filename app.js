const express = require("express");
const app = express();
const people = require("./routes/people.js");
const login = require("./routes/login.js");

const port = process.env.PORT || 5000;

// app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/login", login);
app.use("/api/people", people);

app.listen(port, () => {
    console.log("Listening on port 5000");
})