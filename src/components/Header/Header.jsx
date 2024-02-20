import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import  "./Header.css";
import imageHeader from "../../assets/logo.png"

export default function Header() {
  return (
    <Navbar className="custom-navbar"  expand="lg">
      <Nav className="ml-auto">
        <img
          href="#home"
          src={imageHeader}
          height="90"
          alt=""
          loading="lazy"
          
        />
        <h5 className="nav-title">Movie Project</h5>
      </Nav>
      <Nav className="mr-auto" >
        <Nav.Link style={{ color:"burlywood", margin:10}} href="/">Home</Nav.Link>
        <Nav.Link style={{ color:"burlywood", margin:10}} href="/new-movies">Últimos Lanzamientos</Nav.Link>
        <Nav.Link style={{ color:"burlywood", margin:10}} href="/popular">Populares</Nav.Link>
        <Nav.Link style={{ color:"burlywood", margin:10}} href="/favorites">Mis Favoritas</Nav.Link>
        <Nav.Link style={{ color:"burlywood", margin:10}} href="/search">Buscar</Nav.Link>
      </Nav>
    </Navbar>
  );
}
