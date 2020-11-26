import React from 'react'
import './registerForm.css'
import{Input,Button} from 'antd'
 
function RegisterForm() {
    return (
        <div>
             <Input className='login-inputs'
            type='email'
            placeholder='Adresse Email'
            />

             <Input className='login-inputs'
            type='text'
            placeholder='Nom'
            />

             <Input className='login-inputs'
            type='text'
            placeholder='Prénom'
            />

             <Input className='login-inputs'
            type='email'
            placeholder='Adresse Email'
            />
             <Input className='login-inputs'
            type='text'
            placeholder="Nom de l'entreprise"
            />

             <Input className='login-inputs'
            type='text'
            placeholder='Poste'
            />

             <Input className='login-inputs'
            type='password'
            placeholder='Password'
            />

             <Input className='login-inputs'
            type='password'
            placeholder='Confirm Password'
            />

            <Button type='primary'>
            S'inscrire
            </Button>
        </div>
    )
}

export default RegisterForm
