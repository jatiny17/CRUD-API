const express = require("express");
const app = express();
const people = require("./routes/people.js");
const login = require("./routes/login.js");

// app.use(express.static("./methods-public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/login", login);
app.use("/api/people", people);

app.listen(5000, () => {
    console.log("Listening on port 5000");
})