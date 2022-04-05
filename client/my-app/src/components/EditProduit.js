import axios from 'axios';
import React, { Component } from 'react'
import Swal from 'sweetalert2';

export default class Editproduit extends Component {



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
            categorieError:"",
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
        const id = this.props.match.params.id;
        e.preventDefault();
        const isValid= this.validate();
        const {idproduit,nomproduit,quantiteproduit,prixproduit,categorie}= this.state;
 
        const data={
            idproduit:idproduit,
            nomproduit:nomproduit,
            quantiteproduit:quantiteproduit,
            prixproduit:prixproduit,
            categorie:categorie,
        }
        if(isValid){
        console.log(data)
 
        axios.put(`/majProduit/${id}`,data).then((res)=>{
            if(res.data.success){
                this.setState({
                    idproduit:"",
                    nomproduit:"",
                    quantiteproduit:"",
                    prixproduit:"",
                    categorie:""
                })
            Swal.fire("mise a jour!", "Mise a jour Produit avec Succes","success")
            }
        })
    }
}
 
    
    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`/accuielProduit/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    idproduit:res.data.produit.idproduit,
                    nomproduit:res.data.produit.nomproduit,
                    quantiteproduit:res.data.produit.quantiteproduit,
                    prixproduit:res.data.produit.prixproduit,
                    categorie:res.data.produit.categorie

                });
                console.log(this.state.produit);
                
            }
        })
    }

    
    render() {
        return (

            <div>
                <hr/>
                <div id="wrapper" className="toggled">
                <div id="page-content-wrapper">
                <div className="container-fluid">


                    <div className= 'col-md-8 mt-8-4 mx-auto'>
              <h1 className="h3 mb-3 font-weight-normal">EDIT Produit</h1>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                     <button className="btn btn-warning " ><a href="/accuielProduit" style= {{textDecoration:'none', color:'black'}}><i className="fas fa-list"></i>Voir liste Produit</a></button>
                    </div>          
               <form className="form-group" style={{marginBottom:'15px'}}> 
                <div>
                   <lable style={{marginBottom:'15px'}}>Reference</lable>
                    <input type='text' placeholder='Enter Reference' className = 'form-control'
                    name="idproduit" value={this.state.idproduit} onChange={this.handleInputChange}/> 
                      <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.idproduitError}
                   </div>

                    <lable style={{marginBottom:'15px'}}>nom</lable>
                    <input type='text' placeholder='Enter nom produit' className = 'form-control'
                    name="nomproduit" value={this.state.nomproduit} onChange={this.handleInputChange}/> 
                          <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.nomproduitError}
                   </div>


                    <lable style={{marginBottom:'15px'}}>quantite</lable>
                    <input type='text' placeholder='Enter quantite produit' className = 'form-control'
                    name="quantiteproduit" value={this.state.quantiteproduit} onChange={this.handleInputChange}/> 
                              <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.quantiteproduitError}
                   </div>
                
                    <lable style={{marginBottom:'15px'}}>prix</lable>
                    <input  type='text' placeholder='Enter prix produit' className='form-control'            
                     name="prixproduit" value={this.state.prixproduit} onChange={this.handleInputChange}/> <br/>
                          <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.prixproduitError}
                   </div>
                   <lable style={{marginBottom:'15px'}}>categorie</lable>
                    <input  type='text' placeholder='Enter categorie' className='form-control'            
                     name="categorie" value={this.state.categorie} onChange={this.handleInputChange}/> <br/>
                          <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.categorieError}
                   </div>

                    <button  className='btn btn-success ' type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}> <i className="fas fa-update"></i>&nbsp;UPDATE</button>
                    &nbsp;
                       
                </div>
                </form>
            </div>

            </div>

            </div>
            </div>
            </div>
            
            
            

  
        )
    }
}
