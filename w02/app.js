const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// register the template engine (for hbs)
// app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'})); // expressHbs(): initialize the view engine

// set(): allows us to set any values globally on our express application
app.set('view engine', 'ejs'); // set the default templating engine
app.set('views', 'views'); // find views at /views

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// bodyParser.urlencoded(): calls next() when its done
// execute body parsing, eg a form
app.use(bodyParser.urlencoded({extended: false})); // extended: if it should be able to parse non-default features
// whenever it tries to find a eg .css or .js files, it forwards it to the /public folder
app.use(express.static(path.join(__dirname, 'public'))); // grant direct reading access with express.static() to certain path

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).send('<h1>Page not found</h1>');
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {pageTitle: 'Page not Found'});
});

app.listen(3000);