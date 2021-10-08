import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import AddExpense from './AddExpense'
import '../../Styles/Dashboard-cards.css'


function DashboardCards() {

    //initialising states for totalBalace
    const [owedetails, setOwedetails] = useState([])

    //get owing details
    useEffect(() => {
        axios.post('http://localhost:8001/dashboard_owing_details', {"userId" : "615afedcd20a2cf1a41e37f2"})
            .then(res => {
                // console.log(res);
                setOwedetails(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    

    //Total you-owe = adding all the amounts in you-owe array
    let totalYouOwe;
    if (owedetails.youOweDetail) {
        totalYouOwe = owedetails.youOweDetail.map(element => element.amount).reduce((a, b) => a + b, 0);
    }

    //Total you-owe = adding all the amounts in you-are-owed array
    let totalYouAreOwed;
    if (owedetails.youAreOwedDetail) {
        totalYouAreOwed = owedetails.youAreOwedDetail.map(element => element.amount).reduce((a, b) => a + b, 0);
    }

    //Total Balance = youAreOwed - youOwe
    const totalBalace = totalYouAreOwed - totalYouOwe

    return (
        <div>
            <h2>Dashboard</h2>
            <hr style={{width:'70%',margin: '5px 0px 5px 55px', color: '#481F90'}}></hr>
            <div className="cardContainer">
            <Card style={{ width: '18rem'}} className="flexBlock shadow p-3 mb-5 bg-white rounded">
            <Card.Body className="card-body">
                <Card.Title className="label-class">Total Balance</Card.Title>
                <Card.Text className="text-class">Rs {totalBalace}</Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className="flexBlock shadow p-3 mb-5 bg-white rounded">
            <Card.Body className="card-body">
                <Card.Title className="label-class">You Owe</Card.Title>
                <Card.Text className="text-class">Rs {totalYouOwe}</Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className="flexBlock shadow p-3 mb-5 bg-white rounded">
            <Card.Body className="card-body">
                <Card.Title className="label-class">You are owed</Card.Title>
                <Card.Text className="text-class">Rs {totalYouAreOwed}</Card.Text>
            </Card.Body>
            </Card>

            <AddExpense/>
            </div>
        </div>
    )
}

export default DashboardCards
