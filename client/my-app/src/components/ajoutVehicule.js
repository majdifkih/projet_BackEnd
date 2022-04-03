
import React, { Component } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';
import moment from 'moment';



export default class AjoutVehicule extends Component {
    constructor(props){
        super(props);
        this.state={
            Matricule:"",
            Kilométrage:"",
            Consommationcarburant:"",
            Categorie:"",
            Datamaintenance:"",
            MatriculeError:"",
            KilométrageError:"",
            ConsommationcarburantError:"",
            CategorieError:"",
            DatamaintenanceError:""

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
        let MatriculeError="";
        let KilométrageError="";
        let ConsommationcarburantError="";
        let CategorieError="";
        let DatamaintenanceError="";

        if(!this.state.Matricule){
            MatriculeError= '*matricule Number is Required!'
        }
       // else if (!this.state.Matricule.includes('')){
         //   MatriculeError= '*Please enter valid Register Number!'
        //}

        if(!this.state.Kilométrage){
            KilométrageError="*kilometrage is Required! "
        }
        if(!this.state.Consommationcarburant){
            ConsommationcarburantError="*consommation is Required!"
        }
        if(!this.state.Categorie){
            CategorieError="*categorie is Required!"
        }

        if(!this.state.Datamaintenance){
            DatamaintenanceError="*date year   is Required!"
        }
       


        if(MatriculeError||KilométrageError||ConsommationcarburantError||CategorieError||DatamaintenanceError){
            this.setState({MatriculeError,KilométrageError,ConsommationcarburantError,CategorieError,DatamaintenanceError});
            return false;
        }
        return true;
    }

  

    onSubmit=(e)=>{
        
        e.preventDefault();

        const isValid= this.validate();
        const{Matricule,Kilométrage,Consommationcarburant,Categorie,Datamaintenance}=this.state;

     
        
        const data={
            Matricule:Matricule,
            Kilométrage:Kilométrage,
            Consommationcarburant:Consommationcarburant,
            Categorie:Categorie,
            Datamaintenance:Datamaintenance
        }

        if(isValid){       
        console.log(data)

        axios.post("http://localhost:5000/ajout_vehicule",data).then((res)=>{
            if(res.data.success){
                this.setState({
                    Matricule:"",
                    Kilométrage:"",
                    Consommationcarburant:"",
                    Categorie:"",
                    Datamaintenance:"",
                    MatriculeError:"",
                    KilométrageError:"",
                    ConsommationcarburantError:"",
                    CategorieError:"",
                    DatamaintenanceError:""
                })
            }
            Swal.fire("ajout!","ajout Vehicule avec Success","success")
        })

    }
    };
    
    btnDemo = (e) => {
        e.preventDefault();
    
        const {  Matricule,Kilométrage,Consommationcarburant,Categorie,Datamaintenance} = this.state;
    
        const data = {
            Matricule:Matricule,
            Kilométrage:Kilométrage,
            Consommationcarburant:Consommationcarburant,
            Categorie:Categorie,
            Datamaintenance:Datamaintenance,
        }
    
        console.log(data)
    
        this.setState(
            {
                Matricule:"-1022",
            Kilométrage:"10",
            Consommationcarburant:"1000",
            Categorie:"camion",
            Datamaintenance:"2022-02-04",
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
        <a class="nav-link" href="/accuielVehicule"> &#62; Détails Véhicle </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/accuielVehicule"> &#62; ajout Véhicle <span class="sr-only">(courant)</span> </a>
      </li>
   
    </ul>
  </div>
</nav> 
<br/>
            
            <div className= 'col-md-8 mt-8-4 mx-auto'>
              <h1 className="h3 mb-3 font-weight-normal">Ajouter un nouveau Véhicle</h1>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                     <button className="btn btn-warning " ><a href="/accuielVehicule" style= {{textDecoration:'none', color:'black'}}><i className="fas fa-list"></i>voir liste Véhicle </a></button>
                    </div>         
               <form className="form-group" style={{marginBottom:'15px'}}> 
                <div>
                   <lable style={{marginBottom:'15px'}}>Matricule</lable>
                    <input type='text' placeholder='Enter Matricule' className = 'form-control'
                    name="Matricule" value={this.state.Matricule} onChange={this.handleInputChange} required/> 

                    <div className="text-danger" style={{fontSize:12 ,color:"red"}}>
                           {this.state.MatriculeError}
                   </div>
                </div>
              
                
                <div>

                    <lable style={{marginBottom:'15px'}}>Kilométrage</lable>
                    <input type='text' placeholder='Kilométrage' className = 'form-control'
                    name="Kilométrage" value={this.state.Kilométrage} onChange={this.handleInputChange} required/> 
                   
                   <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.KilométrageError}
                   </div>
                </div>
                   


                <div>
                     <lable style={{marginBottom:'15px'}}> Consommation carburant</lable>
                    <input type='text' placeholder='Consommation carburant' className = 'form-control'
                    name="Consommationcarburant" value={this.state.Consommationcarburant} onChange={this.handleInputChange} required/> 

                    <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.ConsommationcarburantError}
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
                      <lable style={{marginBottom:'15px'}}>Date maintenance</lable>
                    <input type="date" placeholder='Enter Date' className='form-control'            
                     name="Datamaintenance" value={this.state.Datamaintenance} onChange={this.handleInputChange} max={moment().format("YYYY-MM-DD")} required/> 
                        <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.DatamaintenanceError}
                   </div>
                     
                     <br/>

                  
                    
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
