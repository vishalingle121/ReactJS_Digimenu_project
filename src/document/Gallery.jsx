import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image1 from '../assets/food3.jpg';
import Image2 from '../assets/food1.jpg';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
export default function Gallery()
{
    
    return(
        <>
        <br/>
         <Container>

      <Row>
       
       
        <Col xs={6} md={6}><h3 style={{color:'darkred',fontStyle:'italic'}}>Indian Nashta</h3>
        
          <Image src={Image1} alt="Food Image" thumbnail />
        </Col>
        <Col xs={6} md={6}><h3 style={{color:'darkred',fontStyle:'italic'}}>Indian Dhaba Style</h3>
          <Image src={Image2} alt="Food Image" thumbnail />
        </Col>
        <Col xs={6} md={6}><h3 style={{color:'darkred',fontStyle:'italic'}}>Indian Dhaba Style</h3>
          <Image src={Image2} alt="Food Image" thumbnail />
        </Col>
        <Col xs={6} md={6}><h3 style={{color:'darkred',fontStyle:'italic'}}>Indian Nashta</h3>
          <Image src={Image1} alt="Food Image" thumbnail />
        </Col>
      </Row>
    </Container>
        </>
    )
}