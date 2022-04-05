const mongoose = require('mongoose')

const fournisseurSchema = mongoose.Schema({
    num : {
        type : Number,
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
    address : {
        type : String,
        required:true,
    },
     
});   
const Fournisseur = mongoose.model('fournisseur' ,fournisseurSchema)
module.exports = Fournisseur





