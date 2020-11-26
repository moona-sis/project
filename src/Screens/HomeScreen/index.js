import React from 'react'
import './homeScreen.css'
import Navbar from '../../Components/Navbar'
import HomePoster from './HomePoster'
import HomeBody from './HomeBody'



function HomeScreen() {
    return (
        <div>
            <Navbar/>
            <div className='container'>
            <HomePoster/>
            <HomeBody/>
            </div>
        </div>
    )
}

export default HomeScreen
