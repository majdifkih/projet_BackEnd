import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './Accuil.css';
import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDF = fournisseur => {
    const doc = new jsPDF();
    const tableColumn = ["num", "nom","telf", "address"];
    const tableRows = [];
  
    fournisseur.map(fournisseur => {
      const fournisseurdata = [
        fournisseur.num,
        fournisseur.nom,
        fournisseur.telf,
        fournisseur.address,
        
   ];
      tableRows.push(fournisseurdata);
    })
    doc.text("FLEET TRACKING", 70,8).setFontSize(13);
    doc.text("Rapport fournisseur  ", 14, 16).setFontSize(13); 
    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
    doc.save("Fournisseur détails.pdf");
  }




  export default class AccuielFournisseur extends Component {
 
    constructor(props){
     
        super(props);
    
        this.state={
            fournisseur:[]
        }
      }
      componentDidMount(){
        this.getfournisseur();
      }
     
      getfournisseur(){
          axios.get("http://localhost:5000/accuielFournisseur").then(res=>{
            if(res.data.success){
              this.setState({
                fournisseur:res.data.existingPosts
              });
              console.log(this.state.fournisseur)
            }
          })
        }
        onDelete=(id)=>{
            axios.delete(`/deleteFournisseur/${id}`).then((res)=>{
              Swal.fire("supprimer","supprime avec succes","warning")
              this.getfournisseur();
            })
          }

          filterData(fournisseur,searchresult){
            const result = fournisseur.filter((fournisseur)=>
            fournisseur.num.toLowerCase().includes(searchresult)||
            fournisseur.nom.toLowerCase().includes(searchresult)||
            fournisseur.telf.toLowerCase().includes(searchresult)||
            fournisseur.address.toLowerCase().includes(searchresult)
          
            )
          
            this.setState({fournisseur:result})
          
          }
          handlesearch=(e)=>{
            const searchresult = e.currentTarget.value
            axios.get("http://localhost:5000/accuielFournisseur").then(res=>{
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
        <a class="nav-link" href="/TMSDash">Tableau de bord</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/accuielFournisseur"> &#62; Fournisseur détails <span class="sr-only">(courant)</span> </a>
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
                  onClick={() => generatePDF(this.state.fournisseur)}
                >
                 <i class="fa-solid fa-file-arrow-down"></i>Générer le rapport de fournisseur
                </button>
              </div>

              <br/>


     
          <div className="row justify-content-center">
              <div  class="col-9">
          <h1 style={{backgroundColor:'black', color:'white', padding:'5px',textAlign:'center',opacity:".50"}}>Gestion les fournisseurs</h1>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                     <button className="btn btn-warning " ><a href="/partenaireDash" style= {{textDecoration:'none', color:'black'}}><i className="fas fa-home"></i>Accuiel</a></button>
                    </div> 
                  
        <div className="col-lg-3 mt-2 mb-2">
          <input className="form-control" 
          type="search" placeholder="chercher" 
          name="search" 
          onChange={this.handlesearch}>
          
          </input>
        </div>
        <button className="btn btn-success"><a href= "/ajout_fournisseur" style={{textDecoration:'none',color:'white'}}><i className="fas fa-plus-circle"></i>Ajouter un nouveau fournisseur</a></button>
        <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Numéro</th>
                <th scope="col">Nom</th>
                <th scope="col">Téléphone </th>
                <th scope="col">Address</th>


              </tr>
            </thead>
            <tbody>
                {this.state.fournisseur.map((fournisseur,index)=>(
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{fournisseur.num}</td>
                    <td>{fournisseur.nom}</td>
                    <td>{fournisseur.telf}</td>
                    <td>{fournisseur.address}</td>
                    <td>
                      <a className="btn btn-primary" href={`/majFournisseur/${fournisseur._id}`}>
                        <i className="fas fa-edit"></i>Editer</a>
                    </td>
                    <td>
                      <a className="btn btn-primary" href={`/accuielFournisseur/${fournisseur._id}`}>
                        <i className="fas fa-list"></i>commande</a>
                    </td>
                   
                    <td>
                      <a className="btn btn-danger" href="/accuielFournisseur" onClick={()=>this.onDelete(fournisseur._id)}><i className="fas fa-trash-alt"></i>supprimer</a><p></p>
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
            )

          }

}