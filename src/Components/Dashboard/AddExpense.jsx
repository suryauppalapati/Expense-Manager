import React, {useState} from 'react'
import '../../Styles/AddExpense.css'
import { Modal, Button } from 'react-bootstrap'

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
                    <Modal.Title className="modal-title">Add an Expense</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                        <div>
                            <label htmlFor="addExpense" className="label-Class" aria-required>Add amount</label><br/>
                            <input id="addExpense" type="text" /><br/>

                            <label htmlFor="description" className="label-Class">Description</label><br/>
                            <input id="description" type="text" /><br/>    
                        </div>
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