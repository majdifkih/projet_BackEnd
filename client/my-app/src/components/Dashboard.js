import React from "react";
import "./Dash.css";
import {Link} from 'react-router-dom';
function Dash(){
  
    return (
        
        <div  className="container">
        <span className="over">Overview</span>
        <div  className="content">
            <div  className="cards">
                <div  className="card">
                <button className="btn">
                    <a href="#"><h5>Demande</h5></a>
                        <h1>60</h1>
                        
                    </button>
                    
                </div>
                <div  className="card">
                <button className="btn">
                    <h5>Chauffeurs Actives</h5>
                        <h1>16</h1>
                        
                   </button>
                    
                </div>
                <div  className="card">
                <button className="btn">
                    <h5>Avertissements</h5>
                        <h1>4</h1>
                        
                    </button>
                    
                </div>
                <div  className="card">
                <button className="btn"> 
                        
                        <h5>Apareils Connectes</h5>
                        <h1>16</h1>
                    </button>
                    
                </div>
               
            </div>
            <div  className="content-2">
                <div  className="recent-payments">
                    <div  className="title">
                    <img
                 src="%PUBLIC_URL%../../../graphic.JPG"
                 className="circle" />
                       </div>
                       <div className="chiffre">
                    <table className="table">
                        <tr>eeeeee</tr>
                    </table>
                </div>
                </div>
                
            
            </div>
            <div  className="content-1">
            <div  className="appreil">
                    <div  className="title">
                        <div>
                        <h4>Apareils</h4>
                        
                        </div>
                        <a href="#"  className="btn" >Voir tout</a>
                    
                    </div>
                    </div>
                <div  className="demande">
                    <div  className="title">
                        <div>
                        <h5>Demandes Clients</h5>
                        <span>Total:60</span>
                        </div>
                        <a href="#"  className="btn" >Voir tout</a>
                    
                    </div>
                    
                    <table>
                       
                        <tr>
                            
                            <td>John Steve Doe</td>
                            <td><a href="#" style={{color:'gray'}}>traiter</a></td>
                        </tr>
                        <tr>
                            
                            <td>John Steve Doe</td>
                            <td><a href="#" style={{color:'gray'}}>traiter</a></td>
                        </tr>
                        <tr>
                            
                            <td>John Steve Doe</td>
                            <td><a href="#" style={{color:'gray'}}>traiter</a></td>
                        </tr>
                        <tr>
                            
                            <td>John Steve Doe</td>
                            <td><a href="#" style={{color:'gray'}}>traiter</a></td>
                        </tr>
  
                    </table>
                </div>
            </div>
        </div>
        
        
        </div>
    );}
    export default Dash;