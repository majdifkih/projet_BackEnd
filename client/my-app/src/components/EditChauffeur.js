import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';


 const EditChauffeur =(props)=>{
      const [cin,setCin]= useState('');
      const [nom,setNom]= useState('');
      const [prenom,setPrenom]= useState('');
      const [address,setAddress]= useState('');
      const [age,setAge]= useState('');
      const [cinerror,setCinerror]= useState('');
      const [nomerror,setNomerror]= useState('');
      const [prenomerror,setPrenomerror]= useState('');
      const [addresserror,setAddresserror]= useState('');
      const [ageerror,setAgeerror]= useState('');
 
 
      
    
    const validate= ()=>{
         cinerror="";
         nomerror="";
         prenomerror="";
         addresserror="";
         ageerror="";

        if(!cin){
            setCinerror="* cin is Required!"
        }
        else if (!cin.match('[0-9+]{10}')){
            setCinerror= '* cin incorrecte!'
         }

         else if (cin.match('-')){
            setCinerror= '* cin incorrecte!'
            }
            if(nom){
                setNomerror="*nom is Required!"
            }
            if(prenom){
                setPrenomerror="*prenom is Required!"
            }
            if(address){
                setAddresserror="* Address is Required!"
                 }
                if(age){
                    setAgeerror="* Age is Required"
                }
                if(toString().match('-')){
                    setAgeerror="* Age should not be negetive"
                    }

                    if(setCinerror||setNomerror||setPrenomerror||setAddresserror||setAgeerror){
                     
                    return false;
 
                     }
                     return true;


                    }   
                    
                    const onSubmit=(e)=>{
                        const id = props.match.params.id;
                        e.preventDefault();
                        const isValid= validate();
                        //const {cin,nom,prenom,address,age}=useState([]);
                 
                        const data={
                            setCin:cin,
                            setNom:nom,
                            setPrenom:prenom,
                            setAddress:address,
                            setAge:age
                        }
                        if(isValid){
                            console.log(data)
                            axios.put(`http://localhost:5000/maj/${id}`,data).then((res)=>{
                                if(res.data.success){
                                   
                                    Swal.fire('mise à jour', 'mise à jour chauffeur avec succes', 'success')
                                   }
                        })
                    }
                }
                // useEffect(()=>{
                //     const id = props.match.params.id;
                //     axios.get(`/accuielChauffeur/${id}`).then((res)=>{
                //         if(res.data.success){
                //             ({
                //                 setCin:res.data.chaffeur.cin,
                //                 setNom:res.data.chaffeur.nom,
                //                 setPrenom:res.data.chaffeur.prenom,
                //                 setAddress:res.data.chaffeur.address,
                //                 setAge:res.data.chaffeur.age
                            
            
                //             });
                //             console.log(res.data);
                            
                //         }
                //     })
                // });

                
                    return (
                        <div>
                            <hr/>
                            <div id="wrapper" className="toggled">
                            <div id="page-content-wrapper">
                            <div className="container-fluid">
                            <div className= 'col-md-8 mt-8-4 mx-auto'>

              <h1 className="h3 mb-3 font-weight-normal">EDIT chaffeur</h1>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                     <button className="btn btn-warning " ><a href="/accuielChauffeur" style= {{textDecoration:'none', color:'black'}}><i className="fas fa-list"></i>voir liste des chaffeurs</a></button>
                    </div>          
               <form className="form-group" style={{marginBottom:'15px'}}> 
               <div>


               <lable style={{marginBottom:'15px'}}>Cin chaffeur</lable>
                    <input type='text' placeholder='Entre cin' className = 'form-control'
                    name="cin" value={cin} onChange={e => setCin(e.target.value)}/> 
                              <div style={{fontSize:12 ,color:"red"}}>
                           {cinerror}
                   </div>
                
            
                   <lable style={{marginBottom:'15px'}}>Nom chaffeur</lable>
                    <input type='text' placeholder='Enter nom' className = 'form-control'
                    name="nom" value={nom} onChange={e => setNom(e.target.value)}/> 
                      <div style={{fontSize:12 ,color:"red"}}>
                           {nomerror}
                   </div>

                   <lable style={{marginBottom:'15px'}}>Prenom chaffeur</lable>
                    <input type='text' placeholder='Enter prenom' className = 'form-control'
                    name="prenom" value={prenom} onChange={e => setPrenom(e.target.value)}/> 
                      <div style={{fontSize:12 ,color:"red"}}>
                           {prenomerror}
                   </div>

                   <lable style={{marginBottom:'15px'}}>Address chaffeur</lable>
                    <textarea  cols='30' rows='5' placeholder='Entre Address' className='form-control'            
                     name="address" value={address} onChange={e => setAddress(e.target.value)}/> <br/>
                          <div style={{fontSize:12 ,color:"red"}}>
                           {addresserror}
                   </div>

                    <lable style={{marginBottom:'15px'}}>Age chaffeur</lable>
                    <input type='text' placeholder='Entre Age' className = 'form-control'
                    name="age" value={age} onChange={e => setAge(e.target.value)}/> 
                          <div style={{fontSize:12 ,color:"red"}}>
                           {ageerror}
                   </div>
                    <button  className='btn btn-success ' type="submit" style={{marginTop:'15px'}} onClick={onSubmit}> <i className="fas fa-update"></i>&nbsp;mise à jour</button>
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

            





export default EditChauffeur;






