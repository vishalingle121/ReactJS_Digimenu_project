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

    const [data1,setData1]=useState([]);
    const [data2,setData2]=useState([]);

    useEffect(()=>{
        menu();
        dropdownG();
        dropdownQ()
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
          setGid("");
          setNm("");
          setQid("");
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
//------------------------------------delete menu---------------------------
function delMenu(id)
{
  const isConfirmed = window.confirm("Are you sure you want to delete this item?");
        if(isConfirmed)
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
else{
  // If user clicked "No" (Cancel)
  console.log("Deletion canceled by the user.");
}
}
//-----------------------------------Call Api------------------------------------
function dropdownG()
  {
    axios.get("http://localhost:8080/foodgroup")
    .then(response=>{
      console.log(response.data);
      setData1(response.data.foodglist);
      //setData(response.data.)
      
    })
  }
 const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    const selectedValue = event.target.value; 
    setSelectedOption(selectedValue); 
    console.log('Selected value:', selectedValue); 
    setGid(selectedValue);
  };
  //-------------------update select--------------------------------------------
  function dropdownQ()
  {
    axios.get("http://localhost:8080/qtymast")
    .then(response=>{
      console.log(response.data);
      setData2(response.data.qtymastlst);
      //setData(response.data.)
      
    })
  }
  
  
  const [selectedOption2, setSelectedOption2] = useState("");

  const handleChange2 = (event) => {
    const selectedValue2 = event.target.value; 
    setSelectedOption2(selectedValue2); 
    console.log('Selected value:', selectedValue2); 
    setQid(selectedValue2);
  };
//----------------------------------------------------------------update on-----------
function  updateMenuClick(cmid,cmnm,cprice,cgid,cqid)
{
  alert(cmid+" "+cmnm+" "+cprice+" "+cgid+" "+cqid);
  setUmid(cmid);
  setUnm(cmnm);
  setUprice(cprice);
  setUgid(cgid);
  setUqid(cqid);
}
//---------------------------------------------------------------------------------------------//
  
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
          <td><Button variant="success" onClick={()=>updateMenuClick(item.mid,item.mname,item.mprice,item.gid,item.qid)}>Update</Button> </td>
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
      
      <div className="mb-3">
      <span style={{marginRight:'10px',fontSize:'17px'}}>Select Group</span>
       <select value={selectedOption} onChange={handleChange} style={{width:'200px',height:'40px'}}>
      <option value={""} >Select</option>
      {data1.map((item)=>{
            return(
        <option value={item.gid}>{item.gname}</option>
       
      ) 
    })}
      </select>
</div>
     
<div className="mb-3">
      <span style={{marginRight:'5px',fontSize:'17px'}}>Select Quantity</span>
       <select value={selectedOption2} onChange={handleChange2} style={{width:'200px',height:'40px'}}>
      <option value={""} >Select</option>
      {data2.map((item)=>{
            return(
        <option value={item.qid}>{item.qtytype}</option>
       
      ) 
    })}
      </select>
</div>
      <Button style={{margin:'20px'}} variant="primary" onClick={menuAdd}>Save Data</Button>
      </Container>
      </Container>

    {/*---------------------------Update MEnu------------------------------*/}
    <Container style={{background:'lightgray',marginTop:'25px',borderTop:'4px solid gray',borderBottom:'3px solid gray' }}>
<Container style={{width:'500px',padding:'20px'}} className="text-center">
    <h2 style={{textAlign:"center",color:'green'}}>Update Menu </h2><br/>
    <FloatingLabel
        controlId="floatingInput"
        label="Menu Id"
        className="mb-3"
      >
        <Form.Control type="number" disabled value={umid} placeholder="Menu Id" onChange={updMid}  />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Menu Name"
        className="mb-3"
      >
        <Form.Control type="text" value={unm} placeholder="Menu Name" onChange={updName} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Menu Price"className="mb-3">
        <Form.Control type="text" value={uprice} placeholder="Menu Price" onChange={updPrice} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Group Id"className="mb-3">
        <Form.Control type="number"  value={ugid} placeholder="FoodGroup Type" onChange={updGid}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput" label="Quantity Id"className="mb-3">
        <Form.Control type="number" value={uqid} placeholder="FoodGroup Type" onChange={updQid}/>
      </FloatingLabel>
      <Button style={{margin:'20px'}} variant="success" onClick={updateMenu} >Update</Button>
      </Container>
      </Container>
        <Footers/>
        </>
    )
}