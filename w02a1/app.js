const express = require('express');
const app = express();

// app.use("/users", (req, res, next) => {
//     console.log("Users case");
//     next();
// });

app.use("/users", (req, res, next) => {
    console.log("Users case");
    res.send("<h1>Users page</h1>");
});

app.use("/", (req, res, next) => {
    console.log("Slash case");
    res.send("<h1>Hello world</h1>");
});

app.listen(3000);