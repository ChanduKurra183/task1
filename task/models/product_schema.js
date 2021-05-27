const mongoose = require('mongoose');
const { Schema } = mongoose;



const product = new Schema( {
    
   
        "id":String,
        "title": String,
        "body_html": String,
        "vendor": String,
        "product_type": String,
        "price": Number,
        "status": String,
        "sku":String
           
    
        
 });

module.exports = mongoose.model('product', product);