import React, {useState} from 'react'
import { Navbar, Nav, NavDropdown, Modal, Alert, Button } from 'react-bootstrap'
import { FaUserAlt } from 'react-icons/fa'
import { BsFillBellFill } from 'react-icons/bs'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { MdOutlineMenuBook } from 'react-icons/md'
import '../../Styles/navbar.css'

function Navigationbar() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
        <Navbar style={{backgroundColor:'#091130', marginBottom:'15px'}}>
            <MdOutlineMenuBook style={{color:'white', marginLeft:'20px'}} size={25}/>
            <Navbar.Brand href="#home" className="logo-title" style={{color:'white'}}>
                Expense Book
            </Navbar.Brand>
            <Nav className="me-auto" style={{color: 'white', size: 'lg', marginLeft:'970px'}}>
            <NavDropdown style={{color: '#fff'}} title="Steve Tyson" className="dropdownTitle" id="navbarScrollingDropdown">
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
            <BsFillBellFill onClick={handleShow} style={{color: 'white', size: 'lg', marginTop:'10px', marginLeft:'5px'}}/>
            </div>
            </Nav>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="modal-title">Reminders and Notifications</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                        <div>
                        <Alert variant='primary' className="alertMessage" style={{textAlign: 'center'}}>
                            John Smith sent a request to settle his Rs.150
                        </Alert>
                        <Alert variant='primary' className="alertMessage" style={{textAlign: 'center'}}>
                            Mike shared a new new expense
                        </Alert>
                        </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" style={{backgroundColor:'#091130'}} className="btn-block" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>







        </Navbar>
        </div>
    )
}

export default Navigationbar
