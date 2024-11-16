import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import Product from './Prodcut';


function NavPannel(){
  const cartProducts=useSelector(state=>state.cart);
    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">Redux</Navbar.Brand>
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll>
                <Nav.Link to="/" as={Link}>Products</Nav.Link>
               </Nav>
             <Navbar.Collapse>
                <Navbar.Text>
                <Nav.Link to="/cart" as={Link}>my cart{cartProducts.length}</Nav.Link>
                </Navbar.Text>
             </Navbar.Collapse>
             <Product/>
    
          </Container>
        </Navbar>
        </>
      );
}
export default NavPannel;