import React from 'react'
import '../../Styles/YouAreOwed.css'
import {Card, Button} from 'react-bootstrap'
import axios from 'axios'

function YouAreOwedSingle({data}) {

    const requestHandler = () => {
        axios.put('http://localhost:8001/request', {"fromUserId": data.you_are_owed_from_user_id,
        "toUserId":"615afedcd20a2cf1a41e37f3"})
        .then((res) => {
            console.log(res);
            alert('Amount Requested!')
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <div className="youowe-info">
                            <Card.Body className="you-owe-body text-class" style={{ float: 'center' }}>
                                    you are owed {(data.amount).toFixed(2)} from {data.you_are_owed_from_user_name}

                                    <Button className="btn-block"
                                    style={{ marginTop: '0px', marginLeft: '20px',backgroundColor:"#192b74" }} 
                                    variant="secondary" 
                                    onClick={requestHandler}
                                    size="sm">
                                    Request
                                </Button>{' '}
                        </Card.Body>
                        </div>
        </div>
    )
}

export default YouAreOwedSingle
