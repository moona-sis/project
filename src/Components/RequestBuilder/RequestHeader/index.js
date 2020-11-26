import React from 'react'
import './requestHeader.css'
import LogoImport from '../../LogoImport'
import {Input} from 'antd'

function RequestHeader() {
    return (
        <div>
            <div className='form-header'>
            <LogoImport/>
            <div className='compagny-name'>
                        <div> Nom de votre Entreprise :</div>
                        <Input className='compagny-input' placeholder='Nom de votre entreprise'/>
                    </div>
                </div>
                
        </div>
    )
}

export default RequestHeader
