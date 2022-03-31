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
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
         <div class="carousel-item active">
               <img src="%PUBLIC_URL%../../tmain1.png"  height="400" class="d-block w-100" alt="..."/>
         <div class="carousel-caption d-none d-md-block">
              <h5>Prevent Covid 19</h5>
              <p>COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.</p>
       </div>
       </div>
         <div class="carousel-item">
               <img src="%PUBLIC_URL%../../TMSn.jpg"   height="400" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
              <h5>Gestion du transport</h5>
              <p> Rationalisez le processus de devis à contrat. Gérez efficacement le coût du fret, la gestion des commandes, la détermination des tarifs, la facturation et le règlement du fret pour le transport multimodal et intermodal</p>
     </div>
    </div>
         <div class="carousel-item">
               <img src="%PUBLIC_URL%../../driN.jpg" height="400" class="d-block w-100" alt="..."/>
         <div class="carousel-caption d-none d-md-block">
              <h5>Une plus grande satisfaction client</h5>
              <p>La capacité à respecter les engagements des clients est essentielle pour toute entreprise en concurrence sur le marché mondial d'aujourd'hui. </p>
      </div>
     </div>
    </div>
               <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Précédent</span>
              </button>
               <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Suivant</span>
               </button>
</div>

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
