import React, { Component } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import './Accuil.css';
import jsPDF from "jspdf";
import "jspdf-autotable";

const generatePDF = client => {
    const doc = new jsPDF();
    const tableColumn = ["num", "nom","telf", "status", "address"];
    const tableRows = [];
  
    client.map(client => {
      const clientdata = [
        client.num,
        client.nom,
        client.telf,
        client.status,
        client.address,
        
   ];
      tableRows.push(clientdata);
    })
    doc.text("FLEET TRACKING", 70,8).setFontSize(13);
    doc.text("Rapport client  ", 14, 16).setFontSize(13); 
    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
    doc.save("client détails.pdf");
  }




  export default class AccuielClient extends Component {
 
    constructor(props){
     
        super(props);
    
        this.state={
            client:[]
        }
      }
      componentDidMount(){
        this.getclient();
      }
     
      getclient(){
          axios.get("http://localhost:5000/accuielClient").then(res=>{
            if(res.data.success){
              this.setState({
                client:res.data.existingPosts
              });
              console.log(this.state.client)
            }
          })
        }
        onDelete=(id)=>{
            axios.delete(`/deleteClient/${id}`).then((res)=>{
              Swal.fire("supprimer","supprime avec succes","warning")
              this.getclient();
            })
          }

          filterData(client,searchresult){
            const result = client.filter((client)=>
            client.num.toLowerCase().includes(searchresult)||
            client.nom.toLowerCase().includes(searchresult)||
            client.telf.toLowerCase().includes(searchresult)||
            client.status.toLowerCase().includes(searchresult)||
            client.address.toLowerCase().includes(searchresult)
          
            )
          
            this.setState({client:result})
          
          }
          handlesearch=(e)=>{
            const searchresult = e.currentTarget.value
            axios.get("http://localhost:5000/accuielClient").then(res=>{
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
        <a class="nav-link" href="/partenaireDash">Tableau de bord</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/accuielClient"> &#62; Client détails <span class="sr-only">(courant)</span> </a>
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
                  onClick={() => generatePDF(this.state.client)}
                >
                 <i class="fa-solid fa-file-arrow-down"></i>Générer le rapport de client
                </button>
              </div>

              <br/>


     
          <div className="row justify-content-center">
              <div  class="col-9">
          <h1 style={{backgroundColor:'black', color:'white', padding:'5px',textAlign:'center',opacity:".50"}}>Gestion les Clients</h1>
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
        <button className="btn btn-success"><a href= "/ajout_client" style={{textDecoration:'none',color:'white'}}><i className="fas fa-plus-circle"></i>Ajouter un nouveau client</a></button>
        <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Numéro</th>
                <th scope="col">Nom</th>
                <th scope="col">Téléphone </th>
                <th scope="col">Status</th>
                <th scope="col">Address</th>
            

              </tr>
            </thead>
            <tbody>
                {this.state.client.map((client,index)=>(
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{client.num}</td>
                    <td>{client.nom}</td>
                    <td>{client.telf}</td>
                    <td>{client.status}</td>
                    <td>{client.address}</td>
                    <td>
                      <a className="btn btn-primary" href={`/majClient/${client._id}`}>
                        <i className="fas fa-edit"></i>Editer</a>
                    </td>
                   
                    <td>
                      <a className="btn btn-danger" href="/accuielClient" onClick={()=>this.onDelete(client._id)}><i className="fas fa-trash-alt"></i>supprimer</a><p></p>
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