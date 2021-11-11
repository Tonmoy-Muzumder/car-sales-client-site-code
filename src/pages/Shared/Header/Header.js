import * as React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Navbar, Container, Nav } from 'react-bootstrap';


const Header = () => {


    return (

      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
  <Container>
  <Navbar.Brand href="#home" style={{fontSize: 40}}>Car<span style={{color: 'red'}}>X</span> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
      <Nav.Link as={HashLink} to="/home#home">Home+</Nav.Link>
      <Nav.Link as={HashLink} to="/home#products">Products+</Nav.Link>
      <Nav.Link as={HashLink} to="/home#reviews">Reviews+</Nav.Link>
      <Nav.Link as={HashLink} to="/explore">Explore+</Nav.Link>
     
    </Nav>
    <Nav>
      <Nav.Link as={HashLink} to="/login">Login</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    //   <Navbar bg="primary" variant="dark">
    //   <Container>
    //   <Navbar.Brand href="#home" style={{fontSize: 40}}>Car<span style={{color: 'red'}}>X</span> </Navbar.Brand>
    //   <Nav>
    //     <Nav.Link href="/home#home">HOME</Nav.Link>
    //     <Nav.Link href="/home#products">PRODUCTS</Nav.Link>
    //     <Nav.Link href="/home#reviews">REVIEWS</Nav.Link>
    //     <Nav.Link href="/explore">EXPLORE</Nav.Link>
    //     <Nav.Link href="/login">LOGIN</Nav.Link>
    //   </Nav>
    //   </Container>
    // </Navbar>
    );
};

export default Header;