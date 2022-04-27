import React from "react";
import "./styleSideNav.css";
import "./Dash.css";
import "./login.scss";
import {Link} from 'react-router-dom';
import Login from "./login";
function PMNavBar(){
  
    return (
      
      <div id="wrapper" className="toggled">
        
           <div id="sidebar-wrapper">
          
             <ul className="sidebar-nav">
             <input type="checkbox" id="check"/>
          <label for="check">
            <i className="fas fa-bars" id="btn"></i>
            <i className="fas fa-times" id="cancel"></i>
          </label>
        
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
               <Link to="/Dash" >
               <img
                 src="%PUBLIC_URL%../../../watch.JPG"
                 className="circle"
                 width="20"
                 height="20"
                 alt=""/> Accueil
                   </Link>
               </li>
               <li>
               <Link to="/accuielProduit" >
               <img
                 src="%PUBLIC_URL%../../../watch.JPG"
                 className="circle"
                 width="20"
                 height="20"
                 alt=""/> Fleet and Devices
                   </Link>
               </li>
               <li>
               <Link to="/partenaireDash">
                      
               <img
                 src="%PUBLIC_URL%../../../gps.JPG"
                 className="circle"
                 width="20"
                 height="20"
                 alt=""/> Fleet Tracking</Link>
                  
               </li>
               <li>
               <Link to="/" >
               <img
                 src="%PUBLIC_URL%../../../clock.JPG"
                 className="circle"
                 width="17"
                 height="17"
                 alt=""/> Stores
                   </Link>
               </li>
               <li>
               <Link to="/" >
               <img
                 src="%PUBLIC_URL%../../../setting.JPG"
                 className="circle"
                 width="17"
                 height="17"
                 alt=""/> Inventory
                   </Link>
               </li>
               <li>
                 <Link to="/" >
                 <img
                 src="%PUBLIC_URL%../../../user.JPG"
                 className="circle"
                 width="17"
                 height="17"
                 alt=""/> Clients
                 </Link>
               </li>
               <li>
              
                 <Link to="/TMSDash" >
                 <img
                 src="%PUBLIC_URL%../../../user1.JPG"
                 className="circle"
                 width="17"
                 height="17"
                 alt=""/> Users
                   </Link>
               </li>
              
               <li>
               <Link to="/login" >
               <img
                 src="%PUBLIC_URL%../../../logout.JPG"
                 className="circle"
                 width="20"
                 height="20"
                 alt=""/> Log out
                 </Link>
               </li>
             </ul>
           </div>
     <div  className="header">
        
            <div  className="nav">
            
            <div className="position-left  top-50 end-0 translate-middle-y">
                    <img src="%PUBLIC_URL%../../../alert.JPG" alt=""/></div>
                <div  className="user">
                    
                
                    <div className="position-absolute top-50 end-0 translate-middle-y">
                <ul><li className="nav-item  ">
                  <Link to="/" className="nav-link active text-black "  aria-current="page" >
                      Hamdi Ghassem <img
                 src="%PUBLIC_URL%../../../photo.JPG"
                 className="circle" />
                       </Link>
                       
                       </li>
                       </ul>
                    
                    </div>
                </div>
            </div>
        </div>
        <div className="widgets">
          <Login type="user" />
          <Login type="order" />
          <Login type="earning" />
          <Login type="balance" />
        </div>
  </div>
  
    );
  }


export default PMNavBar;
