import React, {useState} from 'react'
import '../../Styles/AddExpense.css'
import { Button } from 'react-bootstrap'
import Modal from 'react-modal'

function AddExpense() {

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
                    <Modal.Title>Add an Expenses</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                        <div>
                            <label htmlFor="addExpense">Add amount</label>
                            <input id="addExpense" type="text" />

                            <label htmlFor="description">Description</label>
                            <input id="description" type="text" />

                            <label htmlFor="message">Message</label>
                            <textarea id="message" />
                        </div>
                        <button type="submit" onClick={handleClose}>Submit</button>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>

                    <Button variant="primary" onClick={handleClose}>Share</Button>
                </Modal.Footer>
            </Modal>
      </>
    );
}

export default AddExpense










