import React from 'react'
import { Card, Button } from 'react-bootstrap'
import '../../Styles/YouOwe.css'
function YouOwe() {
    return (
        <div>
            <h3 style={{margin: '15px 55px'}}>You Owe</h3>

                <div className="youowe-container" style={{marginLeft: '55px'}}>
                    <Card style={{ width: '35rem', height: '19rem' }}>

                        <div className="youowe-info">
                            <Card.Body className="you-owe-body" style={{ float: 'center' }}>
                                You owe 50$ to John Smith

                                 <Button 
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
