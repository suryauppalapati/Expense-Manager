import React from 'react'
import { Card, Button } from 'react-bootstrap'
import '../../Styles/YouOwe.css'
function YouOwe() {
    return (
        <div>
            <h3 style={{margin: '5px 55px'}} className="label-class">You Owe</h3>
            <hr style={{width:'90%',margin: '5px 0px 15px 55px'}}></hr>
                <div className="youowe-container" style={{marginLeft: '55px'}}>
                    <Card style={{ width: '35rem', height: '19rem' }} className="shadow p-3 mb-5 bg-white rounded">

                        <div className="youowe-info">
                            <Card.Body className="you-owe-body text-class" style={{ float: 'center' }}>
                                You owe 50$ to John Smith

                                 <Button className="btn-block"
                                    style={{ marginTop: '0px', marginLeft: '20px' }} 
                                    variant="secondary" 
                                    size="sm">
                                    Settle
                                </Button>{' '}
                        </Card.Body>
                        </div>
                    </Card>
                </div>
        </div>
    )
}

export default YouOwe
