import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";

export default function Header() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Nav className="ml-auto">
          <Image href="#home" 
          src="/src/assets/movieproject.png" 
            height='80'
            alt=''
            loading='lazy'
          roundedCircle />
        </Nav>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#ultimoslanzamientos">Últimos Lanzamientos</Nav.Link>
          <Nav.Link href="#populares">Populares</Nav.Link>
          <Nav.Link href="#populares">Buscar</Nav.Link>
          </Nav>
    </Navbar>
  );
}
