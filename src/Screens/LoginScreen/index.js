import React from 'react'
import './loginScreen.css'
import LoginCard from './LoginCard'
import RegisterCard from './RegisterCard'

function LoginScreen() {
    return (
        <div className='login-container'>
            <div className='login-content'>
                <div className='login-side'>
                    <LoginCard/>
                </div>
                <div className='register-side'>
                    <RegisterCard/>
                </div>
                
            </div>
            
        </div>
    )
}

export default LoginScreen
