import React from 'react'
import { Card } from 'react-bootstrap'
import AddExpense from './AddExpense'
import '../../Styles/Dashboard-cards.css'


function DashboardCards() {
    return (
        <div>
            <h2 style={{margin: '15px 55px'}}>Dashboard</h2>
            <div className="cardContainer">
            <Card style={{ width: '18rem'}} className="flexBlock">
            <Card.Body className="card-body">
                <Card.Title>Total Balance</Card.Title>
                <Card.Text>500$</Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className="flexBlock">
            <Card.Body className="card-body">
                <Card.Title>You Owe</Card.Title>
                <Card.Text>50$</Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className="flexBlock">
            <Card.Body className="card-body">
                <Card.Title>You are owed</Card.Title>
                <Card.Text>125$</Card.Text>
            </Card.Body>
            </Card>

            <AddExpense/>
            </div>
            <hr></hr>
        </div>
    )
}

export default DashboardCards
