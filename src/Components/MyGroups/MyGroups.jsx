import React, { useState, useEffect } from 'react'
import '../../Styles/MyGroups.css'
import Navigationbar from '../Navbar/navbar'
import groupAvatar from '../../Assets/group-avatar.jpg'
import { Multiselect } from 'multiselect-react-dropdown'
import { Card, Container, Row, Alert, Button } from 'react-bootstrap'
import { useFormik } from 'formik'
import axios from 'axios';

const initialValues = {
    groupname: '',
    addMembers: []
}

//SubmitHandler


//ValidationRules
const validate = (values) => {
    let errors = {};

    if (!values.groupname) {
        errors.groupname = 'Groupname required'
    } else if (values.groupname.length < 4) {
        errors.groupname = 'Enter a valid groupname'
    }
    return errors
}

function MyGroups() {
    const userData = [];
    const [myGroups, setMyGroups] = useState([]);
    const [currentUserName, setUserName] = useState();

    useEffect(() => {
        axios.post('http://localhost:8001/current_user_detail', { "userId": "615afeabd20a2cf1a41e37f2" })
            .then(res => {
                console.log(res);
                setUserName(res.data.data.name)
            })
            .catch(err => {
                console.log(err);
            })
        axios.post('http://localhost:8001/my_groups', { "userId": "615afeabd20a2cf1a41e37f2" })
            .then(async (res) => {
                //console.log(res.data.data);
                await setMyGroups(res.data.data)
                //console.log(myGroups)
            })
            .catch(err => {
                console.log(err);
            });
        axios.post('http://localhost:8001/all_users', { "userId": "615afeabd20a2cf1a41e37f2" })
            .then(async (res) => {
                //console.log(res.data.data);
                //await setAllUsers(res.data.data)
                var countVar = 0
                res.data.data.forEach(i => {
                    userData.push({ userName: i, id: countVar++ })
                })
                //console.log(allUsersList)
            })
            .catch(err => {
                console.log(err);
            }) 
    }, [])

    const [options] = useState(userData)
    const onSubmit = (values) => {
        //console.log(values);
        //alert('Details saved successfully!')
        var users = []
        users.push(currentUserName)
        if (values.addMembers.length > 0) {
            values.addMembers[0].forEach(ele => {
                users.push(ele.userName)
            })
            //console.log(users)
        }
        axios.post('http://localhost:8001/create_group', {
            "group_name": values.groupname,
            "users": users
        })
            .then(res => {
                //console.log(res.data)
                if (res.data.success) {
                    alert("Created group")
                }
                else {
                    alert(res.data.message)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })
    //Add members handler
    const handleAddmembers = (members) => {
        initialValues.addMembers.push(members);
    }

    //console.log(formik.values);

    return (
        <>
            <Navigationbar />
            <div className="groupsBody"> {/*Main-Div*/}
                <div className="groupsList"> {/*GroupsList*/}
                    <h3 className="page-header">Create and manage groups</h3>
                    <hr style={{ width: '83%', height: '5px', margin: '5px 0px 0px 90px', color: '#481F90' }}></hr>
                    <Card style={{ width: 'rem', height: '20rem' }} className=" grp-card shadow p-3 mb-5 bg-white rounded">
                        <Card.Header className="Card-Header">Manage Groups</Card.Header>
                        <Card.Body className="grouplist-cardbody">
                            <Container className="groupList-Container"> {/*Container-Start*/}
                                {!myGroups ? "Loading..." : myGroups.map((num) => (
                                    //<h3 key={num}>{num}</h3>
                                    <div key={num}>
                                        <Row className="row">
                                            <Alert variant='primary' className="grpTitle" style={{ textAlign: 'center' }}>{num}</Alert>
                                        </Row>
                                    </div>
                                ))}
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
                                        <img src={groupAvatar} className="avatar" alt="avatar" />
                                    </div>

                                    <form onSubmit={formik.handleSubmit}>
                                        <div className="newgrp-block">
                                            <Container>
                                                <label className="input-label" htmlFor="groupname">Group Name</label><br />
                                                <input
                                                    type="text"
                                                    id="groupname"
                                                    name="groupname"
                                                    className="inputField"
                                                    onChange={formik.handleChange}
                                                    value={formik.values.groupname}
                                                    onBlur={formik.handleBlur}
                                                    aria-required />
                                                {formik.errors.groupname && formik.touched.groupname ? <div className="error-alert">{formik.errors.groupname}</div> : null}

                                                <div className="Share-with">
                                                    <label class="input-label" htmlFor="addMembers">Add Members</label><br></br>
                                                    <Multiselect
                                                        className="inputField addField"
                                                        options={options}
                                                        displayValue="userName"
                                                        id="addMembers"
                                                        onSelect={handleAddmembers}
                                                        onChange={formik.handleChange}
                                                        value={formik.values.addMembers}
                                                        onBlur={formik.handleBlur}
                                                        name="addMembers" />
                                                </div>

                                                <Button className="Create-grp-btn"
                                                    type="submit"
                                                    style={{ backgroundColor: "#091130" }}
                                                    variant="secondary"
                                                    size="sm">
                                                    Create group
                                                </Button>
                                            </Container>
                                        </div>
                                    </form>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>



                </div> {/*--createGroup-div--*/}
            </div>{/*--Main-Div--*/}

        </>

    )
}

export default MyGroups