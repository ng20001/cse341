// Model - product
// Deal with database

const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path');

const p = path.join( // set up a local json file path
    rootDir,
    'data',
    'products.json'
);

// read file from local
const getProductsFromFile = cb => { 
    fs.readFile(p, (err, fileContent) => {
        if (err) { // if no file found in the path
            cb([]); // return an empty array
        } else {
            cb(JSON.parse(fileContent)); // return the parsed existing JSON file
        }
    });
};

module.exports = class Product {
    constructor(title, imageUrl, price, description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }

    save() {
        this.id = Math.random().toString(); // unique id 
        // products.push(this);
        getProductsFromFile(products => { // products: a value received from getProductsFromFile return
            products.push(this); // push new content
            fs.writeFile(p, JSON.stringify(products), (err) => { // overwrite the file
                console.log(err);
            });
        });
    };

    static fetchAll(cb) { // static: allow direct call of this function from the class itself (in this case, Product.fetchAll())
        getProductsFromFile(cb);
    };

    static findById(id, cb) {
        getProductsFromFile(products => {
            const product = products.find(p => p.id === id); // p: the object in database
            cb(product); // return the callback
        })
    }
}