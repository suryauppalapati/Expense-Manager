import React, {useState} from 'react'
import '../../Styles/MyGroups.css'
import Navigationbar from '../Navbar/navbar'
import groupAvatar from '../../Assets/group-avatar.jpg'
import {Multiselect}  from 'multiselect-react-dropdown'
import {Card, Container, Row, Col, Button} from 'react-bootstrap'
import {useFormik} from 'formik'

const initialValues = {
    groupname : '',
    addMembers : ''
}

const onSubmit = (values) => {
    console.log(values);
}

const validate = (values)=> {
    let errors = {};
    
    if(!values.groupname){
        errors.groupname = 'Groupname required'
    }else if(values.groupname.length < 4){
        errors.groupname = 'Enter a valid groupname'
    }

    if(!values.addMembers.length<2){
        errors.addMembers = 'Group should consist of minimum 2 members'
    }
    return errors
}

function MyGroups() {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    //Assume this as users from our database
    const userData = [
        {userName : "Ayush", id: 1},
        {userName : "Anuja", id: 2},
        {userName : "Surya", id: 3},
        {userName : "Harshal", id: 4},
        {userName : "Rohit", id: 5},
    ]
    const [options] = useState(userData)

    return (
        <> 
            <Navigationbar/>
            <div className="groupsBody"> {/*Main-Div*/}
                <div className="groupsList"> {/*GroupsList*/}
                    <h3 className="page-header">Create and manage groups</h3>
                    <hr style={{width:'83%',height: '5px', margin: '5px 0px 0px 90px', color: '#481F90'}}></hr>
                    <Card style={{ width: 'rem', height: '20rem' }} className=" grp-card shadow p-3 mb-5 bg-white rounded">
                    <Card.Header className="Card-Header">Manage Groups</Card.Header>
                        <Card.Body className="grouplist-cardbody">
                            <Container className="groupList-Container"> {/*Container-Start*/}
                            <Row className="row">
                                <Col className="groupTitle">Fantastic Four</Col>
                                <Col className="btn">
                                <Button className="leaveGroup-btn"
                                        style={{backgroundColor:"#091130" }} 
                                        variant="secondary" 
                                        size="sm">
                                        Leave
                                </Button>
                                </Col>
                            </Row>

                            <Row className="row">
                                <Col className="groupTitle">Newyear 2021</Col>
                                <Col className="btn">
                                <Button className="leaveGroup-btn"
                                        style={{backgroundColor:"#091130" }} 
                                        variant="secondary" 
                                        size="sm">
                                        Leave
                                </Button>
                                </Col>
                            </Row>

                            <Row className="row">
                                <Col className="groupTitle">Robb's Bday</Col>
                                <Col className="btn">
                                <Button className="leaveGroup-btn"
                                        style={{backgroundColor:"#091130" }} 
                                        variant="secondary" 
                                        size="sm">
                                        Leave
                                </Button>
                                </Col>
                            </Row>

                            <Row className="row">
                                <Col className="groupTitle">Mock Project</Col>
                                <Col className="btn">
                                <Button className="leaveGroup-btn"
                                        style={{backgroundColor:"#091130" }} 
                                        variant="secondary" 
                                        size="sm">
                                        Leave
                                </Button>
                                </Col>
                            </Row>
                            </Container> {/*--Container-End--*/}
                            

                        </Card.Body>
                    </Card>
                </div> {/*--GroupsList-Ends--*/}
                    
                <div className="createGroup"> {/*createGroup-div*/}
                    <div className="createGroup-card-div">
                    <Card style={{ width: '40rem', height: '25rem' }} className=" create-grp-card shadow p-3 mb-5 bg-white rounded">
                        <Card.Header className="Card-Header">Create new group</Card.Header>
                        <Card.Body>
                            <div className="creategrp-cardbody">
                                <div className="group-picture">
                                    <img src={groupAvatar} className="avatar" alt="avatar"/>
                                </div>
                                <div className="newgrp-block">
                                    <Container>
                                            <form onSubmit={formik.handleSubmit}>
                                            <label className="input-label" htmlFor="groupname">Group Name</label><br/>
                                            <input 
                                            type="text" 
                                            id="groupname" 
                                            name="groupname" 
                                            className="inputField" 
                                            onChange={formik.handleChange} 
                                            value={formik.values.groupname}  
                                            onBlur={formik.handleBlur} 
                                            aria-required/>
                                            {formik.errors.groupname && formik.touched.groupname  ? <div className="error-alert">{formik.errors.groupname}</div> : null }

                                            <div className="Share-with">
                                            <label class="input-label" htmlFor="addMembers">Add Members</label><br></br>
                                            <Multiselect 
                                            className="inputField addField" 
                                            options={options} 
                                            displayValue="userName" 
                                            id="addMembers" 
                                            onChange={formik.handleChange} 
                                            value={formik.values.addMembers}  
                                            onBlur={formik.handleBlur} 
                                            name="addMembers" />
                                            </div>

                                            <Button className="Create-grp-btn"
                                                type="submit"
                                                style={{backgroundColor:"#091130" }} 
                                                variant="secondary" 
                                                size="sm">
                                                Create group
                                        </Button>
                                        </form>
                                    </Container>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    </div>
                    


                </div> {/*--createGroup-div-- onChange={formik.handleChange} value={formik.values.selectMembers}*/}
            </div>{/*--Main-Div--*/}

        </>
        
    )
}

export default MyGroups
