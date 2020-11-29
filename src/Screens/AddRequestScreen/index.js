import React from 'react'
import './addRequestScreen.css'
import Navbar from '../../Components/Navbar'
import RequestBuilder from '../../Components/RequestBuilder'

function AddRequestScreen() {
    return (
        <div>
            <Navbar/>
            <div className='container'>
             <RequestBuilder />
            </div>

        </div>
    )
}

export default AddRequestScreen
