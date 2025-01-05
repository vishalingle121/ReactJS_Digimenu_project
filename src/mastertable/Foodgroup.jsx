import { useEffect, useState } from "react";
import Footers from "../document/Footers";
import Navbars from "../document/Navbars";
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/esm/Container";
import axios from "axios";

export default function Foodgroup(){

    const[ ftype,setFtype]=useState("");
    const[data,setData]=useState([]);
    const[ugid,setUgid]=useState("");
    const[ufnm,setUfnm]=useState("");

    useEffect(()=>{
        foodgroup();
    },[])

    function foodgroup()
    {
       // Alert("foodgropu");
       axios.get("http://localhost:8080/foodgroup")
       .then(response=>{
        console.log(response.data);
        setData(response.data.foodglist);
        console.log(data);
       })
    }

    //----------------------Insert Foodg---------------------------------
    const foodType=(e)=>{
        setFtype(e.target.value);
    }

    function AddFood()
    {
      axios.post("http://localhost:8080/addfoodg",{
        "gname": ftype
  })
      .then(response=>{
        let rsup=response.data.status;
        if(rsup=="200")
        {
          alert(response.data.message);
          foodgroup();
          setFtype("");
        }
       
      })
        
    }

    //---------------update------------------
    const foodUpdid=(e)=>{
        setUgid(e.target.value);
    }
    const foodUpdType=(e)=>{
        setUfnm(e.target.value);
    }

    function foodUpd()
    {
       axios.put("http://localhost:8080/updatefoodg",{
        "gid": ugid,
        "gname": ufnm
  })
       .then(response=>{
        let rs=response.data.status;
        if(rs=="200")
        {
          alert(response.data.message);
          foodgroup();
          setUgid("");
        }
        else{
          alert(response.data.message);
          
        }
       })
    }

//----------------Delete ----------------------------
function delFoodg(id)
{
  //alert(id);
  axios.delete("http://localhost:8080/deletefoodg/"+id)
  .then(response=>{
    let delt=response.data.status;
    if(delt=="200")
    {
      alert(response.data.message);
      foodgroup();

    }
  })
}


    return(
        <>
        <Navbars/>
        <h1 style={{color:'darkgreen',textAlign:'center',margin:'20px'}}>Food-Group Items</h1>
        <Table responsive style={{textAlign:'center'}} striped hover variant="">
      <thead>
        <tr>
        <th style={{backgroundColor:'lightyellow'}}>Sr.No.</th>
          <th style={{backgroundColor:'lightyellow'}}>Group Id</th>
          <th style={{backgroundColor:'lightyellow'}}>Group Name</th>
          <th style={{backgroundColor:'lightyellow'}}>Event</th>
        </tr>
      </thead>
      <tbody>
      {data.map((item,index)=>{
            return(
        <tr>
          <td>{index + 1}</td>
          <td>{item.gid}</td>
          <td>{item.gname}</td>
          
          <td><Button variant="danger" onClick={()=>delFoodg(item.gid)}>Delete</Button> </td>
        </tr>) 
        })}   
      </tbody>
    </Table>

 {/*--------------------------Add  Data-----------------------------*/}

<Container style={{background:'lightblue',marginTop:'20px',borderTop:'4px solid gray',borderBottom:'3px solid gray'}}>
<Container style={{width:'500px',padding:'20px'}} className="text-center">
    <h2 style={{textAlign:"center",color:'brown'}}>Add FoodGroup </h2><br/>
    <FloatingLabel
        controlId="floatingInput"
        label="FoodGroup"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="FoodGroup type" onChange={foodType}/>
      </FloatingLabel>
      
      <Button style={{margin:'20px'}} onClick={AddFood}>Add Data</Button>
      </Container>
      </Container>

      {/*--------------------------Update Contail-----------------------------*/}

      <Container style={{background:'lightgreen',marginTop:'25px',borderTop:'4px solid green',borderBottom:'3px solid green'}}>
<Container style={{width:'500px',padding:'20px'}} className="text-center">
    <h2 style={{textAlign:"center",color:'brown'}}>Update FoodGroup </h2><br/>
    <FloatingLabel
        controlId="floatingInput"
        label="Group ID"
        className="mb-3"
      >
        <Form.Control type="number" placeholder="FoodGroup ID" onChange={foodUpdid} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="FoodGroup Type">
        <Form.Control type="text" placeholder="FoodGroup Type" onChange={foodUpdType}/>
      </FloatingLabel>
      <Button style={{margin:'20px'}} variant="success" onClick={foodUpd}>Update</Button>
      </Container>
      </Container>

        <Footers/>

        </>
    )
}