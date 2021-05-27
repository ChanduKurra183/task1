const express = require('express');
const router = express();
const products = require('../services/product_service');


router.post('/create_product', async(req, res) => {
    
    const data = req.body

    try {
        const product1 = await products.create(data)
        res.status(200).send(product1)
        console.log("product1>>>>>>>>>>>>>>>", product1)
    } catch(err) {
        res.status(400).send('Error'+ err)
        console.log(err)
    }
})

router.get('/list', async(req, res) => {
    try {
        console.log("................>")
        const product = await products.get_products()
        res.json(product)
        console.log(product)
        
    }
    catch(err) {
        res.send('error' + err)
    }
    
})

router.get('/get', async(req, res) => {
    let id  = req.query.id;
    console.log("id...", id);
    try {
        const product = await products.get_product(id)
        res.status(200).send(product)
        res.send("product retrived...")
    }
    catch(err) {
        res.status(400).send('error' + err)
    }
    
})

router.put('/update', async(req, res) => {
    let id = req.query.id;
    try {
        const product = await products.update_product(id, req)
        res.json(product)
    }
    catch(err) {
        res.send('Error' + err)
    }
})

module.exports = router