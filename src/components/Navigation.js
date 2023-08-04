import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IconButton, Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Navigation ()
{
    const count = useSelector((state) => state.Books.cartItems.length)
    const navigate = useNavigate();
    
    return(<>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Book Mania</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/Cart" className='nav-link'>Your Cart</Link>
            <Link to="/Cart" className='nav-link'>Rented Books</Link>
            <Link to="/books" className='nav-link'>Allot Book</Link>
          </Nav>
          <IconButton  size="large" onClick={()=>{navigate("/cart")}}>
            <Badge badgeContent={count} color="error">
              <ShoppingCart className='cart-icon-color'/>
            </Badge>  
          </IconButton>
        </Container>
      </Navbar>
    </>)
}




