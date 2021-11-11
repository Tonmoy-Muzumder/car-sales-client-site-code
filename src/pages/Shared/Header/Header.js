import * as React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
// import useFirebase from '../../../hooks/useFirebase';
import useAuth from '../../../hooks/useAuth';


const Header = () => {
 const {user, logout} = useAuth()


    return (

      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand href="#home" style={{fontSize: 40}}>Car<span style={{color: 'red'}}>X</span> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
      <Nav.Link as={HashLink} to="/home#home">HOME+</Nav.Link>
      <Nav.Link as={HashLink} to="/home#products">PRODUCTS+</Nav.Link>
      <Nav.Link as={HashLink} to="/home#reviews">REVIEWS+</Nav.Link>
      <Nav.Link as={HashLink} to="/explore">EXPLORE+</Nav.Link>

      {
        user?.email ?
          <Box>
            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
               <Button color="inherit">Dashboard</Button>
            </NavLink>
                <Button style={{ textDecoration: 'none', color: 'white' }} onClick={logout} color="inherit">Logout</Button>
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