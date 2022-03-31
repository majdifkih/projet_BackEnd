import React, { Component } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';
import moment from 'moment';

export default class EditVehicle extends Component {
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
        const {name,value}=e.target;

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
            MatriculeError= '*Register Number is Required!'
        }
        else if (!this.state.Matricule.includes('-')){
            MatriculeError= '*Please enter valid Register Number!'
        }

        if(!this.state.Kilométrage){
            KilométrageError="*Engine Number is Required! "
        }
        if(!this.state.Consommationcarburant){
            ConsommationcarburantError="*Brand Name is Required!"
        }
        if(!this.state.Categorie){
            CategorieError="*Brand Name is Required!"
        }

        if(!this.state.Datamaintenance){
            DatamaintenanceError="*Manufacture year   is Required!"
        }
       


        if(MatriculeError||KilométrageError||ConsommationcarburantError||CategorieError||DatamaintenanceError){
            this.setState({MatriculeError,KilométrageError,ConsommationcarburantError,CategorieError,DatamaintenanceError});
            return false;
        }
        return true;
    }

    onSubmit=(e)=>{
        const id = this.props.match.params.id;
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


        axios.put(`http://localhost:5000/majvehcule/${id}`,data).then((res)=>{
            if(res.data.success){
                this.setState({
                    Matricule:"",
                    Kilométrage:"",
                    Consommationcarburant:"",
                    Categorie:"",
                    Datamaintenance:""
                })
                Swal.fire("mise a jour !","mise a jour vehicle avec Success","success")
            }
        })
    }

    }

    componentDidMount(){
        const id = this.props.match.params.id;
        axios.get(`http://localhost:5000/vehicle/vehicleDash/${id}`).then((res)=>{
            if(res.data.success){
                this.setState({
                    Matricule:res.data.vehicle.Matricule,
                    Kilométrage:res.data.vehicle.Kilométrage,
                    Consommationcarburant:res.data.vehicle.Consommationcarburant,
                    Categorie:res.data.vehicle.Categorie,
                    Datamaintenance:res.data.vehicle.Datamaintenance,

                
                    
                });
                console.log(this.state.vehicle);
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
              <h1 className="h3 mb-3 font-weight-normal">mise a jour VEHICLE</h1>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                     <button className="btn btn-warning " ><Link to="/vehicleDash"  style= {{textDecoration:'none', color:'black'}}><i className="fas fa-list"></i>voir Liste chaffeur</Link></button>
                    </div>          
               <form className="form-group" style={{marginBottom:'15px'}}> 
                <div>
                   
                   <lable style={{marginBottom:'15px'}}>Matricule</lable>
                    <input type='text' placeholder='Enter Matricule' className = 'form-control'
                    name="Matricule" value={this.state.Matricule} onChange={this.handleInputChange} required/> 

                    <div className="text-danger" style={{fontSize:12 ,color:"red"}}>
                           {this.state.MatriculeError}
                   </div>



                   <lable style={{marginBottom:'15px'}}>Kilométrage</lable>
                    <input type='text' placeholder='Kilométrage' className = 'form-control'
                    name="Kilométrage" value={this.state.Kilométrage} onChange={this.handleInputChange} required/> 
                   
                   <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.KilométrageError}
                   </div>


                   <lable style={{marginBottom:'15px'}}> Consommation carburant</lable>
                    <input type='text' placeholder='Consommation carburant' className = 'form-control'
                    name="Consommationcarburant" value={this.state.Consommationcarburant} onChange={this.handleInputChange} required/> 

                    <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.ConsommationcarburantError}
                   </div>

                   <lable style={{marginBottom:'15px'}}>Categorie</lable>
                    <input type='text' placeholder='Enter Categorie' className = 'form-control'
                    name="Categorie" value={this.state.Categorie} onChange={this.handleInputChange} required/> 

                    <div className="text-danger" style={{fontSize:12 ,color:"red"}}>
                           {this.state.CategorieError}
                   </div>
                    
                   <lable style={{marginBottom:'15px'}}>Date maintenance</lable>
                    <input type="date" placeholder='Enter Date' className='form-control'            
                     name="Datamaintenance" value={this.state.Datamaintenance} onChange={this.handleInputChange} max={moment().format("YYYY-MM-DD")} required/> 
                        <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.DatamaintenanceError}
                   </div>



                    <button  className='btn btn-success ' type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}> <i className="fas fa-save"></i>&nbsp;mise a jour Vehicle</button>
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
