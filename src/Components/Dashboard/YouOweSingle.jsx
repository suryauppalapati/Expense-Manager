import React from 'react'
import '../../Styles/YouOwe.css'
import {Card, Button} from 'react-bootstrap'
import axios from 'axios'

function YouOweSingle({data}) {

    const settleHandler = () => {
        axios.put('http://localhost:8001/settle',
        {"fromUserId":"615afeabd20a2cf1a41e37f2", "toUserId":data.you_owe_to_user_id})
        .then((res)=> {
            console.log(res);
        })
        .then(err => {
            console.log(err);
        })
    }
    return (
        <div>
             <div className="youowe-info">
                            <Card.Body className="you-owe-body text-class" style={{ float: 'center' }}>
                                    you owe {data.amount} to {data.you_owe_to_user_name}

                                    <Button className="btn-block"
                                    style={{ marginTop: '0px', marginLeft: '20px',backgroundColor:"#192b74" }} 
                                    variant="secondary" 
                                    onClick = {settleHandler}
                                    size="sm">
                                    Settle
                                </Button>{' '}
                        </Card.Body>
                </div>
        </div>
    )
}

export default YouOweSingle
