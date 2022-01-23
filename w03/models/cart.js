// Model - cart
// Deal with database

const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

const p = path.join( // set up a local json file path
    rootDir,
    'data',
    'cart.json'
);

module.exports = class Cart {
    // constructor() {
    //     this.products = [];
    //     this.totalPrice = 0;
    // }

    static addProduct(id, productPrice) {
        // Fetch the previous cart
        fs.readFile(p, (err, fileContent) => {
            let cart = {products: [], totalPrice: 0}; // init an empty cart
            if (!err) { // if cart exists,
                cart = JSON.parse(fileContent); // replace the empty cart with the existing cart
            }

            // Analyze the cart => Find existing product 
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;

            if (existingProduct) { // for existing product scenerio
                updatedProduct = { ...existingProduct }; // existingProduct: id, qty
                updatedProduct.qty += 1; // increase qty by 1
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            } else { // for new product scenerio
                updatedProduct = { id: id, qty: 1 };
                cart.products = [...cart.products, updatedProduct]; // adding new product into the cart
            }

            cart.totalPrice += +productPrice; // + sign: convert string to num

            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            });
        });
    }
}