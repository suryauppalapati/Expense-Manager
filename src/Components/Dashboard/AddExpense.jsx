import React, { useState, useEffect } from 'react'
import '../../Styles/AddExpense.css'
import { Modal, Button } from 'react-bootstrap'
import { Multiselect } from 'multiselect-react-dropdown'
import { useFormik } from 'formik'
import axios from 'axios'

//initiating states
let initialValues = {
    addAmount: '',
    description: '',
    selectGroup: '',
    selectMembers: []
}

//AddExpense Modal Validations
const validate = values => {
    let errors = {}
    if (!values.addAmount) {
        errors.addAmount = 'Add amount is required'
    }

    if (!values.description) {
        errors.description = 'Description is required'
    } else if (values.description.length < 5) {
        errors.description = 'Description should contain morethan 5 characters'
    }

    if (!values.selectGroup) {
        errors.selectGroup = 'Select group is required'
    }

    // if(!values.selectMembers < 2){
    //     errors.selectMembers = 'A minimum of two members should be selected'
    // }


    return errors
}

function AddExpense() {


    // console.log(formik.values);

    var userData = [        
    {userName : "Robb", id: 1},
    {userName : "Mike", id: 2},
    {userName : "Chris", id: 3},
    {userName : "Steve", id: 4},]
    const [options, setOptions] = useState(userData)
    const [myGroups, setMyGroups] = useState([]);
    const [groupSelected, setGroupSelected] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Get Username from DB
    useEffect(() => {
        axios.post('http://localhost:8001/my_groups', { "userId": "615afedcd20a2cf1a41e37f3" })
            .then(async (res) => {
                //console.log(res.data.data);
                await setMyGroups(res.data.data)
                //console.log(myGroups)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    const onSubmit = values => {
        var users=[]
        if(values.selectMembers.length >0){
        values.selectMembers[0].forEach(ele=>{
             users.push(ele.userName)
        })
        //console.log(users)
        }
        axios.post('http://localhost:8001/create_expense',       {
            "userId":"615afedcd20a2cf1a41e37f3",
            "description":values.description,
            "amount":values.addAmount,
            "users":users,
            "groupname":values.selectGroup
          })
        .then(res => {
           //console.log(res.data)
           if(res.data.success){
           alert("Created expense")
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
        initialValues,
        onSubmit,
        validate
    })

    //Selected Members / ShareWith Handler
    const handleSelected = (members) => {
        initialValues.selectMembers.push(members);
    }
    const groupSelectedChange =(e,values)=>{
        //console.log(e.target.value)
        values.selectGroup=e.target.value
        axios.post('http://localhost:8001/group_users', { "userId": "615afedcd20a2cf1a41e37f3" , "groupName":e.target.value })
        .then(async (res) => {
            //console.log(res.data.data);
            var userData1=[]
            var countVar=0
            res.data.data.forEach(i => {
                userData1.push({userName:i,id:countVar++})
            })
            await setOptions(userData1)
            //console.log(options)
            setGroupSelected(true)
        })
        .catch(err => {
            console.log(err);
        })
       
    }


    return (
        <>
            <div className="mb-2 modal-btn">
                <Button size="lg" style={{ marginTop: '35px', backgroundColor: '#091130' }} onClick={(handleShow)} className="btn-block">
                    Add an Expense
                </Button>
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="modal-title">Add an Expense</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="addAmount" className="label-Class" aria-required>Add amount</label><br />
                        <input id="addAmount" type="number" name="addAmount" onChange={formik.handleChange} value={formik.values.addAmount} onBlur={formik.handleBlur} /><br />
                        {formik.errors.addAmount && formik.touched.addAmount ? <div className="error-alert">{formik.errors.addAmount}</div> : null}

                        <label htmlFor="description" className="label-Class">Description</label><br />
                        <input id="description" type="text" name="description" onChange={formik.handleChange} value={formik.values.description} onBlur={formik.handleBlur} /><br />
                        {formik.errors.description && formik.touched.description ? <div className="error-alert">{formik.errors.description}</div> : null}

                        <div className="input-group GroupSelect mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="selectGroup">Groups</label>
                            </div>
                            <select className="custom-select" id="selectGroup" name="selectGroup" onChange={e => groupSelectedChange(e,formik.values)} value={formik.values.selectGroup} onBlur={formik.handleBlur}>
                                {myGroups.map((option) => (
                                    <option value={option}>{option}</option>))}
                            </select>
                        </div>{formik.errors.selectGroup && formik.touched.selectGroup ? <div className="error-alert">{formik.errors.selectGroup}</div> : null }

                        <div className="Share-with" display={groupSelected}>
                            <label class="label-Class" htmlFor="selectMembers">Share with</label><br></br>
                            { groupSelected ? <Multiselect options={options} onSelect={handleSelected} displayValue="userName" id="selectMembers" name="selectMembers" onChange={formik.handleChange} value={formik.values.selectMembers} /> : null}
                            {formik.errors.selectMembers && formik.touched.selectMembers ? <div className="error-alert">{formik.errors.selectMembers}</div> : null}

                        </div>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                            <Button variant="primary" type="submit" style={{ backgroundColor: '#091130' }} className="btn-block">Share</Button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>

        </>
    );
}

export default AddExpense