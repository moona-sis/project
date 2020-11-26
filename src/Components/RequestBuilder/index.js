import React from 'react'
import './requestBuilder.css'
import {Input} from 'antd'
import QuestionCard from '../../Components/QuestionsCard'
import {useSelector, useDispatch} from 'react-redux'
import RequestHeader from './RequestHeader'


function RequestBuilder({when}) {
    const dispatch = useDispatch()
    const {formHeader,formTitle,cardQuestion} = useSelector((state)=>state.addRequest)
    
    return (
        <div className='form-container'>
            <div className='form-creator'>
                <div className='form-header'>
                    <RequestHeader onChangeForm={()=>dispatch}/>
                </div>
                <div className='inputs-card'>
                <Input className='inputs-form' placeholder='Formulaire Sans Titre'/>
                <Input className='inputs-form' placeholder='Description'/>
                 </div>
            </div>

            <QuestionCard when={when}/>
            
        </div>
    )
}

export default RequestBuilder
