import React from "react";
import "./styleSideNav.css";
import {Link} from 'react-router-dom';
import { AcroFormCheckBox } from "jspdf";
function PMNavBar(){
  
    return (
      <div id="wrapper" className="toggled">
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <br />
            <br />
            &nbsp; &nbsp; &nbsp;
            <img
              src="%PUBLIC_URL%../../../qlog1.JPG"
              className="circle"
              width="200"
              height="40"
              alt=""
            />
            <br />
            <br />
            <li>
            <Link to="/" >
            <img
              src="%PUBLIC_URL%../../../watch.JPG"
              className="circle"
              width="20"
              height="20"
              alt=""
            /> Accueil
                </Link>
            </li>
            <li>
            <Link to="/accuielProduit" >
            <img
              src="%PUBLIC_URL%../../../watch.JPG"
              className="circle"
              width="20"
              height="20"
              alt=""
            /> Fleet and Devices
                </Link>
            </li>
            <li>
            <Link to="/partenaireDash">
                    
            <img
              src="%PUBLIC_URL%../../../gps.JPG"
              className="circle"
              width="20"
              height="20"
              alt=""
            /> Fleet Tracking</Link>
                
            </li>
            <li>
            <Link to="/" >
            <img
              src="%PUBLIC_URL%../../../clock.JPG"
              className="circle"
              width="17"
              height="17"
              alt=""
            /> Stores
                </Link>
            </li>
            <li>
            <Link to="/" >
            <img
              src="%PUBLIC_URL%../../../setting.JPG"
              className="circle"
              width="17"
              height="17"
              alt=""
            /> Inventory
                </Link>
            </li>
            <li>
              <Link to="/" >
              <img
              src="%PUBLIC_URL%../../../user.JPG"
              className="circle"
              width="17"
              height="17"
              alt=""
            /> Clients
              </Link>
            </li>
            <li>
            
              <Link to="/TMSDash" >
              <img
              src="%PUBLIC_URL%../../../user1.JPG"
              className="circle"
              width="17"
              height="17"
              alt=""
            /> Users
                </Link>
            </li>
            
            <li>
            <Link to="/" >
            <img
              src="%PUBLIC_URL%../../../logout.JPG"
              className="circle"
              width="20"
              height="20"
              alt=""
            /> Log out
              </Link>
            </li>
          </ul>
        </div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-">
          {/* <!-- Image and text --> */}
          {/*<a className="navbar-brand" href=""></a>*/}
           
         
            <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
            
              <ul className="navbar-nav me-auto mb-lg-0 col">
                
            <h4 className="py-2 px-4">Overview</h4> 
  
                   
              <div className="position-absolute top-100 end-0 translate-middle-y">
                <li className="nav-item  ">
                <Link to="/" className="nav-link active text-black "  aria-current="page" >
                   Hamdi Ghassem <img
              src="%PUBLIC_URL%../../../photo.JPG"
              className="circle"
              width="30"
              height="30"
              alt=""
            />
                    </Link>
                    <button
                    type="button"
                    className="btn"
                  >
                    <img
              src="%PUBLIC_URL%../../../ALERT.JPG"
              className="circle"
              width="20"
              height="20"
              alt=""
            />
                  </button>
                </li>
                </div>
                
                  
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                

                
              </ul>
            </div>
          
         </nav>
         <div className="box ">
         <div className="screen-4">
                <h4>Demandes </h4>
               
                    
              </div>
              <div className="screen-5">
                <h4>Chauffeurs Actives</h4>
              
                    
              </div>
              <div className="screen-6">
                <h4>avertissements</h4>
               
                    
              </div>
              <div className="screen-7">
                <h4>Appareilles Connectés</h4>
               
                    
              </div>
         <div className="screen-2">
           
         
    <h4>Appareilles</h4>
    <form>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="radio" id="radio1" value="o1"/>
        <label className="form-check-label" for="radio1">Option 1</label><button  type="button"
                    className=""></button>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="radio" id="radio2" value="o2"/>
        <label className="form-check-label" for="radio2">Option 2</label>
      </div>
    </form>
 
              </div>
              <div className="screen-3">
                <h4>Demandes Clients</h4>
               <div className="span"><span>Total:</span></div> 
                    <input ></input>
                    
              </div>
         <div className="screen-1">
                    
                    <img
              src="%PUBLIC_URL%../../../graphic.JPG"
              className="circle"
              width="200"
              height="200"
              alt=""/>
                <table>
          <tr className="tr1">eeee</tr>
          <tr className="tr2">eeee</tr>
          <tr className="tr3">eeee</tr>
          <tr className="tr3">eeee</tr>
          <tr className="tr3">eeee</tr>
          </table>
              </div>
        
      </div>
      </div>
    );
  }


export default PMNavBar;
