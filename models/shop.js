
const mongoose = require('mongoose')


const shopSchema = new mongoose.Schema({
    info: {type: String, required: true}
});

const Shops = mongoose.model('shops' ,shopSchema)
module.exports = Shops
 
