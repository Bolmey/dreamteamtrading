import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavbarSection() {
    return (
        <div className='NavbarContainer'>
            <Navbar collapseOnSelect expand="lg" className="navbarColor">
                <Container>
                    <Navbar className='navName' href="#home">Dream Team Trading</Navbar>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link href="#deets">Twitter</Nav.Link>
                            <Nav.Link eventKey={2} href="https://www.instagram.com/dream_team_trading/">
                                Instagram
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
