
import React, { Component } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';



export default class AjoutProduit extends Component {
    constructor(props){
        super(props);
        this.state={
            referenceproduit:"",
            nomproduit:"",
            quantiteproduit:"",
            prixproduit:"",
            Categorie:"",
            
            referenceproduitError:"",
            nomproduitError:"",
            quantiteproduitError:"",
            prixproduitError:"",
            CategorieError:""
            

        }
    }

    handleInputChange=(e)=>{
        const{name,value}=e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
   
   
   
    }
    
    

    validate=()=>{
        let referenceproduitError="";
        let nomproduitError="";
        let quantiteproduitError="";
        let prixproduitError="";
        let CategorieError="";

        if(!this.state.referenceproduit){
            referenceproduitError= '*reference invalid!'
        }
       // else if (!this.state.Matricule.includes('')){
         //   MatriculeError= '*Please enter valid Register Number!'
        //}

        if(!this.state.nomproduit){
            nomproduitError="*Nom Produit invalid! "
        }
        if(!this.state.quantiteproduit){
            quantiteproduitError="*Quantite Produit invalid!"
        }
        if(!this.state.prixproduit){
            prixproduitError="*Prix invalid!"
        }
        if(!this.state.Categorie){
            CategorieError="*categorie invalid!"
        }

        
       
     

        if(referenceproduitError||nomproduitError||quantiteproduitError||prixproduitError||CategorieError){
            this.setState({referenceproduitError,nomproduitError,quantiteproduitError,prixproduitError,CategorieError});
            return false;
        }
        return true;
    }
   
    onSubmit=(e)=>{
    
        e.preventDefault();
        const isValid= this.validate();
        const{referenceproduit,nomproduit,quantiteproduit,prixproduit,Categorie}= this.state;
        const data={
            referenceproduit:referenceproduit,
            nomproduit:nomproduit,
            quantiteproduit:quantiteproduit,
            prixproduit:prixproduit,
            Categorie:Categorie
        }
        if(isValid){
           console.log(data)
           axios.post("http://localhost:5000/ajout_produit",data).then((res)=>{
        
        
                if(res.data.success){

                   this.setState({
                
                    referenceproduit:"",
                    nomproduit:"",
                    quantiteproduit:"",
                    prixproduit:"",
                    Categorie:""
                   })
                   Swal.fire('ajout', 'ajout chauffeur avec succes', 'success')
                
               }
           })
        }
       };

    
    
    btnDemo = (e) => {
        e.preventDefault();
    
        const {  referenceproduit,nomproduit,quantiteproduit,prixproduit,Categorie} = this.state;
    
        const data = {
            referenceproduit:referenceproduit,
            nomproduit:nomproduit,
            quantiteproduit:quantiteproduit,
            prixproduit:prixproduit,
            Categorie:Categorie,
        }
    
        console.log(data)
    
        this.setState(
            {
                referenceproduit:"337m",
                nomproduit:"maystro",
                quantiteproduit:"30",
                prixproduit:"200",
                Categorie:"Chocolat",
            }
        )
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
        <a class="nav-link" href="/accuielProduit"> &#62; Détails Produit </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/ajout_produit"> &#62; ajout Produit <span class="sr-only">(courant)</span> </a>
      </li>
   
    </ul>
  </div>
</nav> 
<br/>
            
            <div className= 'col-md-8 mt-8-4 mx-auto'>
              <h1 className="h3 mb-3 font-weight-normal">Ajouter un nouveau Produit</h1>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                     <button className="btn btn-warning " ><a href="/accuielProduit" style= {{textDecoration:'none', color:'black'}}><i className="fas fa-list"></i>voir liste Produit </a></button>
                    </div>         
               <form className="form-group" style={{marginBottom:'15px'}}> 
                <div>
                   <lable style={{marginBottom:'15px'}}>Reference</lable>
                    <input type='text' placeholder='Enter reference' className = 'form-control'
                    name="reference" value={this.state.referenceproduit} onChange={this.handleInputChange} required/> 

                    <div className="text-danger" style={{fontSize:12 ,color:"red"}}>
                           {this.state.referenceproduitError}
                   </div>
                </div>
              
               
                <div>

                    <lable style={{marginBottom:'15px'}}>Nom</lable>
                    <input type='text' placeholder='Enter Nom ' className = 'form-control'
                    name="nomproduit" value={this.state.nomproduit} onChange={this.handleInputChange} required/> 
                   
                   <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.nomproduitError}
                   </div>
                </div>
                   
                

               

                <div>
                     <lable style={{marginBottom:'15px'}}> Quantite </lable>
                    <input type='text' placeholder='Enter Quantite' className = 'form-control'
                    name="quantiteproduit" value={this.state.quantiteproduit} onChange={this.handleInputChange} required/> 

                    <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.quantiteproduitError}
                   </div>

                </div>
                
                <div>
                   <lable style={{marginBottom:'15px'}}>Prix</lable>
                    <input type='text' placeholder='Enter Prix' className = 'form-control'
                    name="prixproduit" value={this.state.prixproduit} onChange={this.handleInputChange} required/> 

                    <div className="text-danger" style={{fontSize:12 ,color:"red"}}>
                           {this.state.prixproduitError}
                   </div>
                </div>

            <div>
                   <lable style={{marginBottom:'15px'}}>Categorie</lable>
                    <input type='text' placeholder='Enter Categorie' className = 'form-control'
                    name="Categorie" value={this.state.Categorie} onChange={this.handleInputChange} required/> 

                    <div className="text-danger" style={{fontSize:12 ,color:"red"}}>
                           {this.state.CategorieError}
                   </div>
                </div>

               
                  
                   <div> 
                    <button  className='btn btn-success ' type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}> <i className="fas fa-save"></i>&nbsp;Sauvgarder</button>
                    &nbsp;

                    <button type="submit" className="btn btn-dark" style={{ marginTop: '15px', marginBottom:'20px', marginLeft:"900px", width:"140px", backgroundColor:"#2E4661", borderRadius:"10px", padding:"10px 0px 10px 0px"}} onClick={this.btnDemo}>Demo</button>
                       
                </div>
                
                </form>
            </div>

            </div>
            </div>
            </div>
 

  
        );
    }
}
