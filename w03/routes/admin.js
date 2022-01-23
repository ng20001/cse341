// admin router

const express = require('express');
const adminController = require('../controllers/admin'); // <--- admin.js controller

const router = express.Router();

// /admin concat
// GET (url)
router.get('/add-product', adminController.getAddProduct); 
router.get('/products', adminController.getProducts);

// POST (form)
router.post('/add-product', adminController.postAddProduct); 

module.exports = router;