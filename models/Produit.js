const mongoose = require('mongoose')

const produitSchema = mongoose.Schema({
    referenceproduit : {
        type : String,
        required:true,
        unique:true
    },
    nomproduit: {
        type : String,
        required:true,
    },
    quantiteproduit  : {
        type : Number,
        required:true,
    },
    prixproduit : {
        type : Number,
        required:true,
    },
    categorie : {
        type : String,
        required:true,
    }
});   
const Produit = mongoose.model('produit' ,produitSchema)
module.exports = Produit





