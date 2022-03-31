import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert2'
import './AccuilVehicule.css'
import jsPDF from "jspdf";
import "jspdf-autotable"; 
import {Link} from 'react-router-dom';
const generatePDF = vehicle => {
  const doc = new jsPDF();
  const tableColumn = [" Matricule", "Kilométrage", "Consommation carburant", "Categorie", " Date maintenance"];
  const tableRows = [];

  vehicle.map(vehicle => {
    const vehicledata = [
      vehicle.Matricule,
      vehicle.Kilométrage,
      vehicle.Consommationcarburant,
      vehicle.Categorie,
      vehicle.Datamaintenance,
 ];
    tableRows.push(vehicledata);
  })
  doc.text("FLEET TRACKING", 70,8).setFontSize(13);
  doc.text("Rapport Vehicle  ", 14, 16).setFontSize(13); 
  doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
  doc.save("Vehicle détails.pdf");
  
}





export default class AccuielVehicle extends Component {
    constructor(props){
        super(props);

        this.state={
            vehicle:[]
        }
    }
    componentDidMount(){
        this.getvehicle();
    }

    getvehicle(){
        axios.get("http://localhost:8000/accuielVehcule").then(res=>{
            if(res.data.success){
                this.setState({
                    vehicle:res.data.existingPosts
                });
                console.log(this.state.vehicle)
            }
        });
    }

    onDelete=(id)=>{
      axios.delete(`http://localhost:8000/deleteVehicule/${id}`).then((res)=>{
        this.getvehicle();
      swal.fire("supprimer!","Supprimer vehicle avec success","erreur")
      })
    }


    //search
    filterData(vehicle,searchresult){
      const result = vehicle.filter((vehicle)=>
        vehicle.Matricule.toLowerCase().includes(searchresult)||
        vehicle.Kilométrage.toLowerCase().includes(searchresult)||
        vehicle.Consommationcarburant.toLowerCase().includes(searchresult)||
        vehicle.Categorie.toLowerCase().includes(searchresult)||
        vehicle.Datamaintenance.toLowerCase().includes(searchresult)
      )
      this.setState({vehicle:result})
    }

    //search

    handlesearch=(e)=>{
      const searchresult= e.currentTarget.value
      axios.get("http://localhost:8000/accuielVehcule").then(res=>{
            if(res.data.success){
               this.filterData(res.data.existingPosts,searchresult)
            }
        });
    }

    render() {
        return (
          
          
          <div id="wrapper" className="toggled">
      <div id="page-content-wrapper">
      <div className="container-fluid">

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark  rounded-3">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/TMSDash"  > Tableau de bord </Link>
      </li>
     
      <li class="nav-item">
        <Link  class="nav-link" to="/ajout_vehicule"> &#62; Ajouter Vehicle <span class="sr-only">(courant)</span> </Link >
      </li>
   
    </ul>
  </div>
</nav> 
<br/>


            <div>
                <button
                  type="button"
                  style={{ backgroundColor: "#2E4661", padding: "10px" }}
                  class="btn btn-secondary btn-sm"
                  onClick={() => generatePDF(this.state.vehicle)}
                >
                 <i class="fa-solid fa-file-arrow-down"></i>Générer le rapport de Chauffeur
                </button>
              </div>

              <br/>


            <div class="row justify-content-evenly">
              <div  class="col-9">
              <h1 style={{backgroundColor:'black', color:'white', padding:'5px',textAlign:'center' ,opacity:".50"}}>Gestion Vehicle </h1>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                     <button className="btn btn-warning " ><Link to="/TMSDash" style= {{textDecoration:'none', color:'black'}}><i className="fas fa-home"></i>Accuiel</Link></button>
                    </div> 
            <div className="col-lg-3 mt-2 mb-2">
          <input className="form-control" 
          type="search" placeholder="recherche" 
          name="search" 
          onChange={this.handlesearch}>
          
          </input>
        </div>
           
            <table className="table" >
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Matricule</th>
                    <th scope="col">Kilométrage</th>
                    <th scope="col">Consommationcarburant </th>
                    <th scope="col">Categorie</th>
                    <th scope="col">Datamaintenance</th>
                    <th scope="col">Action</th>
    
                  </tr>
                </thead>
                <tbody>
                    {this.state.vehicle.map((vehicle,index)=>(
                      <tr>
                        <th scope="row">{index+1}</th>
                        <td>{vehicle.Matricule}</td>
                        <td>{vehicle.Kilométrage}</td>
                        <td>{vehicle.Consommationcarburant}</td>
                        <td>{vehicle.Categorie}</td>
                        <td>{vehicle.Datamaintenance}</td>
                        <td>
                          <Link className="btn btn-primary" to={`/majvehcule/${vehicle._id}`}>
                            <i className="fas fa-edit"></i>Edit</Link>
                        </td>
                        <td>
                      <Link className="btn btn-primary" to={`/#/${vehicle._id}`}>
                        <i className="fas fa-list"></i>Programme</Link>
                    </td>
                       
                        <td>
                          <Link className="btn btn-danger" to="#" onClick={()=>this.onDelete(vehicle._id)} ><i className="fas fa-trash-alt"></i>Supprimer</Link>
                        </td>
    
                      </tr>
                    ))}
                </tbody>
            </table>
    
            <button className="btn btn-success"><Link to= "/ajout_vehicule" style={{textDecoration:'none',color:'white'}}><i className="fas fa-plus-circle"></i>Ajouter Vehicle</Link></button>
            
              </div>
            
            
            
              
            </div>
          
          </div>
          </div>
          </div>
        )}
}
