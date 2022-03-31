const express= require('express')
const Chauffeur= require('../models/chauffeur');

const router = express.Router();
const bodyParser = require('body-parser')

app.use(bodyparser.json());
//save driver

router.post('/chauffeur/save',(req,res)=>{
    let new_chauffeur = new Chauffeur(req.body);

    new_chauffeur.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:"ajout chauffeur avec succes"
        });
    });
});

//get drivers

router.get('/chauffeur/chaufHome',(req,res)=>{
    Chauffeur.find().exec((err,chauffeur)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:chauffeur
        });
    });
});

//update driver

router.put('/chauffeur/chaufHome/majchauf/:id',(req,res)=>{
    Chauffeur.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,chauffeur)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"mise a jour chauffeur avec succes"
            });
        }
        
    );
});

// delete driver 

router.delete('/chauffeur/supprimechauf/:id',(req,res)=>{
    Chauffeur.findByIdAndRemove(req.params.id ).exec((err,suppchauffeur)=>{
        if(err) return res.status(400).json({
            message:"supprimer incorrecte",err
        });

        return res.json({
            message:"supprimer chauffeur avec succes",suppchauffeur
        });

        }
    )
})
module.exports= router