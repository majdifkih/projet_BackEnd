const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({

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
 vehicleSchema.path('Matricule').validate(async (Matricule) => {
    const nicCount = await mongoose.models.vehicledbs.countDocuments({ Matricule })
    return !nicCount
  }, 'Matricule est deja exist'
 )
 const Vehicle= mongoose.model('vehicledbs',vehicleSchema)
module.exports = Vehicle