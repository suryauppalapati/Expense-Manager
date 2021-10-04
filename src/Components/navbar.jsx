import React from 'react'
import { Navbar, Nav, NavDropdown  } from 'react-bootstrap'
import { BiUserCircle } from 'react-icons/bi'
import '../Styles/navbar.css'
function Navigationbar() {
    return (
        <div>
        <Navbar bg="primary" variant="dark">
            
            <Navbar.Brand href="#home" style={{marginLeft : '25px'}}>Expensor</Navbar.Brand>
            <BiUserCircle style={{color: 'white', size: "15rems"}}/>
            <Nav className="me-auto">
            <NavDropdown title="Account" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#">My Groups</NavDropdown.Item>
            <NavDropdown.Item href="#">My Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">
             Logout
            </NavDropdown.Item>
            </NavDropdown>
            </Nav>
            
        </Navbar>
        </div>
    )
}

export default Navigationbar
