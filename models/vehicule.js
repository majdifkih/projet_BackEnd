const mongoose = require('mongoose')

const vehicleschema = new mongoose.Schema({

    Matricule:{
        type:String,
        required:true,
        unique:true
    },

    Kilométrage:{
        type:Number,
        required:true
    },
    Consommationcarburant:{
        type:Number,
        required:true
    },
    Categorie:{
        type:String,
        required:true
    },
    Datamaintenance:{
        type:Date,
        required:true
    }


});

/**
 * Validates unique email
 */
 vehicleschema.path('Matricule').validate(async (Matricule) => {
    const nicCount = await mongoose.models.vehicledbs.countDocuments({ Matricule })
    return !nicCount
  }, 'Matricule est deja exist'
 )
module.exports= mongoose.model('vehicledbs',vehicleschema)