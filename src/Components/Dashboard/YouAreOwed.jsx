import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Card, Button } from 'react-bootstrap'
import YouAreOwedSingle from './YouAreOwedSingle'
import '../../Styles/YouAreOwed.css'

function YouAreOwed() {

    //initialising states
    const [youAreOwed, setYouAreOwed] = useState([])

    //Fetching data from db
    useEffect(() => {
       axios.post('http://localhost:8001/dashboard_owing_details',{"userId" : "615afeabd20a2cf1a41e37f2"})
       .then((res) => {
            setYouAreOwed(res.data.youAreOwedDetail)
        //    console.log(res);
       })
       .catch((err) => {
           console.log(err);
       })
    }, [])

    //Handle Request All
    const requestAllHandler = () => {
        axios.put('http://localhost:8001/request_all',
        { "toUserId":"615afeabd20a2cf1a41e37f2"})
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
            <h3 style={{margin: '5px 55px'}} className="label-class">You are owed</h3>
            <hr style={{width:'90%',margin: '5px 0px 15px 55px'}}></hr>
            <div className="youowe-container" style={{marginLeft: '55px'}} scroll>
                <Card style={{ width: '35rem', height: '15rem' }} className="shadow p-3 mb-5 bg-white rounded">

                {youAreOwed && youAreOwed.map(data => ( 
                            <YouAreOwedSingle data={data}/>
                        ))}
                    
                </Card>
            </div>
            <Button className="btn-settleall"
                                    style={{ marginTop: '-60px', marginLeft: '535px',backgroundColor:'#091130' }} 
                                    variant="secondary" 
                                    onClick={requestAllHandler}
                                    size="sm">
                                    Request all
                                </Button>{' '}
        </div>
    )
}

export default YouAreOwed
