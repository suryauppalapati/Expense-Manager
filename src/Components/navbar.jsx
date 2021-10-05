import React from 'react'
import { Navbar, Nav, NavDropdown  } from 'react-bootstrap'
import { FaUserAlt } from 'react-icons/fa'
import { BsFillBellFill } from 'react-icons/bs'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { MdOutlineMenuBook } from 'react-icons/md'
import '../Styles/navbar.css'
function Navigationbar() {
    return (
        <div>
        <Navbar style={{backgroundColor:'#091130', marginBottom:'15px'}}>
            <MdOutlineMenuBook style={{color:'white', marginLeft:'20px'}} size={25}/>
            <Navbar.Brand href="#home" className="logo-title" style={{color:'white'}}>
                Expense Book
            </Navbar.Brand>
            <Nav className="me-auto" style={{color: 'white', size: 'lg', marginLeft:'970px'}}>
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
            <BsFillBellFill style={{color: 'white', size: 'lg', marginTop:'10px', marginLeft:'5px'}}/>
            </div>
            </Nav>
            
        </Navbar>
        </div>
    )
}

export default Navigationbar
