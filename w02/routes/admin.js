const express = require('express');
const path = require('path');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    // console.log('In middleware 1');
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'); // send(): exiting function since no next() is called
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => { // use(): both POST & GET; get(): GET request only; post(): POST only
    // console.log(req.body); // req.body: express
    products.push({
        title: req.body.title
    }); // array push shared across all node users in node server
    res.redirect('/');
});

// module.exports = router; // router here: valid middleware function

exports.routes = router;
exports.products = products;