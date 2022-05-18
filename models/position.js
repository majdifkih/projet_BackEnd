const mongoose = require('mongoose')


const positionSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },

      latitude:{
        type:String,
        required:true,
       
    },

    longutide:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    }
});

const Position = mongoose.model('position' ,positionSchema)
module.exports = Position
 
