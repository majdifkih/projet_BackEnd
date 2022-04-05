const express = require('express')
const req = require('express/lib/request')
const app = express()
const port = 5000
const mongoose= require('mongoose')
const cors = require('cors')
const Chauffeur = require("./models/chauffeur")
const Vehicule = require("./models/vehicule")
const Produit = require("./models/Produit")
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(cors())
//chauffeur
//add
app.post('/ajout_chauffeur',(req,res)=>{
  let new_chauffeur = new Chauffeur(req.body);

  new_chauffeur.save((err)=>{
      if(err){
          return res.status(400).json({
              error:err
          })
      }
      return res.status(200).json({
          success:"Chauffeur save effactué avec succes"
      });
  });
});



{/*app.post("/ajout_chauffeur" , async (req,res) => {
    try{
      let new_chauffeur = new Chauffeur({
         cin : req.body.cin ,
         nom : req.body.nom ,
         prenom : req.body.prenom ,
         address : req.body.address ,
         age : req.body.age 
 
      });
      await new_chauffeur.save()
      console.log('save effactué avec succes!');
     } catch (err) {
        console.log(err);
     }
 });*/}

//get
app.get('/accuielChauffeur',(req,res)=>{
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

{/*app.get("/accuielChauffeur", async (req, res) => {
    try {
        await Chauffeur.find({})
        .then(result => {
          res.send(result);
        });
      } catch (err) {
          console.log(err);
      }
});*/}
//delete
app.delete('/deleteChauffeur/:id',(req,res)=>{
  Chauffeur.findByIdAndRemove(req.params.id ).exec((err,deleteChauffeur)=>{
      if(err) return res.status(400).json({
          message:"Suppression incorrect",err
      });

      return res.json({
          message:"Supprimer avec succes",deleteChauffeur
      });

      }
  )
})


{/*app.delete("/deleteChauffeur/:id", async (req, res) => {
    try {
        await Chauffeur.findOneAndDelete({id:req.params.id})
        
        console.log("supprime avec succes !");
        
      } catch (err) {
          console.log(err);
      }
});*/}
//update
app.put(`/majChauffeur/:id`,(req,res)=>{
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
              success:"Mise a jour avec succes"
          });
      }
      
  );
});

{/*app.put("/maj/:id", async (req, res) => {
    try {
        await Chauffeur.findOneAndUpdate({id:req.params.id},{
            address : req.body.address
        });
        
        console.log("mise a jour avec succes !");
        
      } catch (err) {
          console.log(err);
      }
});*/}




//vehicule
//add
app.post('/ajout_vehicule',(req,res)=>{
    let new_vehicule = new Vehicule(req.body);
  
    new_vehicule.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:"Vehicule save effactué avec succes"
        });
    });
  });

{/*app.post("/ajout_vehicule" , async (req,res) => {
    try{
      let new_vehicule = new Vehicule({
        Matricule : req.body.Matricule ,
        Kilométrage : req.body.Kilométrage ,
        Consommationcarburant : req.body.Consommationcarburant ,
        Categorie : req.body.Categorie ,
        Datamaintenance : req.body.Datamaintenance 
 
      });
      await new_vehicule.save()
      console.log('save effactué avec suces!');
     } catch (err) {
        console.log(err);
     }
 });*/}

//get
app.get('/accuielVehicule',(req,res)=>{
    Vehicule.find().exec((err,vehicule)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:vehicule
        });
    });
  });
{/*app.get("/accuielVehicule", async (req, res) => {
    try {
        await Vehicule.find({})
        .then(result => {
          res.send(result);
        });
      } catch (err) {
          console.log(err);
      }
});*/}


//delete
app.delete("/deleteVehicule/:id",(req,res)=>{
    Vehicule.findByIdAndRemove(req.params.id ).exec((err,deleteVehicule)=>{
        if(err) return res.status(400).json({
            message:"Suppression incorrect",err
        });
  
        return res.json({
            message:"Supprimer avec succes",deleteVehicule
        });
  
        }
    )
  })



{/*app.delete("/deleteVehicule/:id", async (req, res) => {
    try {
        await Vehicule.findOneAndDelete({id:req.params.id})
        
        console.log("supprime avec succes !");
        
      } catch (err) {
          console.log(err);
      }
});*/}
//update
app.put(`/majvehcule/:id`,(req,res)=>{
    Vehicule.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,vehicule)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Mise a jour Vehicule avec succes"
            });
        }
        
    );
  });
{/*app.put("/majvehcule/:id", async (req, res) => {
    try {
        await Vehicule.findOneAndUpdate({id:req.params.id},{
            Matricule : req.body.Matricule,
            Categorie : req.body.Categorie,
            Datamaintenance : req.body.Datamaintenance
        });
        
        console.log("mise a jour avec succes !");
        
      } catch (err) {
          console.log(err);
      }
});*/}
//Produit
//add
app.post('/ajout_produit',(req,res)=>{
    let new_produit = new Produit(req.body);
  
    new_produit.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:"Produit save effactué avec succes"
        });
    });
  });
  //get
  app.get('/accuielProduit',(req,res)=>{
    Produit.find().exec((err,produit)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:produit
        });
    });
  });

  //delete
  app.delete("/deleteProduit/:id",(req,res)=>{
    Produit.findByIdAndRemove(req.params.id ).exec((err,deleteProduit)=>{
        if(err) return res.status(400).json({
            message:"Suppression incorrect",err
        });
  
        return res.json({
            message:"Supprimer Produit avec succes",deleteProduit
        });
  
        }
    )
  })



  //update
  app.put('/majProduit/:id',(req,res)=>{
    Produit.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,produit)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Mise a jour Produit avec succes"
            });
        }
        
    );
  });
  //client
//add
app.post('/ajout_client',(req,res)=>{
    let new_client = new Client(req.body);
  
    new_client.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:"Client save effactué avec succes"
        });
    });
  });
  //get
  app.get('/accuielClient',(req,res)=>{
    Client.find().exec((err,client)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:client
        });
    });
  });

  //delete
  app.delete("/deleteClient/:id",(req,res)=>{
    Client.findByIdAndRemove(req.params.id ).exec((err,deleteClient)=>{
        if(err) return res.status(400).json({
            message:"Suppression incorrect",err
        });
  
        return res.json({
            message:"Supprimer Client avec succes",deleteClient
        });
  
        }
    )
  })



  //update
  app.put('/majClient/:id',(req,res)=>{
    Client.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,client)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Mise a jour Client avec succes"
            });
        }
        
    );
  });
//Fournisseur
//add
app.post('/ajout_fournisseur',(req,res)=>{
    let new_fournisseur = new Fournisseur(req.body);
  
    new_fournisseur.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            })
        }
        return res.status(200).json({
            success:"Fournisseur save effactué avec succes"
        });
    });
  });
  //get
  app.get('/accuielFournisseur',(req,res)=>{
    Fournisseur.find().exec((err,fournisseur)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:fournisseur
        });
    });
  });

  //delete
  app.delete("/deleteFournisseur/:id",(req,res)=>{
    Fournisseur.findByIdAndRemove(req.params.id ).exec((err,deleteFournisseur)=>{
        if(err) return res.status(400).json({
            message:"Suppression incorrect",err
        });
  
        return res.json({
            message:"Supprimer Fournisseur avec succes",deleteFournisseur
        });
  
        }
    )
  })



  //update
  app.put('/majFournisseur/:id',(req,res)=>{
    Fournisseur.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,fournisseur)=>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"Mise a jour Fournisseur avec succes"
            });
        }
        
    );
  });


mongoose.connect('mongodb+srv://admin:admin123@cluster0.rkyui.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  (err, done)=>{
    if (err){
        console.log(err)

    }
    if(done){
        console.log('base de donnee connecter avec succes!');
    }
  }
);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))