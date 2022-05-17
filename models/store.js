
const mongoose = require('mongoose')


const storeSchema = new mongoose.Schema({
    info: {type: String, required: true}
});

const Store = mongoose.model('shops' ,storeSchema)
module.exports = Store
 
