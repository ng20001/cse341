const express = require('express');
const path = require('path');

const router = express.Router();

router.use("/users", (req, res, next) => {
    console.log("Users case");
    // res.send("<h1>Users page</h1>");
    res.sendFile(path.join(__dirname, '..', 'views', 'users.html'));
});

router.use("/", (req, res, next) => {
    console.log("Slash case");
    // res.send("<h1>Hello world</h1>");
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

module.exports = router;