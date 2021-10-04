import React from 'react'
import { Card } from 'react-bootstrap'
import AddExpense from './AddExpense'
import '../../Styles/Dashboard-cards.css'


function DashboardCards() {
    return (
        <div>
            <h2>Dashboard</h2>
            <hr style={{width:'70%',margin: '5px 0px 5px 55px', color: '#481F90'}}></hr>
            <div className="cardContainer">
            <Card style={{ width: '18rem'}} className="flexBlock shadow p-3 mb-5 bg-white rounded">
            <Card.Body className="card-body">
                <Card.Title className="label-class">Total Balance</Card.Title>
                <Card.Text className="text-class">500₹</Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className="flexBlock shadow p-3 mb-5 bg-white rounded">
            <Card.Body className="card-body">
                <Card.Title className="label-class">You Owe</Card.Title>
                <Card.Text className="text-class">50₹</Card.Text>
            </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className="flexBlock shadow p-3 mb-5 bg-white rounded">
            <Card.Body className="card-body">
                <Card.Title className="label-class">You are owed</Card.Title>
                <Card.Text className="text-class">125₹</Card.Text>
            </Card.Body>
            </Card>

            <AddExpense/>
            </div>
        </div>
    )
}

export default DashboardCards
