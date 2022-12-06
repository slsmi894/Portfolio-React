function Nav() {
    const linkStyle = { padding: '1px', color: '#fffdf7', hover: 'background: pink', transitionDuration: '0.5s'}
    const h1Style = { fontSize: '5em', marginLeft: '20px' }
    const fontWhite = { color: 'rgb(255,253,247)', fontFamily: 'Times Roman' }
 

    return (


        <nav style={fontWhite}>

            <section style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                lineHeight: '.5',

            }}>
                <h1 style={h1Style}>Sandy Smith </h1>

                <div style={linkStyle}>
                    <a href="#home">Home</a>
                </div>
                <div style={linkStyle}>
                    <a href="#about">About</a>
                </div>
                <div style={linkStyle}>
                    <a href="#work">Work</a>
                </div>
                <div style={linkStyle}>
                    <a href="#contact">Contact</a>
                </div>
                <div style={{
                    marginRight: '40px', linkStyle
                }}>
                    <a href="../images/resume.pdf" target="_blank">Resume</a>
                </div>


            </section>

            <p style={{ fontSize: '2em', fontFamily: 'Times Roman', }} >React Portfolio</p>



        </nav>
    )

}

export default Nav;
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Link  from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import hat from '../../assets/images/bw_profile.jpeg';
    // Collapse isOpen State
    // const [isOpen, setIsOpen] = React.useState(false);

function Navigation({ currentPage, handlePageChange }) {
    const opacStyle = { boxShadow: '0 0 50px 50px #ffffff inset', opacity: '0.4', borderColor: 'rgb(248,248,255, 0.1)', borderRadius: '10%', minHeight: '600px', display: 'flex', justifyContent: 'flex-end', marginLeft: '50px' }



    return (
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#ffffff', textShadow: '2px 2px black' }} variant="dark">
            <Container>

                <Navbar.Brand href="#home"><h1 style={{ fontSize: "4em", fontFamily: 'Times Roman', textShadow: '2px 2px black' }}>Sandy Smith</h1></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" onClick={() => { setIsOpen(!isOpen) }} />
                <Navbar.Collapse id="responsive-navbar-nav" isOpen={isOpen} >
                    <Nav className="me-auto">
                        <Nav.Link href="./home" >Home</Nav.Link>
                        <Nav.Link href="./about" >About</Nav.Link>
                        <Nav.Link href="./contact" >Contact</Nav.Link>
                        <NavDropdown title="Work" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action/3.1">HTML</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                CSS/Boostrap
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Javascript/JQuery</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                React/Nodejs/Express
                            </NavDropdown.Item>
                        </NavDropdown>
                        <img alt='sandy with hat' src={hat} style={opacStyle} />


                        <Nav.Link href="../../assets/resume.pdf" target="__blank">Resume</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;