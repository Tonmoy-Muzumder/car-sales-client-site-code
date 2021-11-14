import * as React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
 const {user, logout} = useAuth()


    return (

      <Navbar fixed="top" collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand as={HashLink} to="/home#home" style={{fontSize: 40}}>Car<span style={{color: 'red'}}>X</span> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
      <Nav.Link as={HashLink} to="/home#home">HOME+</Nav.Link>
      <Nav.Link as={HashLink} to="/home#products">PRODUCTS+</Nav.Link>
      <Nav.Link as={HashLink} to="/home#reviews">REVIEWS+</Nav.Link>
      <Nav.Link as={HashLink} to="/explore">EXPLORE+</Nav.Link>
      <Nav.Link as={HashLink} to="/about">ABOUT+</Nav.Link>

      {
        user?.email ?
          <Box>
        <NavDropdown  title="DASHBOARD" id="collasible-nav-dropdown">
        <NavDropdown.Item as={HashLink} to="/addproduct">Add Product</NavDropdown.Item>
        <NavDropdown.Item as={HashLink} to="/makeadmin">Make Admin</NavDropdown.Item>
        <NavDropdown.Item as={HashLink} to="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        {!user.name && <div className="d-flex">
         <p style={{marginTop: 5}}>USER: <br /> {user.email}</p>
    
      </div>
         }
        <Button style={{ textDecoration: 'none', color: 'black'  }} onClick={logout} color="inherit">Logout</Button>
      </NavDropdown>
               
              </Box>
               :
            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                <Button color="inherit">Login</Button>
            </NavLink>
      }
     
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;