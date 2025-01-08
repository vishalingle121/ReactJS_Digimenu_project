import { useEffect, useState } from "react"
import Footers from "../document/Footers"
import Navbars from "../document/Navbars"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";

export default function Quantity()
{
  const [data,setData]=useState([]);
  const[qtyp,setQtyp]=useState("");
  const[uqtid,setUqtid]=useState("");
  const[uqtyp,setUqytp]=useState("");

  
  
  useEffect(()=>{
    Qtydata();
  },[]);
  function Qtydata()
  {
//alert("Qty");
axios.get("http://localhost:8080/qtymast")
.then(response=>{
  console.log(response.data);
  setData(response.data.qtymastlst);
  console.log(data);

})
  }

  //--------------------add Qyt----------------------------------------
  const atyType=(e)=>{
    setQtyp(e.target.value);
  }

  function AddQty()
  {
      axios.post("http://localhost:8080/addqty",{
        "qtytype":qtyp    
       })
      .then(response=>{
        let qtyad=response.data.status;
        if(qtyad=="200")
        {
          alert(response.data.message);
          Qtydata();
          setQtyp("");
        }
      })
  }

  //----------------------------Update Qty-----------------------------------------------
const qtyUpdid=(e)=>{
  setUqtid(e.target.value);
}

  const qtyUpdType=(e)=>{
    setUqytp(e.target.value);
  }

function qtyUpd(){

      axios.put("http://localhost:8080/updateqty",{
        "qid":uqtid,
       "qtytype":uqtyp   
      })
      .then(response=>{
        let uqt=response.data.status;
        if(uqt=="200")
        {
          alert(response.data.message);
          Qtydata();
          setUqtid("");
          setUqytp("");
        }
        else{
          alert(response.data.message);
        }
      })
}
//-----------------------------Qty Delete-------------------------------------
      function delQty(id)
      {
        const isConfirmed = window.confirm("Are you sure you want to delete this item?");
        if(isConfirmed)
        {
        //alert("You are Delete this ID "+id);
        axios.delete("http://localhost:8080/deleteqty/"+id)
        .then(response=>{
          let qdel=response.data.status;
          if(qdel=="200")
          {
            alert(response.data.message);
            Qtydata();
          }
        })
      }
      else{
        // If user clicked "No" (Cancel)
    console.log("Deletion canceled by the user.");
      }
    }

//-------------------------updQtyDt get Data---------------------------------------
function updQtyDt(id,nm)
{
  alert("ID: "+id+" Type: "+nm);
  setUqtid(id);
  setUqytp(nm);
 
}

  return(
    <>
    <Navbars/>
        <h1 style={{color:'darkgreen',textAlign:'center',margin:'20px'}}>Quantity Items</h1>
        <Table responsive="sm" style={{textAlign:'center'}} striped hover variant="">
      <thead>
        <tr>
        <th style={{backgroundColor:'lightyellow'}}>Sr.No.</th>
          <th style={{backgroundColor:'lightyellow'}}>Quantity ID</th>
          <th style={{backgroundColor:'lightyellow'}}>Quanity Type</th>
          <th style={{width:'10%', backgroundColor:'lightyellow'}}>Event</th>
          <th style={{width:'10%', backgroundColor:'lightyellow'}}>Event</th>
        </tr>
      </thead>
      <tbody>
      {data.map((item,index)=>{
            return(
        <tr>
          <td>{index + 1}</td>
          <td>{item.qid}</td>
          <td>{item.qtytype}</td>
          <td><Button variant="success" onClick={()=>updQtyDt(item.qid,item.qtytype)} >Update</Button> </td>
          <td><Button variant="danger" onClick={()=>delQty(item.qid)} >Delete</Button> </td>
        </tr>) 
        })}   
      </tbody>
    </Table>

{/*--------------------------Add  Data-----------------------------*/}

<Container style={{background:'lightblue',marginTop:'20px',borderTop:'4px solid gray',borderBottom:'3px solid gray'}}>
<Container style={{width:'500px',padding:'20px'}} className="text-center">
    <h2 style={{textAlign:"center",color:'brown'}}>Add Quantity </h2><br/>
    <FloatingLabel
        controlId="floatingInput"
        label="FoodGroup"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="FoodGroup type" onChange={atyType}/>
      </FloatingLabel>
      
      <Button style={{margin:'20px'}} onClick={AddQty}>Add Data</Button>
      </Container>
      </Container>

{/* --------------------------------Update Quanity---------------------------------------*/}

      <Container style={{background:'lightgreen',marginTop:'25px',borderTop:'4px solid green',borderBottom:'3px solid green'}}>
<Container style={{width:'500px',padding:'20px'}} className="text-center">
    <h2 style={{textAlign:"center",color:'brown'}}>Update Quantity </h2><br/>
    <FloatingLabel
        controlId="floatingInput"
        label="Group ID"
        className="mb-3"
      >
        <Form.Control type="number"  disabled value={uqtid} placeholder="FoodGroup ID" onChange={qtyUpdid} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="FoodGroup Type">
        <Form.Control type="text" value={uqtyp} placeholder="FoodGroup Type" onChange={qtyUpdType}/>
      </FloatingLabel>
      <Button style={{margin:'20px'}} variant="success" onClick={qtyUpd}>Update</Button>
      </Container>
      </Container>



    <Footers/>
    </>
  )
}