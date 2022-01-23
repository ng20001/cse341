// MAIN app (ROOT)

const path = require('path'); // path: core nodejs module
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

// set(): allows us to set any values globally on our express application
app.set('view engine', 'ejs'); // set the default templating engine
app.set('views', 'views'); // find views at /views

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// bodyParser.urlencoded(): calls next() automatically when its done
// execute body parsing, eg a form
app.use(bodyParser.urlencoded({extended: false})); // extended: if it should be able to parse non-default features
// whenever it tries to find a eg .css or .js files, it forwards it to the /public folder
app.use(express.static(path.join(__dirname, 'public'))); // grant direct reading access with express.static() to certain path

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404Page);

app.listen(3000);