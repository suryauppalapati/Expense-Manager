import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Navbar, Nav, NavDropdown, Modal, Alert, Button } from 'react-bootstrap'
import { FaUserAlt } from 'react-icons/fa'
import { BsFillBellFill } from 'react-icons/bs'
import { MdOutlineMenuBook } from 'react-icons/md'
import '../../Styles/navbar.css'

function Navigationbar() {
    //initialising states for Notifications
    const [notifications, setNotifications] = useState([])

    //Get Notification data
    useEffect(() => {
        axios.get('http://localhost:8001/get_notification')
            .then(res => {
                console.log(res);
                setNotifications(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    //Joining SettleNotifications and RequestNotifications
    let settled =  notifications.settled_notification;
    let requested = notifications.request_notification;

    // // concat settled and requested
    const allNotifications = settled + requested;

    //Notification Modal states
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
            <Nav className="me-auto" style={{color: 'white', size: 'lg', marginLeft:'870px'}}>
            <div className="username">Joseph Morgan</div>
            <NavDropdown   title={<FaUserAlt style={{color: 'white', size: 'lg', marginTop:'-5px'}} />} className="dropdownTitle" id="navbarScrollingDropdown" >
            <NavDropdown.Item href="#">My Groups</NavDropdown.Item>
            <NavDropdown.Item href="#">My Profile</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="#">
             Logout
            </NavDropdown.Item>
            </NavDropdown>
            <div className="dropdown-icons" style={{cursor: 'pointer'}}>
            <BsFillBellFill onClick={handleShow} size={17} style={{color: 'white', marginTop:'12px', marginLeft:'-2px'}}/>
            </div>
            </Nav>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="modal-title">Reminders and Notifications</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                        <div> {/*--Mapping Notification data--*/}
                        {allNotifications && allNotifications.map(reminder => (
                            <Alert variant='primary' className="alertMessage" style={{textAlign: 'center'}}>
                            {reminder}
                            </Alert>
                        ))}  
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
