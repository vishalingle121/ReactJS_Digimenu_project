import { useEffect, useState } from "react";
import Footers from "../document/Footers";
import Navbars from "../document/Navbars";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from "axios";

export default function Menucard()
{
  const[data,setData]=useState([]);

  useEffect(()=>{
 // alert("Test");
  menucard();
  },[]);

  function menucard()
  {
    axios.get("http://localhost:8080/menucard")
    .then(response=>{
      console.log(response.data);
      setData(response.data.MenuLst);
      console.log(data);
    })
  }
    return(
        <>
        <Navbars/>
        <h1 style={{textAlign:'center',margin:'20px',color:'darkgreen'}}>Menu-card data</h1>
        <Table responsive style={{textAlign:'center'}} striped hover variant="" >
      <thead>
        <tr>
        <th style={{backgroundColor:'green',color:'white'}}>Sr.No.</th>
          <th style={{backgroundColor:'green',color:'white'}}> Group</th>
          <th style={{backgroundColor:'green',color:'white'}}>Item Name</th>
          <th style={{backgroundColor:'green',color:'white'}}>Price </th>
          <th style={{backgroundColor:'green',color:'white'}}>Quntity</th>
          
        </tr>
      </thead>
      <tbody>
      {data.map((item,index)=>{
            return(
        <tr>
          <td style={{backgroundColor:'lightcoral'}}>{index + 1}</td>
          <td style={{backgroundColor:'lightgreen'}}>{item.group}</td>
          <td style={{backgroundColor:'lightpink'}}>{item.menu}</td>
          <td style={{backgroundColor:'lightyellow',color:'green'}}>{item.price}</td>
          <td style={{backgroundColor:'lightgray'}}>{item.qty} </td>
          
        </tr>) 
        })}   
      </tbody>
    </Table>
        <Footers/>
        </>
    )
}