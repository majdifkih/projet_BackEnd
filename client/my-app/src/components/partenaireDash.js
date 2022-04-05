import React, { Component } from 'react'
import  './TMfooter.css'

export default class PartenaireDash extends Component {
    render() {
        return (
          <div id="wrapper" className="toggled">
          <div id="page-content-wrapper">
            <div className="container-fluid"></div>
            <center>
            <h1 class="display-2">fleet tracking gestion Partenaire</h1>

            </center>
            
           
          <hr/>
          
  
            <div class="row">
            
              <div class="col-sm-6">
                <div class="card">
                  <img
                    src="%PUBLIC_URL%../../dri.jpg"
                    width="300"
                    height="300"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Liste des Clients</h5>
                    <p class="card-text">
                     
                    </p>
                    <a href="/accuielClient" className="btn btn-primary" style= {{textDecoration:'none', color:'white'}}><i className=""></i> aller vers liste Clients</a>
                  </div>
                </div>
              </div>

  
              

              <div class="col-sm-6" >
                <div class="card" >
                  <img
                    src="%PUBLIC_URL%../../vehi.jpg"
                    width="300"
                    height="300"
                    class="card-img-top"
                    alt="..."
                    
                  />
                  <div class="card-body"  >
                    <h5 class="card-title">Liste des Fournisseur</h5>
                    <p class="card-text">
                    
                    </p>
                    <a href="/accuielFournisseur" className="btn btn-primary" style= {{textDecoration:'none', color:'white'}}><i className="fa fa-users"></i> aller vers liste Fournisseur </a>
                  </div>
                </div>
              
                
              </div>
              
             
              
              

                    
              
              

  
            
          
           

          
             
  
         


         </div>
         </div>
         </div>

    

          
            
        )
    }
}
