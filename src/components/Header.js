import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";
import {Link} from "react-router-dom";
import logo from '../assets/images/Logo.png';
import { Button } from 'react-bootstrap';


function Header() {
    return (
        <Navbar expand="lg" className="bg-dark text-white">
            <Container>
            <img height={60.84} className="d-block w-152" src={logo} alt='imagec' />
                <Navbar.Collapse id="basic-navbar-nav justify-content-center">
                    <Nav className="me-auto ms-4">
                        <Nav.Link className={"text-white ms-5"}> <Link style={{textDecoration: 'none'}} className={"text-white"} to={"/Projects"}>WebMaker</Link></Nav.Link>
                        <Nav.Link className={"text-white ms-4"} href="#link">White Paper</Nav.Link>
                        <Nav.Link className={"text-white ms-4"} href="#link">Services</Nav.Link>
                        <Nav.Link className={"text-white ms-4"}> <Link style={{textDecoration: 'none'}} className={"text-white"} to={"/products"}>Tool </Link></Nav.Link>
                        <Nav.Link className={"text-white ms-4"}> <Link style={{textDecoration: 'none'}} className={"text-white"} to={"/Contact"}> Contact Us </Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button variant="outline-primary">Start for free</Button>{' '}
            </Container>
        </Navbar>
    );
}

export default Header;
