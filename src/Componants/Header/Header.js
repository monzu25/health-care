
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import './Header.css'



const Header = () => {

    return (
        <div>
            <div className="social-nav">
                <ul className="hc-team-social">
                    <li>
                        <a href="#;"><i className="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                        <a href="#;"><i className="fab fa-twitter"></i></a>
                    </li>
                    <li>
                        <a href="#;"><i className="fas fa-phone-alt"></i></a>
                    </li>
                </ul>
            </div>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Health Care</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="me-auto ms-5 justify-content-center text-white">
                                <Nav.Link className="text-white" to="#home">Home</Nav.Link>
                                <Nav.Link className="text-white" to="#services">Services</Nav.Link>
                                <Nav.Link className="text-white" to="#profile">Profile</Nav.Link>
                                <Nav.Link className="text-white" to="#contact">Contact</Nav.Link>
                                <Nav.Link className="text-white" to="#blog">Blog</Nav.Link>


                            </Nav>
                            <Nav>
                                <Navbar.Collapse className="justify-content-end">
                                    <Navbar.Text>
                                        Signed in as: <a href="#login">Mark Otto</a>
                                    </Navbar.Text>
                                </Navbar.Collapse>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar></div>
        </div>


    );
};

export default Header;