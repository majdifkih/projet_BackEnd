import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './AccuilChauffeur.css';
import jsPDF from "jspdf";
import "jspdf-autotable";;

const generatePDF = chauffeur => {
    const doc = new jsPDF();
    const tableColumn = ["cin", "nom","prenom", "Address", "age"];
    const tableRows = [];
  
    chauffeur.map(chauffeur => {
      const chauffeurdata = [
        chauffeur.cin,
        chauffeur.nom,
        chauffeur.prenom,
        chauffeur.address,
        chauffeur.age,
        
   ];
      tableRows.push(chauffeurdata);
    })
    doc.text("FLEET TRACKING", 70,8).setFontSize(13);
    doc.text("Rapport Chauffeur  ", 14, 16).setFontSize(13); 
    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
    doc.save("Chauffeur détails.pdf");
  }




  export default class AccuielChauffeur extends React.Component {
 
    constructor(props){
     
        super(props);
    
        this.state={
          chauffeur:[]
        }
      }
      componentDidMount(){
        this.getchauffeur();
      }
     
      getchauffeur(){
          axios.get("http://localhost:5000/accuielChauffeur").then(res=>{
            if(res.data.success){
              this.setState({
                chauffeur:res.data.existingPosts
              });
              console.log(this.state.chauffeur)
            }
          })
        }
        onDelete=(id)=>{
            axios.delete(`/deleteChauffeur/${id}`).then((res)=>{
              Swal.fire("supprimer","supprime avec succes","warning")
              this.getchauffeur();
            })
          }

          filterData(chauffeur,searchresult){
            const result = chauffeur.filter((chauffeur)=>
            chauffeur.cin.toLowerCase().includes(searchresult)||
            chauffeur.nom.toLowerCase().includes(searchresult)||
            chauffeur.prenom.toLowerCase().includes(searchresult)||
            chauffeur.address.toLowerCase().includes(searchresult)||
            chauffeur.age.toLowerCase().includes(searchresult)
          
            )
          
            this.setState({chauffeur:result})
          
          }
          handlesearch=(e)=>{
            const searchresult = e.currentTarget.value
            axios.get("http://localhost:5000/accuielChauffeur").then(res=>{
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
        <a class="nav-link" href="/accuielChauffeur"> &#62; Chauffeur détails <span class="sr-only">(courant)</span> </a>
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
                  onClick={() => generatePDF(this.state.chauffeur)}
                >
                 <i class="fa-solid fa-file-arrow-down"></i>Générer le rapport de chauffeur
                </button>
              </div>

              <br/>


     
          <div className="row justify-content-center">
              <div  class="col-9">
          <h1 style={{backgroundColor:'black', color:'white', padding:'5px',textAlign:'center',opacity:".50"}}>Gestion les chauffeur</h1>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                     <button className="btn btn-warning " ><a href="/TMSDash" style= {{textDecoration:'none', color:'black'}}><i className="fas fa-home"></i>Accuiel</a></button>
                    </div> 
        <div className="col-lg-3 mt-2 mb-2">
          <input className="form-control" 
          type="search" placeholder="chercher" 
          name="search" 
          onChange={this.handlesearch}>
          
          </input>
        </div>
        <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">cin</th>
                <th scope="col">Nom</th>
                <th scope="col">Prenom </th>
                <th scope="col">Address</th>
                <th scope="col">age</th>
                <th scope="col">Action</th>

              </tr>
            </thead>
            <tbody>
                {this.state.chauffeur.map((chauffeur,index)=>(
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{chauffeur.cin}</td>
                    <td>{chauffeur.nom}</td>
                    <td>{chauffeur.prenom}</td>
                    <td>{chauffeur.address}</td>
                    <td>{chauffeur.age}</td>
                    <td>
                      <a className="btn btn-primary" href={`/maj/${chauffeur._id}`}>
                        <i className="fas fa-edit"></i>Editer</a>
                    </td>
                    <td>
                      <a className="btn btn-primary" href={`/accuielChauffeur/${chauffeur._id}`}>
                        <i className="fas fa-list"></i>Programme</a>
                    </td>
                   
                    <td>
                      <a className="btn btn-danger" href="/accuielChauffeur" onClick={()=>this.onDelete(chauffeur._id)}><i className="fas fa-trash-alt"></i>supprimer</a><p>frgeggg</p>
                    </td>

                  </tr>
                ))}
            </tbody>
        </table>

        <button className="btn btn-success"><a href= "/ajout_chauffeur" style={{textDecoration:'none',color:'white'}}><i className="fas fa-plus-circle"></i>Ajouter un nouveau chauffeur</a></button>
        

      
          </div>

        </div>
      
        
        
      </div>
      </div>
      </div>
            )

          }

}