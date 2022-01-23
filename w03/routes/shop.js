// shop (home) router 

const express = require('express');
const shopController = require('../controllers/shop'); // <--- shop.js controller

const router = express.Router();

// GET
router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);
router.get('/products/:productId', shopController.getProduct); // :xxxxxx setting a param

router.get('/cart', shopController.getCart);
router.post('/cart', shopController.postCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;