const express = require('express');
const app = express();

const mainRoutes = require('./routes/index');

const path = require('path');

// app.use("/users", (req, res, next) => {
//     console.log("Users case");
//     next();
// });

app.use(express.static(path.join(__dirname, 'public')));
app.use(mainRoutes);

app.listen(3000);