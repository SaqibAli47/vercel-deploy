const express = require('express');
const productRouter = express.Router();
const productRoute = require('../Controller/product');
productRouter.post('/products', productRoute.createProduct)
.get('/products', productRoute.getAllProducts)
.get('/products/:id', productRoute.getProduct)
.put('/products/:id', productRoute.replaceProduct)
.patch('/products/:id', productRoute.updateProduct)
.delete('/products/:id', productRoute.deleteProduct)

exports.productRouter = productRouter;