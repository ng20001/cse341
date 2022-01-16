const express = require('express');
const path = require('path');

const userNames = [];

const router = express.Router();


router.get("/users", (req, res, next) => {
    // res.sendFile(path.join(__dirname, '..', 'views', 'users.html'));
    res.render('users', {users: userNames});
});

router.get("/", (req, res, next) => {
    // res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
    res.render('index');
});

router.post("/", (req, res, next) => {
    console.log(req.body);
    userNames.push({ // array push shared across all node users in node server
        name: req.body.title
    }); 
    res.redirect('/users');
    // res.sendFile(path.join(__dirname, '..', 'views', 'users.html'));
});

module.exports = router;