import Footers from "../document/Footers";
import Navbars from "../document/Navbars";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from "axios";
import { useEffect, useState } from "react";
export default function Menu(){

    const[data,setMData]=useState([]);
    const[nm,setNm]=useState("");
    const[price,setPrice]=useState("");
    const[mgid,setGid]=useState("");
    const[mqid,setQid]=useState("");
    const[umid,setUmid]=useState("");
    const[unm,setUnm]=useState("");
    const[uprice,setUprice]=useState("");
    const[uqid,setUqid]=useState("");
    const[ugid,setUgid]=useState("");


    useEffect(()=>{
        menu();
    },[]);
    function menu()
    {
       // alert("menu");
        axios.get("http://localhost:8080/menu")
        .then(response=>{
            console.log(response.data);
            setMData(response.data.menulst);
            console.log(data);
        })
    }
//---------------------Add menu--------------------------------------
     const menuName=(e)=>{
      setNm(e.target.value);
     }
     const menuPrice=(e)=>{
      setPrice(e.target.value);
     }

     const menuGid=(e)=>{
      setGid(e.target.value);
     }
      
     const menuQid=(e)=>{
      setQid(e.target.value);
     }

     function menuAdd()
     {
      //alert("test");
      axios.post("http://localhost:8080/addmenu",{
        "gid":mgid,
         "qid":mqid,
         "mprice":price,
         "mname":nm
         
       })
      .then(response=>{
        let res=response.data.status;
        if(res=="200")
        {
          alert(response.data.message);
          menu();
          setPrice("");
        }
      })
     }

//--------------------update Menu-----------------------------------------
const updMid=(e)=>{
  setUmid(e.target.value);
}
const updName=(e)=>{
  setUnm(e.target.value);
}
const updPrice=(e)=>{
  setUprice(e.target.value);
}
const updGid=(e)=>{
  setUgid(e.target.value);
}
const updQid=(e)=>{
  setUqid(e.target.value);
}

function updateMenu()
{
  axios.put("http://localhost:8080/updatemenu",{
          "mid": umid,
          "mname": unm,
          "mprice": uprice,
          "gid": ugid,
          "qid": uqid
      
    })
  .then(response=>{
    let res=response.data.status;
    if(res=="200")
    {
      alert(response.data.message);
      menu();
      setUmid("");
    }
    else{
      alert(response.data.message);
    }
  })
}

function delMenu(id)
{
  alert(id);
  axios.delete("http://localhost:8080/deletemenu/"+id)
  .then(response=>{
    let delt=response.data.status;
    if(delt=="200")
    {
      alert(response.data.message);
      menu();
    }
    else{
      alert(response.data.message);
    }
  })
}


    return(
        <>
        <Navbars/>
        <h1 style={{color:'darkgreen',textAlign:'center',margin:'20px'}}>Menu Items</h1>
        <Table responsive style={{textAlign:'center'}} striped hover variant="">
      <thead >
        <tr >
        <th style={{backgroundColor:'lightyellow'}}>Sr.No.</th>
          <th style={{backgroundColor:'lightyellow'}}>Menu ID</th>
          <th style={{backgroundColor:'lightyellow'}}>Menu Name</th>
          <th style={{backgroundColor:'lightyellow'}}>Menu Price </th>
          <th style={{backgroundColor:'lightyellow'}}>Group ID</th>
          <th style={{backgroundColor:'lightyellow'}}>Qty ID</th>
          <th style={{backgroundColor:'lightyellow'}}>Add Event</th>
        </tr>
      </thead>
      <tbody>
      {data.map((item,index)=>{
            return(
        <tr>
          <td>{index + 1}</td>
          <td>{item.mid}</td>
          <td>{item.mname}</td>
          <td>{item.mprice}</td>
          <td>{item.gid} </td>
          <td>{item.qid} </td>
          <td><Button variant="danger" onClick={()=>delMenu(item.mid)}>Delete</Button> </td>
        </tr>) 
        })}   
      </tbody>
    </Table>
        {/*---------------------------Add MEnu------------------------------*/}
    <Container style={{background:'lightblue',marginTop:'25px',borderTop:'4px solid blue',borderBottom:'3px solid blue'}}>
<Container style={{width:'500px',padding:'20px'}} className="text-center">
    <h3 style={{textAlign:"center",color:'brown'}}>Add Menu </h3><br/>
    <FloatingLabel
        controlId="floatingInput"
        label="Menu Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Menu Name" onChange={menuName} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Menu Price"className="mb-3">
        <Form.Control type="text" placeholder="Menu Price" onChange={menuPrice}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Group Id"className="mb-3">
        <Form.Control type="number" placeholder="FoodGroup Type"  onChange={menuGid}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Quantity Id"className="mb-3">
        <Form.Control type="number" placeholder="FoodGroup Type" onChange={menuQid}/>
      </FloatingLabel>
      <Button style={{margin:'20px'}} variant="primary" onClick={menuAdd}>Save Data</Button>
      </Container>
      </Container>

    {/*---------------------------Add MEnu------------------------------*/}
    <Container style={{background:'lightgray',marginTop:'25px',borderTop:'4px solid gray',borderBottom:'3px solid gray' }}>
<Container style={{width:'500px',padding:'20px'}} className="text-center">
    <h2 style={{textAlign:"center",color:'green'}}>Update Menu </h2><br/>
    <FloatingLabel
        controlId="floatingInput"
        label="Menu Id"
        className="mb-3"
      >
        <Form.Control type="number" placeholder="Menu Id" onChange={updMid}  />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Menu Name"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Menu Name" onChange={updName} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Menu Price"className="mb-3">
        <Form.Control type="text" placeholder="Menu Price" onChange={updPrice} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Group Id"className="mb-3">
        <Form.Control type="number" placeholder="FoodGroup Type" onChange={updGid}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Quantity Id"className="mb-3">
        <Form.Control type="number" placeholder="FoodGroup Type" onChange={updQid}/>
      </FloatingLabel>
      <Button style={{margin:'20px'}} variant="success" onClick={updateMenu} >Update</Button>
      </Container>
      </Container>
        <Footers/>
        </>
    )
}