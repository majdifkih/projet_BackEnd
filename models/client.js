const mongoose = require('mongoose')

const clientSchema = mongoose.Schema({
    num : {
        type : String,
        required:true,
        unique:true
    },
    nom : {
        type : String,
        required:true,
    },
    telf : {
        type : String,
        required:true,
    },
    status : {
        type : String,
        required:true,
    },
    address : {
        type : String,
        required:true,
    },
    
});   
const Client = mongoose.model('client' ,clientSchema)
module.exports = Client





