const path = require('path'); // path: core nodejs module

const express = require('express');

// const rootDir = require('../util/path');

// takes exported item from admin.js
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => { // get() vs use(): get() gets exact matching path, while use() doesn't
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    const products = adminData.products;
    console.log('shop.js', products);
    // use default templating engine (defined engine) Note: directory is already defined
    // 1st arg 'shop': file name shop.pug
    // 2nd argu {}: key-value object to send for pug use
    res.render('shop', {
        prods: products,
        pageTitle: 'Shop',
        path: '/',
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true
    });
});

module.exports = router;