import React from 'react'
import './loginForm.css'
import {Input, Button} from 'antd'

function LoginForm() {
    return (
        <div>
            <Input className='login-inputs'
            type='email'
            placeholder='Adresse Email'
            />

            <Input className='login-inputs'
            type='password'
            placeholder='Password'
            />  

            <Button type='primary'>
                Se connecter
            </Button>
        </div>
    )
}

export default LoginForm
