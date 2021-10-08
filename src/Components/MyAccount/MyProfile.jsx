import React, { useState,useEffect } from 'react'
import '../../Styles/MyProfile.css'
import Navigationbar from '../Navbar/navbar'
import Avatar from '../../Assets/Avatar.png'
import axios from 'axios'
import {Card, Button, Row, Col, Container} from 'react-bootstrap'
import {useFormik} from 'formik'

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
    }else if(values.password.length < 6){
            errors.password = 'Password should have min 6 characters'
    }

    return errors
}



function MyProfile() {
const [fetched,setFetched]=useState(false);
const [edit, setEdit] = useState(true)
const [initdata, setinitValues] = useState({
    username : '',
    email : '',
    password : '',
    currency:'Rupee',
    language:'English'});
    
const onSubmit = values => {
    //console.log(values)
    axios.put('http://localhost:8001/update_user',       {
        "userId":"615afeabd20a2cf1a41e37f2",
        "username":values.username,
        "email":values.email,
        "password":values.password
      })
    .then(res => {
       //console.log(res.data)
       if(res.data.success){
       alert("Updated user")
       }
       else{
           alert(res.data.message)
       }
    })
    .catch(err => {
        console.log(err);
})

}

const formik = useFormik({
    enableReinitialize: true,
    initialValues:initdata,
    onSubmit,
    validate
})

useEffect(() => {
    if(!fetched){
        axios.post('http://localhost:8001/current_user_detail', { "userId":"615afeabd20a2cf1a41e37f2" })
        .then(res => {
            //console.log(res.data);
            var resData=res.data
            setinitValues( {
                username : resData.data.name,
                email : resData.data.email_id,
                password : resData.data.password,
                currency:'Rupee',
                language:'English'
            })
            setFetched(true);
            //console.log(initdata)
        })
        .catch(err => {
            console.log(err);
    })
}
})

const setEditHandler = () => setEdit(false)
const editHandler = (values) => {

}


    return (
        <>
            <Navigationbar/>
            <div className="myProfile-Body">{/*Container*/}
    
                <div className="displayPicture">{/*user Avatar block starts*/}
                    <div className="userName">User Name : {initdata.username}</div>
                        <img src={Avatar} className="avatar" alt="avatar"/>
                    </div>

                <div className="editProfile">{/*User Profile block starts*/}
                    <Card style={{ width: '35rem', height: '33rem' }} className="card-body shadow p-3 mb-5 bg-white rounded">
                        <div>
                            <Card.Body className="myDetails-card" style={{float: 'center'}}>
                                <Container style={{marginTop:'-50px'}}>

                            <form enablereinitialize onSubmit={formik.handleSubmit}>
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
                                        value={formik.values.currency}
                                        disabled>
                                        </input>
                                    </Col>
                                </Row>

                                <Row className="row"> {/*COUNTRY-ROW*/}
                                    <Col>
                                        <label className="input-label" htmlFor="currency">Language</label>
                                    </Col>
                                    <Col>
                                        <input 
                                        type="text" 
                                        id="language" 
                                        name="language" 
                                        className="inputField" 
                                        value={formik.values.language}
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