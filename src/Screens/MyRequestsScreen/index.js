import React from 'react'
import  './myRequestsScreen.css'
import Navbar from '../../Components/Navbar'
import MyRequests from '../../Components/MyRequests'

function MyRequestsScreen() {
    return (
        <div>
            <Navbar/>
            <div className='myrequests-header'>
                Header
            </div>
            <div className='my-requests-result'>
            <MyRequests/>
            </div>
            
        </div>
    )
}

export default MyRequestsScreen
