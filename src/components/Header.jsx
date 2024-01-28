import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import  "./Header.css";

export default function Header() {
  return (
    <Navbar className="custom-navbar"  expand="lg">
      <Nav className="ml-auto">
        <Image
          href="#home"
          src="/src/assets/movieproject.png"
          height="90"
          alt=""
          loading="lazy"
          roundedCircle
        />
      </Nav>
      <Nav className="mr-auto" >
        <Nav.Link style={{ color:"burlywood", margin:10}} href="#home">Home</Nav.Link>
        <Nav.Link style={{ color:"burlywood", margin:10}} href="#ultimoslanzamientos">Últimos Lanzamientos</Nav.Link>
        <Nav.Link style={{ color:"burlywood", margin:10}} href="#populares">Populares</Nav.Link>
        <Nav.Link style={{ color:"burlywood", margin:10}} href="#populares">Buscar</Nav.Link>
      </Nav>
    </Navbar>
  );
}
