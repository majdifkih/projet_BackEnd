import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert2'
import './AccuilVehicule.css'
import jsPDF from "jspdf";
import "jspdf-autotable"; 


const generatePDF = vehicule => {
  const doc = new jsPDF();
  const tableColumn = [" Matricule", "Kilométrage", "Consommation carburant", "Categorie", " Date maintenance"];
  const tableRows = [];

  vehicule.map(vehicule => {
    const vehiculedata = [
      vehicule.Matricule,
      vehicule.Kilométrage,
      vehicule.Consommationcarburant,
      vehicule.Categorie,
      vehicule.Datamaintenance,
 ];
    tableRows.push(vehiculedata);
  })
  doc.text("FLEET TRACKING", 70,8).setFontSize(13);
  doc.text("Rapport Vehicule  ", 14, 16).setFontSize(13); 
  doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
  doc.save("Vehicule détails.pdf");
  
}





export default class AccuielVehicule extends Component {
    constructor(props){
        super(props);

        this.state={
          vehicule:[]
        }
    }
    componentDidMount(){
        this.getvehicule();
    }

    getvehicule(){
        axios.get("http://localhost:5000/accuielVehicule").then(res=>{
            if(res.data.success){
                this.setState({
                  vehicule:res.data.existingPosts
                });
                console.log(this.state.vehicule)
            }
        });
    }

    onDelete=(id)=>{
      axios.delete(`http://localhost:5000/deleteVehicule/${id}`).then((res)=>{
        this.getvehicule();
      swal.fire("supprimer!","Supprimer vehicule avec success","erreur")
      })
    }


    //search
    filterData(vehicule,searchresult){
      const result = vehicule.filter((vehicule)=>
      vehicule.Matricule.toLowerCase().includes(searchresult)||
      vehicule.Kilométrage.toLowerCase().includes(searchresult)||
      vehicule.Consommationcarburant.toLowerCase().includes(searchresult)||
      vehicule.Categorie.toLowerCase().includes(searchresult)||
      vehicule.Datamaintenance.toLowerCase().includes(searchresult)
      )
      this.setState({vehicule:result})
    }

    //search

    handlesearch=(e)=>{
      const searchresult= e.currentTarget.value
      axios.get("http://localhost:5000/accuielVehicule").then(res=>{
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
        <a class="nav-link" href="/TMSDash"  > Tableau de bord </a>
      </li>
     
      <li class="nav-item">
        <a  class="nav-link" href="/ajout_vehicule"> &#62; Ajouter vehicule <span class="sr-only">(courant)</span> </a >
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
                  onClick={() => generatePDF(this.state.vehicule)}
                >
                 <i class="fa-solid fa-file-arrow-down"></i>Générer le rapport de vehicule
                </button>
              </div>

              <br/>


            <div class="row justify-content-evenly">
              <div  class="col-9">
              <h1 style={{backgroundColor:'black', color:'white', padding:'5px',textAlign:'center' ,opacity:".50"}}>Gestion vehicule </h1>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                     <button className="btn btn-warning " ><a href="/TMSDash" style= {{textDecoration:'none', color:'black'}}><i className="fas fa-home"></i>Accuiel</a></button>
                    </div> 
            <div className="col-lg-3 mt-2 mb-2">
          <input className="form-control" 
          type="search" placeholder="recherche" 
          name="search" 
          onChange={this.handlesearch}>
          
          </input>
        </div>
        <button className="btn btn-success"><a href= "/ajout_vehicule" style={{textDecoration:'none',color:'white'}}><i className="fas fa-plus-circle"></i>Ajouter Vehicule</a></button>
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
                    {this.state.vehicule.map((vehicule,index)=>(
                      <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>{vehicule.Matricule}</td>
                        <td>{vehicule.Kilométrage}</td>
                        <td>{vehicule.Consommationcarburant}</td>
                        <td>{vehicule.Categorie}</td>
                        <td>{vehicule.Datamaintenance}</td>
                        <td>
                          <a className="btn btn-primary" href={`/majvehcule/${vehicule._id}`}>
                            <i className="fas fa-edit"></i>Edit</a>
                        </td>
                        <td>
                      <a className="btn btn-primary" href={`/#/${vehicule._id}`}>
                        <i className="fas fa-list"></i>Programme</a>
                    </td>
                       
                        <td>
                          <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(vehicule._id)} ><i className="fas fa-trash-alt"></i>Supprimer</a>
                        </td>
    
                      </tr>
                    ))}
                </tbody>
            </table>
    
           
            
              </div>
            
            
            
              
            </div>
          
          </div>
          </div>
          </div>
        )}
}
