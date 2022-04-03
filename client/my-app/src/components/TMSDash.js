import React, { Component } from 'react'
import  './TMfooter.css'

export default class TMSDash extends Component {
    render() {
        return (
          <div id="wrapper" className="toggled">
          <div id="page-content-wrapper">
            <div className="container-fluid"></div>
            <center>
            <h1 class="display-2">fleet tracking gestion Transport</h1>

            </center>
            
           
          <hr/>
          
  
            <div class="row">
            
              <div class="col-sm-4">
                <div class="card">
                  <img
                    src="%PUBLIC_URL%../../dri.jpg"
                    width="200"
                    height="200"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Liste des chauffeurs</h5>
                    <p class="card-text">
                     
                    </p>
                    <a href="/accuielChauffeur" className="btn btn-primary" style= {{textDecoration:'none', color:'white'}}><i className="fas fa-shipping-fast"></i> aller vers liste chauffeur</a>
                  </div>
                </div>
              </div>

  
              <div class="col-sm-4">
                <div class="card">
                  <img
                    src="%PUBLIC_URL%../../sche.jpg"
                    width="200"
                    height="200"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Programme du transport</h5>
                    <p class="card-text">
                   
                    </p>
                    <a href="/TMSSchedule" className="btn btn-primary" style= {{textDecoration:'none', color:'white'}}><i className="fas fa-clipboard"></i> aller vers programme</a>
                  </div>
                </div>
              <br/><br/>
              </div>

              <div class="col-sm-4">
                <div class="card">
                  <img
                    src="%PUBLIC_URL%../../vehi.jpg"
                    width="200"
                    height="200"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Liste des véhicules</h5>
                    <p class="card-text">
                    
                    </p>
                    <a href="/ajout_vehicule" className="btn btn-primary" style= {{textDecoration:'none', color:'white'}}><i className="fas fa-truck-monster"></i> aller vers liste véhicule </a>
                  </div>
                </div>
                <br/>
              </div>
              <br/>
             
              
              <div class="d-grid gap-2 d-md-flex justify-content-md-end"></div>

                    
              
              <div class="footer">
              <div class="contain">

            <br/>
                  <div class="col">
                  <h1>ABOUT US</h1>

  
            <ul>
 
                  <li><i class="fas fa-phone-square"></i>&nbsp; &nbsp; Contact us</li>
                  <li><i class="fas fa-comment-alt"></i>&nbsp; &nbsp;Suggestion</li>
    
            </ul>
  
          
            </div>
                <div class="col">
                <h1>ééééé</h1>
            <ul>
                <li></li>
            </ul>
           </div>

                <div class="col">
                <div class="position-absolute top-50 start-50 translate-middle">
           <br/>

                <img src="%PUBLIC_URL%../../cas.png.jpeg" class="rounded-circle" width="40" height="40"  alt=""/>
                <h1>Fleet tracking</h1>
  
            <ul>
                <li>@ Copyright reserved 2022</li>
           </ul>
          </div>
          </div>
                <div class="col">
                <h1>ààààà</h1>
          <ul>
         </ul>
        </div>

              <div class="position-absolute top-50 end-0 translate-middle-y">
              <div class="col social">
              <h1>Help</h1>
  
          <ul>
  
              <li><i class="fas fa-envelope"></i>&nbsp; &nbsp; <i class="fas fa-map-marker-alt"></i>&nbsp; &nbsp;<i class="fas fa-star"></i></li>
    
         </ul>
  
         </div>
         </div>
         <div class="clearfix">


         </div>
         </div>
         </div>

      </div>
    </div>
  </div>

          
            
        )
    }
}
