import React, {useState} from 'react'
import '../../Styles/AddExpense.css'
import { Modal, Button } from 'react-bootstrap'
import {Multiselect}  from 'multiselect-react-dropdown'

function AddExpense() {
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
            <Button size="lg" style={{marginTop: '35px'}} onClick={(handleShow)} className="btn-block">
            Add an Expense
            </Button>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="modal-title">Add an Expense</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                        <div>
                            <label htmlFor="addExpense" className="label-Class" aria-required>Add amount</label><br/>
                            <input id="addExpense" type="text" /><br/>

                            <label htmlFor="description" className="label-Class">Description</label><br/>
                            <input id="description" type="text" /><br/>

                            <div class="input-group GroupSelect mb-3">
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="GroupSelect">Groups</label>
                            </div>
                            <select class="custom-select" id="GroupSelect">
                                <option selected>Choose...</option>
                                <option value="1">Group-1</option>
                                <option value="2">Group-2</option>
                                <option value="3">Group-3</option>
                            </select>
                            </div>

                            <div className="Share-with">
                            <label class="label-Class" for="selectMembers">Share with</label><br></br>
                            <Multiselect options={options} displayValue="userName" id="selectMembers"/>
                            </div>

                        </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>

                    <Button variant="primary" className="btn-block" onClick={handleClose}>Share</Button>
                </Modal.Footer>
            </Modal>
      </>
    );
}

export default AddExpense