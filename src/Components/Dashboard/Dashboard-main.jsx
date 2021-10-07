import React from 'react'
import '../../Styles/Dashboard-main.css'
import DashboardCards from './Dashboard-cards'
import Navigationbar from '../Navbar/navbar'
import YouOwe from './YouOwe'
import YouAreOwed from './YouAreOwed'

function Dashboard() {
    return (
        <div>
            <Navigationbar/>
            <div className="body">
                <DashboardCards/>
                <div style={{display: 'flex'}}>
                <YouOwe/>
                <YouAreOwed/>
                </div>
            </div>

        </div>
    )
}

export default Dashboard
