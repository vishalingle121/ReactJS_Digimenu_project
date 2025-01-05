import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

export default function Navbars()
{
    return (
        <>
        <Navbar   bg='info' className="justify-content-center" responsive style={{fontSize:'18px'}}>
        <Nav  variant="underline" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link  eventKey="link-1" ><Link to="/home" style={{textDecoration:'none',color:'black'}}>Home</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-5"><Link to="/menucard" style={{textDecoration:'none',color:'black'}}>Menucard</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2"><Link to="/menu" style={{textDecoration:'none',color:'black'}}>Menu</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-4"><Link to="/foodg" style={{textDecoration:'none',color:'black'}}>FoodGroup</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3"><Link to="/qty" style={{textDecoration:'none',color:'black'}}>Quantity</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item  >
        <Nav.Link eventKey="disabled"  ><Link to="/" style={{textDecoration:'none',color:'red',fontStyle:'italic'}}> Log-out</Link>
        
        </Nav.Link>
      </Nav.Item>


      
    </Nav>
   
        
    </Navbar>
        </>
    )
}