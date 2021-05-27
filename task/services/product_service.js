var express = require('express');
const Product = require("../models/product_schema");


async function create(data) {
   
    let details = new Product(data)
    // console.log("details.......", details)
    let product = await details.save()
    // console.log("product..................", product)

    return product;
    }

async function get_products() {
    console.log("product.........")
    let product  = await Product.find()
    console.log("product.........", product)
    return product;
}

async function get_product(id) {
    const product = await Product.findById(id)
    
    return product;
}

async function update_product(id, req) {
    const product = await Product.findByIdAndUpdate(id, req.body)
    return product;
}
module.exports = {create, get_products, get_product, update_product};
