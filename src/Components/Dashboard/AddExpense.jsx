import React, {useState} from 'react'
import '../../Styles/AddExpense.css'
import { Modal, Button } from 'react-bootstrap'
import {Multiselect}  from 'multiselect-react-dropdown'
import {useFormik} from 'formik'

//initiating states
const initialValues = {
    addAmount : '',
    description: '',
    selectGroup: '',
    selectMembers: []
}

//Submit Handler
const onSubmit = values => {
    console.log(values)
}

//AddExpense Modal Validations
const validate = values => {
    let errors = {}
    if(!values.addAmount){
        errors.addAmount = 'Add amount is required'
    } 

    if(!values.description){
        errors.description = 'Description is required'
    }else if(values.description.length < 5){
            errors.description = 'Description should contain morethan 5 characters'
    }

    if(!values.selectGroup){
        errors.selectGroup = 'Select group is required'
    }

    if(!values.selectMembers){
        errors.selectMembers = 'Share with is required'
    }

    return errors
}

function AddExpense() {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    // console.log(formik.values);

    const userData = [
        {userName : "Robb", id: 1},
        {userName : "Mike", id: 2},
        {userName : "Chris", id: 3},
        {userName : "Steve", id: 4},
    ]
    const [options] = useState(userData)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>  
        <div className="mb-2 modal-btn">
            <Button size="lg" style={{marginTop: '35px', backgroundColor:'#091130'}} onClick={(handleShow)} className="btn-block">
            Add an Expense
            </Button>
            </div>
            <form onSubmit={formik.handleSubmit}>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="modal-title">Add an Expense</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                        
                            <label htmlFor="addAmount" className="label-Class" aria-required>Add amount</label><br/>
                            <input id="addAmount" type="text" name="addAmount" onChange={formik.handleChange} value={formik.values.addAmount}  onBlur={formik.handleBlur}/><br/>
                            {formik.errors.addAmount && formik.touched.addAmount  ? <div className="error-alert">{formik.errors.addAmount}</div> : null }

                            <label htmlFor="description" className="label-Class">Description</label><br/>
                            <input id="description" type="text" name="description" onChange={formik.handleChange} value={formik.values.description} onBlur={formik.handleBlur} /><br/>
                            {formik.errors.description && formik.touched.description ? <div className="error-alert">{formik.errors.description}</div> : null }

                            <div className="input-group GroupSelect mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="selectGroup">Groups</label>
                            </div>
                            <select className="custom-select" id="selectGroup" name="selectGroup" onChange={formik.handleChange} value={formik.values.selectGroup} onBlur={formik.handleBlur}>
                                <option selected>Choose...</option>
                                <option value="1">Group-1</option>
                                <option value="2">Group-2</option>
                                <option value="3">Group-3</option>
                            </select>
                            </div>{formik.errors.selectGroup && formik.touched.selectGroup ? <div className="error-alert">{formik.errors.selectGroup}</div> : null }

                            <div className="Share-with">
                            <label class="label-Class" htmlFor="selectMembers">Share with</label><br></br>
                            <Multiselect options={options} displayValue="userName" id="selectMembers" name="selectMembers" onChange={formik.handleChange} value={formik.values.selectMembers}/>
                            </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" type='submit' style={{backgroundColor:'#091130'}}  className="btn-block">Share</Button>
                </Modal.Footer>

            </Modal>
            </form>
      </>
    );
}

export default AddExpense