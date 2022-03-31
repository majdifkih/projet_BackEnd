const express = require('express')
const req = require('express/lib/request')
const app = express()
const port = 5000
const mongoose= require('mongoose')
const cors = require('cors')
const Chauffeur = require("./models/chauffeur")
const Vehicule = require("./models/vehicule")
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.use(cors())
//chauffeur
//add
app.post("/ajout_chauffeur" , async (req,res) => {
    try{
      let new_chauffeur = new Chauffeur({
         cin : req.body.cin ,
         nom : req.body.nom ,
         prenom : req.body.prenom ,
         address : req.body.address ,
         age : req.body.age 
 
      });
      await new_chauffeur.save()
      console.log('save effactué avec suces!');
     } catch (err) {
        console.log(err);
     }
 });

//get
app.get("/accuielChauffeur", async (req, res) => {
    try {
        await Chauffeur.find({})
        .then(result => {
          res.send(result);
        });
      } catch (err) {
          console.log(err);
      }
});
//delete
app.delete("/deleteChauffeur/:id", async (req, res) => {
    try {
        await Chauffeur.findOneAndDelete({id:req.params.id})
        
        console.log("supprime avec succes !");
        
      } catch (err) {
          console.log(err);
      }
});
//update
app.put("/maj/:id", async (req, res) => {
    try {
        await Chauffeur.findOneAndUpdate({id:req.params.id},{
            address : req.body.address
        });
        
        console.log("mise a jour avec succes !");
        
      } catch (err) {
          console.log(err);
      }
});




//vehicule
//add
app.post("/ajout_vehicule" , async (req,res) => {
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
 });

//get
app.get("/accuielVehcule", async (req, res) => {
    try {
        await Vehicule.find({})
        .then(result => {
          res.send(result);
        });
      } catch (err) {
          console.log(err);
      }
});
//delete
app.delete("/deleteVehicule/:id", async (req, res) => {
    try {
        await Vehicule.findOneAndDelete({id:req.params.id})
        
        console.log("supprime avec succes !");
        
      } catch (err) {
          console.log(err);
      }
});
//update
app.put("/majvehcule/:id", async (req, res) => {
    try {
        await Vehicule.findOneAndUpdate({id:req.params.id},{
            Datamaintenance : req.body.Datamaintenance
        });
        
        console.log("mise a jour avec succes !");
        
      } catch (err) {
          console.log(err);
      }
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