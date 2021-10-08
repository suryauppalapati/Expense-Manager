import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Card, Button } from 'react-bootstrap'
import '../../Styles/YouOwe.css'
import YouOweSingle from '../Dashboard/YouOweSingle'

function YouOwe() {
    
    //initialising states for totalBalace
    const [youOwe, setYouOwe] = useState([])

    // Fetching you-owe data from db
    useEffect(() => {
            axios.post('http://localhost:8001/dashboard_owing_details',{"userId" : "615afeabd20a2cf1a41e37f2"})
            .then((res) => {
                console.log("amount",res);
                setYouOwe(res.data.youOweDetail)
            })
            .catch((err) => {
            console.log(err);
            })       
    }, [])

    //Handle Settle all
    const settleAllHandler = () => {
        axios.put('http://localhost:8001/settle_all',
        {"fromUserId":"615afeabd20a2cf1a41e37f2"})
        .then((res)=> {
            // console.log("settleall", res);
            alert('Settled all payments!')
        })
        .then(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <h3 style={{margin: '5px 55px'}} className="label-class">You owe</h3>
            <hr style={{width:'90%',margin: '5px 0px 15px 55px'}}></hr>
                <div className="youowe-container" style={{marginLeft: '55px'}}>
                    <Card style={{ width: '35rem', height: '15rem' }} className="shadow p-3 mb-5 bg-white rounded">
                        
                        {/*Mapping YouOwe Data*/}
                        {youOwe && youOwe.map(data => ( 
                        <YouOweSingle data={data} />
                        ))}
                        
                    </Card>
                </div>
                <Button className="btn-settleall"
                                    style={{ marginTop: '-60px', marginLeft: '535px',backgroundColor:'#091130' }} 
                                    variant="secondary" 
                                    onClick={settleAllHandler}
                                    size="sm">
                                    Settle all
                                </Button>{' '}
        </div>
    )
}

export default YouOwe
