import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
export default function Footers()
{
    return(
        <>
         <Card style={{background:'lightgray',marginTop:'50px'}}  responsive>
      <Card.Header></Card.Header>
      <Card.Body >
        <blockquote className="blockquote mb-0">
          <Navbar className="justify-content-center" responsive>
        <Nav className="justify-content-center" activeKey="" variant="underline">
        <Nav.Item>
          <Nav.Link eventKey="link-1" ><Link to="/home" style={{textDecoration:'none',color:'red',fontSize:'15px'}}>Home</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" style={{color:'red',fontSize:'15px'}}>Contact</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" style={{color:'red',fontSize:'15px'}}>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" style={{color:'red',fontSize:'15px'}} disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>
      </Navbar>
      <p className="text-center mt-4 mb-4">Food For Everyone and Everywere</p>
      
          <footer className="blockquote-footer" style={{color:'white',fontSize:'15px'}}>
            @copyright2024 <cite title="Source Title">Vishal Ingle</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
        </>
    )
}