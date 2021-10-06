import React, { useState } from 'react'
import '../../Styles/MyProfile.css'
import Navigationbar from '../navbar'
import Avatar from '../../Assets/Avatar.png'
import {Card, Button, Row, Col, Container} from 'react-bootstrap'
import {AiFillCamera} from 'react-icons/ai'

function MyProfile() {
 const [edit, setEdit] = useState(true)

const setEditHandler = () => setEdit(false)
const editHandler = () => edit(true)

    return (
        <>
            <Navigationbar/>
            <div className="myProfile-Body">{/*Container*/}
    
                <div className="displayPicture">{/*user Avatar block starts*/}
                    <div className="userName">Joseph Morgan</div>
                        <img src={Avatar} className="avatar" alt="avatar"/>
                        <div className="btn-controls">
                            <label className="changeAvatar-btn"
                                ><AiFillCamera className="icon"/>
                                <input type="file"/>
                            </label>
                            <Button className="uploadAvatar-btn"
                                style={{backgroundColor:"#091130" }} 
                                variant="secondary" 
                                size="md">
                                Upload
                            </Button>{' '}
                        </div>{/*--user Avatar block ends--*/}
                 
                    </div>

                <div className="editProfile">{/*User Profile block starts*/}
                    <Card style={{ width: '35rem', height: '30rem' }} className="card-body shadow p-3 mb-5 bg-white rounded">
                        <div>
                            <Card.Body className="myDetails-card" style={{float: 'center'}}>
                                <Container style={{marginTop:'-50px'}}>
                                <Row className="row">
                                    <Col className="input-label">Name</Col>
                                    <Col>
                                        <input type="text" className="inputField" disabled={edit}></input>
                                    </Col>
                                </Row>

                                <Row className="row">
                                    <Col className="input-label">Email</Col>
                                    <Col>
                                        <input type="email" className="inputField" disabled={edit}></input>
                                    </Col>
                                </Row>

                                <Row className="row">
                                    <Col className="input-label">Password</Col>
                                    <Col>
                                        <input type="password" className="inputField" disabled={edit}></input>
                                    </Col>
                                </Row>

                                <Row className="row">
                                    <Col className="input-label">Currency</Col>
                                    <Col>
                                        <input type="text" className="inputField" disabled></input>
                                    </Col>
                                </Row>

                                <Row className="row">
                                    <Col className="input-label">Language</Col>
                                    <Col>
                                        <input type="text" className="inputField" disabled></input>
                                    </Col>
                                </Row>

                                <Row className="row">
                                    <Col>
                                    <Button className="updateProfile-btn"
                                        onClick={setEditHandler}
                                        style={{backgroundColor:"#091130" }} 
                                        variant="secondary" 
                                        size="sm">
                                        Update profile
                                    </Button>{' '}

                                    <Button className="saveChanges-btn"
                                        onClick={editHandler}
                                        style={{backgroundColor:"#091130" }} 
                                        variant="secondary" 
                                        size="sm">
                                        Save Changes
                                    </Button>{' '}
                                    </Col>
                                </Row>
                                </Container>
                            </Card.Body>
                        </div>
                    </Card>
                </div>{/*--User Profile block starts--*/}
            </div>{/*--Container ends--*/}
        </>
    )
}

export default MyProfile
