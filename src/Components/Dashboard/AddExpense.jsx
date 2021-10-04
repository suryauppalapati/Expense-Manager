import React, {useState} from 'react'
import '../../Styles/AddExpense.css'
import { Button } from 'react-bootstrap'
import Modal from 'react-modal'

function AddExpense() {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div>
            <div className="mb-2 add-exp-btn">
            <Button variant="primary" size="lg" style={{marginTop: '18px'}} onClick={handleShow}>
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

        </div>
    )
}

export default AddExpense


