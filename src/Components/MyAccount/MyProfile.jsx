import React, { useState } from 'react'
import '../../Styles/MyProfile.css'
import Navigationbar from '../Navbar/navbar'
import Avatar from '../../Assets/Avatar.png'
import {Card, Button, Row, Col, Container} from 'react-bootstrap'
import {useFormik} from 'formik'

//initiating states
const initialValues = {
    username : '',
    email : '',
    password : '',
}

//SubmitHandler
const onSubmit = values => {
    console.log(values)
}

//Form Validations
const validate = values => {
    let errors = {}
    if(!values.username){
        errors.username = 'Username should not be empty'
    } 

    if(!values.email){
        errors.email = 'Email should not be empty'
    }

    if(!values.password){
        errors.password = 'Password should not be empty'
    }else if(values.password.length < 8){
            errors.password = 'Password should have min 8 characters'
    }

    return errors
}



function MyProfile() {

const formik = useFormik({
    initialValues,
    onSubmit,
    validate
})

 const [edit, setEdit] = useState(true)

const setEditHandler = () => setEdit(false)
const editHandler = () => {
    alert('Profile updated!')
    setEdit(true)
    }

    return (
        <>
            <Navigationbar/>
            <div className="myProfile-Body">{/*Container*/}
    
                <div className="displayPicture">{/*user Avatar block starts*/}
                    <div className="userName">Joseph Morgan</div>
                        <img src={Avatar} className="avatar" alt="avatar"/>
                    </div>

                <div className="editProfile">{/*User Profile block starts*/}
                    <Card style={{ width: '35rem', height: '33rem' }} className="card-body shadow p-3 mb-5 bg-white rounded">
                        <div>
                            <Card.Body className="myDetails-card" style={{float: 'center'}}>
                                <Container style={{marginTop:'-50px'}}>

                            <form onSubmit={formik.handleSubmit}>
                                <Row className="row"> {/*NAME-ROW*/}
                                    <Col>
                                        <label className="input-label" htmlFor="username">Name</label>
                                    </Col>
                                    <Col>
                                        <input 
                                        type="text" 
                                        id="username" 
                                        name="username" 
                                        className="inputField" 
                                        onChange={formik.handleChange} 
                                        value={formik.values.username}  
                                        onBlur={formik.handleBlur} 
                                        disabled={edit}>
                                        </input>
                                        {formik.errors.username && formik.touched.username  ? <div className="error-alert">{formik.errors.username}</div> : null }

                                    </Col>
                                </Row>

                                <Row className="row"> {/*EMAIL-ROW*/}
                                    <Col>
                                        <label className="input-label" htmlFor="email">Email</label>
                                    </Col>
                                    <Col>
                                        <input 
                                        type="email" 
                                        id="email" 
                                        name="email"
                                        className="inputField"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}  
                                        onBlur={formik.handleBlur} 
                                        disabled={edit}>
                                        </input>
                                        {formik.errors.email && formik.touched.email  ? <div className="error-alert">{formik.errors.email}</div> : null }
                                    </Col>
                                </Row>

                                <Row className="row"> {/*PASSWORD-ROW*/}
                                    <Col>
                                        <label className="input-label" htmlFor="password">Password</label>
                                    </Col>
                                    <Col>
                                        <input 
                                        type="password" 
                                        id="password" 
                                        name="password" 
                                        className="inputField"
                                        onChange={formik.handleChange}
                                        value={formik.values.password}  
                                        onBlur={formik.handleBlur} 
                                        disabled={edit}>
                                        </input>
                                        {formik.errors.password && formik.touched.password  ? <div className="error-alert">{formik.errors.password}</div> : null }
                                    </Col>
                                </Row>

                                <Row className="row"> {/*CURRENCY-ROW*/}
                                    <Col>
                                        <label className="input-label" htmlFor="currency">Currency</label>
                                    </Col>
                                    <Col>
                                        <input 
                                        type="text" 
                                        id="currency" 
                                        name="currency" 
                                        className="inputField" 
                                        disabled>
                                        </input>
                                    </Col>
                                </Row>

                                <Row className="row"> {/*COUNTRY-ROW*/}
                                    <Col>
                                        <label className="input-label" htmlFor="currency">Country</label>
                                    </Col>
                                    <Col>
                                        <input 
                                        type="text" 
                                        id="country" 
                                        name="country" 
                                        className="inputField" 
                                        disabled>
                                        </input>
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
                                        type="submit"
                                        onClick={editHandler}
                                        style={{backgroundColor:"#091130" }} 
                                        variant="secondary" 
                                        size="sm">
                                        Save Changes
                                    </Button>{' '}
                                    </Col>
                                </Row>
                                </form>
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
