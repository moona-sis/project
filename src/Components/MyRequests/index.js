import React from 'react'
import MyRequestCard from './MyRequestCard'
import MyRequestsFilter from './MyRequestsFilter'

function MyRequests() {
    return (
        <div>
            <MyRequestsFilter/>
            <MyRequestCard/>
        </div>
    )
}

export default MyRequests
