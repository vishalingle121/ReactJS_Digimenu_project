import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import Img from '../assets/login-img.jpg';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Logindg()
{
    const[usr,setUsr]=useState("");
    const[pwd,setPwd]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
     // LoginAdmin();
    },[]);
  const hHser=(e)=>{
    setUsr(e.target.value);
  }

  const hPwd=(e)=>{
    setPwd(e.target.value);
  }

  function LoginAdmin()
  {

    axios.get("http://localhost:8080/login")
    .then(response=>{
      console.log(response.data);
      let l=response.data.userlst;
      let cout=0;
      for(let i=0;i<l.length;i++)
      {
        if(l[i]['uname']==usr  && l[i]['pwd']==pwd)
        {
         cout++;
        }
       
      }
      if(cout>0)
        {
         alert("login Success");
         navigate("/home");
         setUsr("");

        }
        else{
         alert("Login Failed");
        }

    })
  /* if(usr=="admin" && pwd=="12345")
   {
    alert("Login Success");
    //window.location.href="home";
    navigate("/home");
   }
   else{
    alert("login Failed");
   }*/
  }

  return(
    <>
     <MDBContainer fluid className="p-3 my-5 h-custom">

<MDBRow>

  <MDBCol col='10' md='6'>
    <img src={Img} class="img-fluid" alt="Sample image" />
  </MDBCol>

  <MDBCol col='4' md='4'>

    <div className="d-flex flex-row align-items-center justify-content-center">

      <p className="lead fw-normal mb-0 me-3" style={{color:'blue',fontSize:'30px'}}>Sign in Admin</p>

     
    </div>

    <div className="divider d-flex align-items-center my-4">
     
    </div >

    <MDBInput wrapperClass='mb-6' label='User Name' id='formControlLg' type='text' size="lg" color='blue' onChange={hHser}/>
    <MDBInput wrapperClass='mb-6' label='Password' id='formControlLg' type='password' size="lg" onChange={hPwd}/>

    <div className="d-flex justify-content-between mb-4">
     
      
    </div>

    <div className='text-center text-md-start mt-4 pt-2'>
      <Button className="mb-0 px-5" size='lg' onClick={LoginAdmin}>Login</Button>
     
        </div>

  </MDBCol>

</MDBRow>
<br/>
<br/>
<div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

  <div className="text-white mb-3 mb-md-0">
    Copyright © 2024. All rights reserved.
  </div>

  <div>

    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
      <MDBIcon fab icon='facebook-f' size="md"/>
    </MDBBtn>

    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
      <MDBIcon fab icon='twitter' size="md"/>
    </MDBBtn>

    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
      <MDBIcon fab icon='google' size="md"/>
    </MDBBtn>

    <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
      <MDBIcon fab icon='linkedin-in' size="md"/>
    </MDBBtn>

  </div>

</div>

</MDBContainer>
    </>
  )
}