// shop controller

const Product = require('../models/product');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    Product.fetchAll(products => { // products: array of JSON products received from products.js
        res.render('shop/product-list', { // folder/.ejs file to look at
            prods: products,
            pageTitle: 'All Products',
            path: '/products'
        });
    });
    // console.log('from shop.js', products);
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId; // req.params.xxxxx: retreiving param from route
    Product.findById(prodId, product => {
        res.render('shop/product-detail', {
            product: product,
            pageTitle: product.title,
            path: '/products'
        }); // product on left: key of the object, on right: the product as value
    });

};

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/'
        });
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Your Cart',
        path: '/cart'
    })
}

exports.postCart = (req, res, next) => {
    const prodId = req.body.productId; // from hidden input from ejs
    Product.findById(prodId, (product) => {
        Cart.addProduct(prodId, product.price);
    });
    res.redirect('/cart');
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        pageTitle: 'Your Orders',
        path: '/orders'
    })
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout',
        path: '/checkout'
    })
}