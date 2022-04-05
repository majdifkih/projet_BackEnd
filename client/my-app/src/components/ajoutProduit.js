import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


export default class AjoutProduit extends React.Component {

    constructor(props){
        super(props);
        this.state={
            idproduit:"",
            nomproduit:"",
            quantiteproduit:"",
            prixproduit:"",
            categorie:"",
            idproduitError:"",
            nomproduitError:"",
            quantiteproduitError:"",
            prixproduitError:"",
            categorieError:""
           
        }
    }
    handleInputChange=(e)=>{
        const {name,value}=e.target;
 
        this.setState({
            ...this.state,
            [name]:value
        })
    }
    validate= ()=>{
        let idproduitError="";
        let nomproduitError="";
        let quantiteproduitError="";
        let prixproduitError="";
        let categorieError="";
 
     
 
        
        if(!this.state.idproduit){
            idproduitError="* Reference invalid!"
        }
        
        if(!this.state.nomproduit){
            nomproduitError="* nom invalid!"
        }
        if(!this.state.quantiteproduit){
            quantiteproduitError="* Quantite invalid!"
        }
        if(!this.state.prixproduit){
            prixproduitError="* Prix invalid!"
             }
            if(!this.state.categorie){
                categorieError="* categorie invalid!"
            }
            
            if(idproduitError||nomproduitError||quantiteproduitError||prixproduitError||categorieError){
            this.setState({idproduitError,nomproduitError,quantiteproduitError,prixproduitError,categorieError});
            return false;
    
            }
    
        return true;
     }
     onSubmit=(e)=>{
    
         e.preventDefault();
         const isValid= this.validate();
         const {idproduit,nomproduit,quantiteproduit,prixproduit,categorie}= this.state;
         const data={
            idproduit:idproduit,
            nomproduit:nomproduit,
            quantiteproduit:quantiteproduit,
            prixproduit:prixproduit,
            categorie:categorie
         }
         if(isValid){
            console.log(data)
            axios.post("http://localhost:5000/ajout_produit",data).then((res)=>{
                if(res.data.success){
                    this.setState({
                        idproduit:"",
                        nomproduit:"",
                        quantiteproduit:"",
                        prixproduit:"",
                        categorie:""
                    })
                    Swal.fire('ajout', 'ajout Produit avec succes', 'success')
                 
                }
            })
         }
        }
 // demo button 
    btnDemo = (e) => {
     e.preventDefault();

     const {  idproduit,nomproduit,quantiteproduit,prixproduit,categorie} = this.state;

     const data = {
        idproduit:idproduit,
        nomproduit:nomproduit,
        quantiteproduit:quantiteproduit,
        prixproduit: prixproduit,
        categorie:categorie
           
     }

     console.log(data)

     this.setState(
        {
            idproduit:"44f",
            nomproduit:"maystro",
            quantiteproduit:"2000",
            prixproduit: "200",
            categorie:"chokolat",
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
        <a class="nav-link" href="/">Accuiel</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/accuielProduit"> &#62; Détails du Produit</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/ajout_produit"> &#62;  Ajouter Produit  <span class="sr-only">(courant)</span> </a>
      </li>
   
    </ul>
  </div>
</nav> 
<br/>
       

            <div className= 'col-md-8 mt-8-4 mx-auto'>
              <h1 className="h3 mb-3 font-weight-normal">Ajoute un noveau Produit</h1>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                     <button className="btn btn-warning " ><a href="/accuielProduit" style= {{textDecoration:'none', color:'black'}}><i className="fas fa-list"></i>Liste Produit </a></button>
                    </div>     
               <form className="form-group" style={{marginBottom:'15px'}}> 
                <div>
                <lable style={{marginBottom:'15px'}}>Reference</lable>
                    <input type='text' placeholder='Entre Reference' className = 'form-control'
                    name="idproduit" value={this.state.idproduit} onChange={this.handleInputChange} required/> 

                    <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.idproduitError}
                   </div>

                   <lable style={{marginBottom:'15px'}}>nom</lable>
                    <input type='text' placeholder='Entre nom Produit' className = 'form-control'
                    name="nomproduit" value={this.state.nomproduit  } onChange={this.handleInputChange} required/>

                    <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.nomproduitError}
                   </div>
                   <lable style={{marginBottom:'15px'}}>quantite</lable>
                    <input type='text' placeholder='Entre quantite Produit' className = 'form-control'
                    name="quantiteproduit" value={this.state.quantiteproduit  } onChange={this.handleInputChange} required/>

                    <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.quantiteproduitError}
                   </div>

                   <lable style={{marginBottom:'15px'}}>Prix</lable>
                    <input  type='text' placeholder='Entre Prix Produit' className='form-control'            
                     name="prixproduit" value={this.state.prixproduit} onChange={this.handleInputChange} required/> 
                       <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.prixproduitError}
                   </div>
                

                    <lable style={{marginBottom:'15px'}}>categorie </lable>
                    <input type='text' placeholder='Entre categorie' className = 'form-control'
                    name="categorie" value={this.state.categorie} onChange={this.handleInputChange} required/> 

                    <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.categorieError}
                   </div>
                    
                     <br/>
                    
                    <button  className='btn btn-success ' type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}> <i className="fas fa-save"></i>&nbsp;Sauvgarde</button>
                    &nbsp;

                    <button type="submit" className="btn btn-dark" style={{ marginTop: '15px', marginBottom:'20px', marginLeft:"900px", width:"140px", backgroundColor:"#2E4661", borderRadius:"10px", padding:"10px 0px 10px 0px"}} onClick={this.btnDemo}>Demo</button>
                       
                </div>
                </form>
            </div>

            
            </div>
            </div>
            </div>
            

  
        )

        
    }




}