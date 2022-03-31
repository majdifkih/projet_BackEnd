const mongoose = require('mongoose')

const chauffeurSchema = mongoose.Schema({
    cin : {
        type : Number,
        required:true,
        unique:true
    },
    nom : {
        type : String,
        required:true,
    },
    prenom : {
        type : String,
        required:true,
    },
    address : {
        type : String,
        required:true,
    },
    age : {
        type : Number,
        required:true,
    }
});   
const Chauffeur = mongoose.model('chauffeur' ,chauffeurSchema)
module.exports = Chauffeur





