const express = require('express');
const app = express();

const mainRoutes = require('./routes/index');
const bodyParser = require('body-parser');
const path = require('path');


app.set('view engine', 'ejs'); // set the default templating engine
app.set('views', 'views'); // find views at /views

// app.use("/users", (req, res, next) => {
//     console.log("Users case");
//     next();
// });

app.use(bodyParser.urlencoded({extended: false})); // extended: if it should be able to parse non-default features
app.use(express.static(path.join(__dirname, 'public')));
app.use(mainRoutes);

app.listen(3000);