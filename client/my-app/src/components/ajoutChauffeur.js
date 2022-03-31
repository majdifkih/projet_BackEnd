import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


export default class AjoutChauf extends React.Component {

    constructor(props){
        super(props);
        this.state={
            cin:"",
            nom:"",
            prenom:"",
            address:"",
            age:"",
            cinError:"",
            nomError:"",
            prenomError:"",
            addressError:"",
            ageError:""
           
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
        let cinError="";
        let nomError="";
        let prenomError="";
        let addressError="";
        let ageError="";
 
     
 
        
        if(!this.state.cin){
            cinError="* Cin is Required!"
        }
        else if (!this.state.cin.match('[0-9+]{10}')){
            cinError= '* Please Enter valid Cin!'
        }
        if(!this.state.nom){
            nomError="* nom is Required!"
        }
        if(!this.state.prenom){
            prenomError="* Prenom is Required!"
        }
        if(!this.state.address){
            addressError="* Address is Required!"
             }
            if(!this.state.age){
            ageError="* Age is Required"
            }
            if(this.state.age.toString().match('-')){
              ageError="* Age should not be negetive"
              }
    
            if(cinError||nomError||prenomError||addressError||ageError){
            this.setState({cinError,nomError,prenomError,addressError,ageError});
            return false;
    
            }
    
        return true;
     }
     onSubmit=(e)=>{
    
         e.preventDefault();
         const isValid= this.validate();
         const {cin,nom,prenom,address,age}= this.state;
         const data={
            cin:cin,
            nom:nom,
            prenom:prenom,
            address:address,
            age:age
         }
         if(isValid){
            console.log(data)
            axios.post("http://localhost:5000/ajout_chauffeur",data).then((res)=>{
                if(res.data.success){
                    this.setState({
                     cin:"",
                     nom:"",
                     prenom:"",
                     address:"",
                     age:""
                    })
                    Swal.fire('ajout', 'ajout chauffeur avec succes', 'success')
                 
                }
            })
         }
        }
 // demo button 
    btnDemo = (e) => {
     e.preventDefault();

     const {  cin,nom,prenom,address,age} = this.state;

     const data = {
           cin:cin,
           nom:nom,
           prenom:prenom,
           address: address,
           age:age
           
     }

     console.log(data)

     this.setState(
        {
            cin:"11830416",
            nom:"majdi",
            prenom:"fkih",
            address: "Hiboun",
            age:"22",
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
        <a class="nav-link" href="/accuielChauffeur"> &#62; Détails du chauffeur</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/#"> &#62;  Ajouter chauffeur  <span class="sr-only">(courant)</span> </a>
      </li>
   
    </ul>
  </div>
</nav> 
<br/>
       

            <div className= 'col-md-8 mt-8-4 mx-auto'>
              <h1 className="h3 mb-3 font-weight-normal">Ajoute un noveau chauffeur</h1>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                     <button className="btn btn-warning " ><a href="/accuielChauffeur" style= {{textDecoration:'none', color:'black'}}><i className="fas fa-list"></i>Liste chauffeur </a></button>
                    </div>     
               <form className="form-group" style={{marginBottom:'15px'}}> 
                <div>
                <lable style={{marginBottom:'15px'}}>cin chauffeur</lable>
                    <input type='text' placeholder='Entre cin' className = 'form-control'
                    name="cin" value={this.state.cin} onChange={this.handleInputChange} required/> 

                    <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.cinError}
                   </div>

                   <lable style={{marginBottom:'15px'}}>nom chauffeur</lable>
                    <input type='text' placeholder='Entre nom' className = 'form-control'
                    name="nom" value={this.state.nom  } onChange={this.handleInputChange} required/>

                    <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.nomError}
                   </div>
                   <lable style={{marginBottom:'15px'}}>prenom chauffeur</lable>
                    <input type='text' placeholder='Entre prenom' className = 'form-control'
                    name="prenom" value={this.state.prenom  } onChange={this.handleInputChange} required/>

                    <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.prenomError}
                   </div>

                   <lable style={{marginBottom:'15px'}}>Address chauffeur</lable>
                    <textarea  cols='30' rows='5' placeholder='Address' className='form-control'            
                     name="address" value={this.state.address} onChange={this.handleInputChange} required/> 
                       <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.addressError}
                   </div>
                

                    <lable style={{marginBottom:'15px'}}>Age chauffeur </lable>
                    <input type='text' placeholder='Entre Age' className = 'form-control'
                    name="age" value={this.state.age} onChange={this.handleInputChange} required/> 

                    <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.ageError}
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