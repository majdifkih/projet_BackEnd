
const mongoose = require('mongoose')


const shopSchema = new mongoose.Schema({
    title: {type: String, required: true}
});

const Shops = mongoose.model('shops' ,shopSchema)
module.exports = Shops
 
