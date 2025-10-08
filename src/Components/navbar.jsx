import "./navbar.css";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

export default function AppNavbar(){

    return ( 
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="border-bottom" aria-label="Main">
        <Container>
            <Navbar.Brand as={Link} to="/" >Acople TCG</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="mainNav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/Blog">Blog</Nav.Link>
                    <Nav.Link as={Link} to="/detalle-carta">Detalle Carta</Nav.Link>
                    <Nav.Link as={Link} to="/detalle-compra">Detalle Compra</Nav.Link>
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/magic-singles">Magic Singles</Nav.Link>
                    <Nav.Link as={Link} to="/pokemon-singles">Pokemon Singles</Nav.Link>
                    <Nav.Link as={Link} to="/yugioh-singles">Yu-Gi-Oh! Singles</Nav.Link>
                    <Nav.Link as={Link} to="/productos-acople">Productos</Nav.Link>
                    <Nav.Link as={Link} to="/Perfil">Perfil</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        
    )
}