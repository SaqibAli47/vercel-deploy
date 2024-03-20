// const fs = require('fs');
// const product = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
// const products = product.products;
const model = require('../Models/product');
const Product = model.Product;
// here to start with real Model data handling
exports.createProduct = async (req, res) => {
    // one thing keep in mind in create API we instantiate the Product constructor
    try{
        const data = req.body;
        const product = new Product(data);
        if(data){
            // const success = products.push(data);
            const success = await product.save();
            res.status(201).json({"success": {success}});
        }
    } catch(err){
        console.log("err", err);
        res.status(400).json({"message": err});

    }
}
exports.getAllProducts = async (req, res) => {
    // console.log(req.method)
    try{
        const getProducts = await Product.find();
        res.status(200).json({"success": getProducts});
    }
    catch(err){
        console.log("err", err);
        res.status(202).json({"message": "Not Found"});
    }
}
exports.getProduct = async (req, res) => {
    try {
        // const id = +req.params.id;  // in mongoose it will consider the string also
        // const findProduct = products.find(p => p.id === id);
        const id = req.params.id;
        const getSingleProduct = await Product.findById({_id: id});
        res.status(200).json({"success": getSingleProduct})
    } catch(err){
        console.log("err", err);
        res.status(400).json({"message": "Not Found"})
    }
}
exports.replaceProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        if(id !== -1 && data !== ''){
            const replaceProduct = await Product.findOneAndReplace({_id: id}, data, {new: true});
            // const findIndex = products.find(p => p.id === id);
            // const success = products.splice(findIndex, 1, {id: id, ...req.body});
            res.status(200).json({"success": replaceProduct});
        }
    } catch(err){
        console.log("err", err);
        res.status(400).json({"message": {err}})
    }
}
exports.updateProduct = async (req, res) => {
    try{
        // const id = +req.params.id;
        const id = req.params.id;
        const data = req.body;
        if(id !== -1 && data !== ''){
            // const findIndex = products.find(p => p.id === id);
            // const existingProduct = products[findIndex];
            // const updateProduct = products.splice(findIndex, 1, {...existingProduct, ...data})
            const updateProduct = await Product.findByIdAndUpdate({_id: id}, data, {new: true});
            res.status(200).json({"success": updateProduct});
        }

    } catch(err){
        console.log("err", err);
        res.status(400).json({"message": {err}});
    }
}
exports.deleteProduct = async (req, res) => {
    try{
        // const id = +req.params.id;
        const id = req.params.id;
        // const findIndex = products.find(p => p.id === id);
        // const deleteProduct = products.splice(findIndex, 1);
        const deleteProduct = await Product.findByIdAndDelete({_id: id})
        if(deleteProduct){
            res.status(200).json({"success": "Data Deleted"})
        }

    } catch(err) {
        console.log("err", err);
        res.status(400).json({"message": {err}});
    }
}