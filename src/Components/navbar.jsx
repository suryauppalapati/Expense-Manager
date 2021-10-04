import React from 'react'
import { Navbar, Nav, NavDropdown  } from 'react-bootstrap'
import { FaUserAlt } from 'react-icons/fa'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import '../Styles/navbar.css'
function Navigationbar() {
    return (
        <div>
        <Navbar style={{backgroundColor:'#091130', marginBottom:'15px'}}>
            
            <Navbar.Brand href="#home" className="logo-title" style={{color:'white'}}>
                Expensor
            </Navbar.Brand>
            <Nav className="me-auto" style={{color: 'white', size: 'lg', marginLeft:'1000px'}}>
            <NavDropdown title="Account" style={{color: 'white'}} id="navbarScrollingDropdown">
            <NavDropdown.Item href="#">My Groups</NavDropdown.Item>
            <NavDropdown.Item href="#">My Profile</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="#">
             Logout
            </NavDropdown.Item>
            </NavDropdown>
            <div className="dropdown-icons" style={{cursor: 'pointer'}}>
            <FaUserAlt style={{color: 'white', size: 'lg', marginTop:'10px'}}/>
            <MdOutlineArrowDropDown style={{color: 'white', size: 'lg', marginTop:'10px'}}/>
            </div>
            </Nav>
            
        </Navbar>
        </div>
    )
}

export default Navigationbar
