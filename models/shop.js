
const mongoose = require('mongoose')


const shopSchema = new mongoose.Schema({
    location: {type: Object, required: true},
    title: {type: String, required: true},
});

const Shops = mongoose.model('shops' ,shopSchema)
module.exports = Shops
 
