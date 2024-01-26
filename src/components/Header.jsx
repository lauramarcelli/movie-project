import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';


export default function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Movie Project</Navbar.Brand>
        <Nav className="me-auto">
   
          <Image src="/src/assets/movieproject.png" roundedCircle />
        
          
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#ultimoslanzamientos">Últimos Lanzamientos</Nav.Link>
          <Nav.Link href="#populares">Populares</Nav.Link>
          <Nav.Link href="#populares">Buscar</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
