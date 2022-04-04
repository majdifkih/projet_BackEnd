import React, { Component } from 'react'
import AjoutChauf from "./components/ajoutChauffeur";
import AccuielChauffeur from "./components/AccuilChauffeur" ; 
import TMSDash from "./components/TMSDash";
import './App.css';
import EditChauffeur from "./components/EditChauffeur";
import AjoutVehicule from "./components/ajoutVehicule"; 
import PMNavBar from "./components/PMNavBar"; 
import { Routes, Route } from "react-router-dom"; 
import AccuielVehicule from './components/AccuilVehicule';
import EditVehicule from './components/EditVehicle';
import Accuielproduit from './components/AccuilProduit';
import AjoutProduit from './components/AjoutPrduit';
export default class App extends Component {
  render() {
  
  return (
      <div>
        <PMNavBar/>
      
      
        <Routes>
        <Route path="/accuielChauffeur" exact element={<AccuielChauffeur />}/>
          <Route path="/ajout_chauffeur" element={<AjoutChauf />}/>
          
          <Route path="/majChauffeur/:id" element={<EditChauffeur />}/>
          <Route path="/majvehcule/:id" element={<EditVehicule />}/>
          <Route path="/ajout_vehicule" element={<AjoutVehicule />}/>
          <Route path="/accuielVehicule" element={<AccuielVehicule />}/>
          <Route path="/accuielProduit" element={<Accuielproduit />}/>
          <Route path="/ajout_produit" element={<AjoutProduit />}/>
          <Route path="/TMSDash" element={<TMSDash />}/>
        </Routes>


       
        
      </div>


  )
}}









