const express = require('express');
const route = express.Router();
const controller = require('../controller/productController')
const axios = require('axios');

route.get('/', (req, res) => {
    axios.get('http://localhost:3000/api/products')
    .then(function(response) {
        console.log(response.data);
        res.render('index', { products: response.data });
    }).catch(err => {
        res.send(err);
    })
})

route.get('/add_product', (req, res) => {
    res.render('add_product');
})

route.get('/update_product', (req, res) => {
    axios.get('http://localhost:3000/api/products', {params: {id: req.query.id}})
    .then(function(productData) {
        res.render("update_product", { product: productData.data })
    }).catch(err => {
        res.send(err);
    })
})

// API
route.post('/api/products', controller.create);
route.get('/api/products', controller.find);
route.put('/api/products/:id', controller.update);
route.delete('/api/products/:id', controller.delete);

module.exports = route;