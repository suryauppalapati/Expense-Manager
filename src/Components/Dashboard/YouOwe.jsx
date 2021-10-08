import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Card, Button } from 'react-bootstrap'
import '../../Styles/YouOwe.css'

function YouOwe() {
    
    //initialising states for totalBalace
    const [youOwe, setYouOwe] = useState([])

    // Fetching you-owe data from db
    useEffect(() => {
            axios.post('http://localhost:8001/dashboard_owing_details',{"userId" : "615afedcd20a2cf1a41e37f3"})
            .then((res) => {
                console.log("amount",res);
                setYouOwe(res.data)
            })
            .catch((err) => {
            console.log(err);
            })       
    }, [])

    return (
        <div>
            <h3 style={{margin: '5px 55px'}} className="label-class">You owe</h3>
            <hr style={{width:'90%',margin: '5px 0px 15px 55px'}}></hr>
                <div className="youowe-container" style={{marginLeft: '55px'}}>
                    <Card style={{ width: '35rem', height: '15rem' }} className="shadow p-3 mb-5 bg-white rounded">
                        {/*Mapping YouOwe Data*/}
                        {youOwe.youAreOwedDetail && youOwe.youAreOwedDetail.map(data => ( 
                            <div className="youowe-info">
                            <Card.Body className="you-owe-body text-class" style={{ float: 'center' }}>
                                    you owe {data.youAreOwedDetail.amount} to {data.youAreOwedDetail.you_owe_to_user_name}

                                    <Button className="btn-block"
                                    style={{ marginTop: '0px', marginLeft: '20px',backgroundColor:"#192b74" }} 
                                    variant="secondary" 
                                    size="sm">
                                    Settle
                                </Button>{' '}
                        </Card.Body>
                        </div>
                        ))}
                        
                    </Card>
                </div>
                <Button className="btn-settleall"
                                    style={{ marginTop: '-60px', marginLeft: '535px',backgroundColor:'#091130' }} 
                                    variant="secondary" 
                                    size="sm">
                                    Settle all
                                </Button>{' '}
        </div>
    )
}

export default YouOwe
