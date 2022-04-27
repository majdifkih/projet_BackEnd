import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './Accuil.css';
import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDF = produit => {
    const doc = new jsPDF();
    const tableColumn = ["idproduit", "nomproduit","quantiteproduit", "prixproduit", "categorie"];
    const tableRows = [];
  
    produit.map(produit => {
      const produitdata = [
        produit.idproduit,
        produit.nomproduit,
        produit.quantiteproduit,
        produit.prixproduit,
        produit.categorie,
        
   ];
      tableRows.push(produitdata);
    })
    doc.text("FLEET TRACKING", 70,8).setFontSize(13);
    doc.text("Rapport produit  ", 14, 16).setFontSize(13); 
    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
    doc.save("produit détails.pdf");
  }




  export default class Accuielproduit extends Component {
 
    constructor(props){
     
        super(props);
    
        this.state={
            produit:[]
        }
      }
      componentDidMount(){
        this.getproduit();
      }
     
      getproduit(){
          axios.get("http://localhost:5000/accuielProduit").then(res=>{
            if(res.data.success){
              this.setState({
                produit:res.data.existingPosts
              });
              console.log(this.state.produit)
            }
          })
        }
        onDelete=(id)=>{
            axios.delete(`/deleteProduit/${id}`).then((res)=>{
              Swal.fire("supprimer","supprime avec succes","warning")
              this.getproduit();
            })
          }

          filterData(produit,searchresult){
            const result = produit.filter((produit)=>
            produit.idproduit.toLowerCase().includes(searchresult)||
            produit.nomproduit.toLowerCase().includes(searchresult)||
            produit.quantiteproduit.toLowerCase().includes(searchresult)||
            produit.prixproduit.toLowerCase().includes(searchresult)||
            produit.categorie.toLowerCase().includes(searchresult)
            
            
            )
          
            this.setState({produit:result})
          
          }
          handlesearch=(e)=>{
            const searchresult = e.currentTarget.value
            axios.get("http://localhost:5000/accuielProduit").then(res=>{
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
        <a class="nav-link" href="/">Accuiel</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/accuielProduit"> &#62; produit détails <span class="sr-only">(courant)</span> </a>
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
                  onClick={() => generatePDF(this.state.produit)}
                >
                 <i class="fa-solid fa-file-arrow-down"></i>Générer le rapport de produit
                </button>
              </div>

              <br/>


     
          <div className="row justify-content-center">
              <div  class="col-9">
          <h1 style={{backgroundColor:'black', color:'white', padding:'5px',textAlign:'center',opacity:".50"}}>Gestion les produit</h1>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                     <button className="btn btn-warning " ><a href="/" style= {{textDecoration:'none', color:'black'}}><i className="fas fa-home"></i>Accuiel</a></button>
                    </div> 
                  
        <div className="col-lg-3 mt-2 mb-2">
          <input className="form-control" 
          type="search" placeholder="chercher" 
          name="search" 
          onChange={this.handlesearch}>
          
          </input>
        </div>
        <button className="btn btn-success"><a href= "/ajout_produit" style={{textDecoration:'none',color:'white'}}><i className="fas fa-plus-circle"></i>Ajouter un nouveau produit</a></button>
        <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">reference</th>
                <th scope="col">nom</th>
                <th scope="col">quantite </th>
                <th scope="col">prix</th>
                <th scope="col">categorie</th>
                <th scope="col">Action</th>
                
               
              </tr>
            </thead>
            <tbody>
                {this.state.produit.map((produit,index)=>(
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{produit.idproduit}</td>
                    <td>{produit.nomproduit}</td>
                    <td>{produit.quantiteproduit}</td>
                    <td>{produit.prixproduit}</td>
                    <td>{produit.categorie}</td>
                    <td>
                      <a className="btn btn-primary" href={`/majProduit/${produit._id}`}>
                        <i className="fas fa-edit"></i>Editer</a>
                    </td>
                    <td>
                      <a className="btn btn-primary" href={`/accuielProduit/${produit._id}`}>
                        <i className="fas fa-list"></i>Programme</a>
                    </td>
                   
                    <td>
                      <a className="btn btn-danger" href="/accuielProduit" onClick={()=>this.onDelete(produit._id)}><i className="fas fa-trash-alt"></i>supprimer</a><p></p>
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