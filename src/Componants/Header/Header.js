
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../Firebase/useFirebase';

import './Header.css'



const Header = () => {


    const { user, logOut } = useFirebase();

    return (
        <div>
            <div className="social-nav bg-success">
                <div className="mx-5 p-1 ">
                    <a href="" className="text-white me-5">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="" className="text-white me-4">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" className="text-white me-4">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="" className="text-white me-4">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="" className="text-white me-4">
                        <i className="fab fa-linkedin"></i>
                    </a>

                </div>
            </div>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                    <Container>
                        <Navbar.Brand as={Link} className="fw-bolder " to="/">Health Care</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav" >
                            <Nav className="me-auto ms-5 justify-content-center text-white">
                                <Nav.Link as={Link} className="text-white" to="/">Home</Nav.Link>
                                <Nav.Link as={Link} className="text-white" to="/services">Services</Nav.Link>
                                <Nav.Link as={Link} className="text-white" to="/profile">Profile</Nav.Link>
                                <Nav.Link as={Link} className="text-white" to="/contact">Contact</Nav.Link>
                                <Nav.Link as={Link} className="text-white" to="/blog">Blog</Nav.Link>


                            </Nav>
                            <Nav>
                                <Navbar.Collapse className="justify-content-end">

                                    <Nav.Link as={Link} to="/signup"> Signup</Nav.Link>

                                    {user?.email ?
                                        <Button onClick={logOut} variant="light">Logout</Button> :
                                        <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                                    <Navbar.Text>
                                        <a href="#login">{user?.displayName}</a>
                                    </Navbar.Text>


                                </Navbar.Collapse>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>


    );
};

export default Header;