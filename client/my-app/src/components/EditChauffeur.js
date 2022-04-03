import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default class EditChauffeur extends React.Component{
       
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
            cinError="* cin is Required!"
        }
        else if (!this.state.cin.match('[0-9+]{10}')){
         cinError= '* cin incorrecte!'
         }

         else if (this.state.cin.match('-')){
            cinError= '* cin incorrecte!'
            }
            if(!this.state.nom){
                nomError="*nom is Required!"
            }
            if(!this.state.prenom){
                prenomError="*prenom is Required!"
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
                        const id = this.props.match.params.id;
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
                            axios.put(`http://localhost:5000/maj/${id}`,data).then((res)=>{
                                if(res.data.success){
                                    this.setState({
                                     cin:"",
                                     nom:"",
                                     prenom:"",
                                     address:"",
                                     age:""
                                    })
                                    Swal.fire('mise à jour', 'mise à jour chauffeur avec succes', 'success')
                            }
                        })
                    }
                }
                componentDidMount(){
                    const id = this.props.match.params.id;
                    axios.get(`/accuielChauffeur/${id}`).then((res)=>{
                        if(res.data.success){
                            this.setState({
                               cin:res.data.chaffeur.cin,
                               nom:res.data.chaffeur.nom,
                               prenom:res.data.chaffeur.prenom,
                               address:res.data.chaffeur.address,
                               age:res.data.chaffeur.age
                               
                               
            
            
                            });
                            console.log(this.state.chaffeur);
                            
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

              <h1 className="h3 mb-3 font-weight-normal">EDIT chaffeur</h1>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                     <button className="btn btn-warning " ><a href="/accuielChauffeur" style= {{textDecoration:'none', color:'black'}}><i className="fas fa-list"></i>voir liste des chaffeurs</a></button>
                    </div>          
               <form className="form-group" style={{marginBottom:'15px'}}> 
               <div>


               <lable style={{marginBottom:'15px'}}>Cin chaffeur</lable>
                    <input type='text' placeholder='Entre cin' className = 'form-control'
                    name="cin" value={this.state.cin} onChange={this.handleInputChange}/> 
                              <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.cinError}
                   </div>
                
            
                   <lable style={{marginBottom:'15px'}}>Nom chaffeur</lable>
                    <input type='text' placeholder='Enter nom' className = 'form-control'
                    name="nom" value={this.state.nom} onChange={this.handleInputChange}/> 
                      <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.nomError}
                   </div>

                   <lable style={{marginBottom:'15px'}}>Prenom chaffeur</lable>
                    <input type='text' placeholder='Enter prenom' className = 'form-control'
                    name="prenom" value={this.state.prenom} onChange={this.handleInputChange}/> 
                      <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.prenomError}
                   </div>

                   <lable style={{marginBottom:'15px'}}>Address chaffeur</lable>
                    <textarea  cols='30' rows='5' placeholder='Entre Address' className='form-control'            
                     name="address" value={this.state.address} onChange={this.handleInputChange}/> <br/>
                          <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.addressError}
                   </div>

                    <lable style={{marginBottom:'15px'}}>Age chaffeur</lable>
                    <input type='text' placeholder='Entre Age' className = 'form-control'
                    name="age" value={this.state.age} onChange={this.handleInputChange}/> 
                          <div style={{fontSize:12 ,color:"red"}}>
                           {this.state.ageError}
                   </div>


                    
                
                    


                    <button  className='btn btn-success ' type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}> <i className="fas fa-update"></i>&nbsp;mise à jour</button>
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












