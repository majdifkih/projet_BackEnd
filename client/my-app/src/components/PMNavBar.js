import React, { Component } from "react";
import "./styleSideNav.css";
import {Link} from 'react-router-dom';
class PMNavBar extends Component {
  render() {
    return (
      <div id="wrapper" className="toggled">
        <div id="sidebar-wrapper">
          <ul className="sidebar-nav">
            <br />
            <br />
            &nbsp; &nbsp; &nbsp;
            <img
              src="%PUBLIC_URL%../../../fleet.jpg"
              class="rounded-circle"
              width="150"
              height="150"
              alt=""
            />
            <br />
            <br />
            <li>
            <Link to="/" >
                <i class="fas fa-sort-amount-up-alt"></i>
                &nbsp; Order Mangment
                </Link>
            </li>
            <li>
            <Link to="/accuielProduit" >
                <i class="fab fa-product-hunt"></i>
                &nbsp; Produit
                </Link>
            </li>
            <li>
            <a href="#">
                    
                  <i class="fas fa-cubes"></i>
                  &nbsp; Partenaire</a>
                
            </li>
            <li>
            <Link to="/" >
                <i class="fas fa-file-import"></i>
                &nbsp; Import Management
                </Link>
            </li>
            <li>
            <Link to="/" >
                <i class="fas fa-tasks"></i>
                &nbsp; Quality Check
                </Link>
            </li>
            <li>
              <Link to="/" >
                <i class="fas fa-file-invoice-dollar"></i>
                &nbsp; Accounts and Profits
              </Link>
            </li>
            <li>
            
              <Link to="/TMSDash" >
                <i class="fas fa-truck"></i>
                &nbsp; Transport
                </Link>
            </li>
            <li>
            <Link to="/" >
                <i class="fas fa-users-cog"></i>
                &nbsp; Admin
                </Link>
            </li>
            <li>
            <Link to="/" >
                <i class="fas fa-file-invoice"></i>
                &nbsp; Reports
              </Link>
            </li>
          </ul>
        </div>

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          {/* <!-- Image and text --> */}
          {/*<a class="navbar-brand" href=""></a>*/}
           <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" >
                    Accuiel
                    </Link>
                </li>
                <li className="nav-item">
                <Link to="/" className="nav-link">
                    <i class="fas fa-question-circle"></i>
                    &nbsp; aide
                    </Link>
                </li>

                <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" >
                    <i class="fas fa-phone-square"></i> &nbsp;Contact
                    </Link>
                </li>

                <div class="position-absolute top-50 end-0 translate-middle-y">
                  <button
                    type="button"
                    class="btn btn-primary position-relative"
                  >
                    <i class="fas fa-bell"></i>
                    <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                      <span class="visually-hidden">New alerts</span>
                    </span>
                  </button>
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                </div>

                
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default PMNavBar;
