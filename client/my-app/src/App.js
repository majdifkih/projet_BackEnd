import React, { Component } from 'react'
import AjoutChauf from "./components/ajoutChauffeur";
import AccuielChauffeur from "./components/AccuilChauffeur" ; 
import TMSDash from "./components/TMSDash";
import './App.css';
import EditChauffeur from "./components/EditChauffeur";
import NavBar from "./components/NavBar"; 
import AjoutVehicle from "./components/ajoutVechule"; 
import PMNavBar from "./components/PMNavBar"; 
import { Routes, Route } from "react-router-dom"; 
import AccuielVehicle from './components/AccuilVehicule';

export default class App extends Component {
  render() {
  
  return (
      <div>
        <PMNavBar/>
      <NavBar/>
      
        <Routes>
        <Route path="/accuielChauffeur" exact element={<AccuielChauffeur />}/>
          <Route path="/ajout_chauffeur" element={<AjoutChauf />}/>
          
          <Route path="/maj/:id" element={<EditChauffeur />}/>
          
          <Route path="/ajout_vehicule" element={<AjoutVehicle />}/>
          <Route path="/accuielVehcule" element={<AccuielVehicle />}/>
          <Route path="/TMSDash" element={<TMSDash />}/>
        </Routes>


       
        
      </div>


  )
}}









