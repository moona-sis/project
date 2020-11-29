import React from 'react'
import './requestBuilder.css'
import {Input,Button} from 'antd'
import QuestionCard from '../../Components/QuestionsCard'
import {useSelector, useDispatch} from 'react-redux'
import RequestHeader from './RequestHeader'


function RequestBuilder() {
    const dispatch = useDispatch()
    const {formHeader,formTitle,cardQuestion} = useSelector((state)=>state.addRequest)

    const onChangeQuestion =(i,key,value)=>{
        console.log(value)
        dispatch({
            type : 'SET_STATE',
            payload: {cardQuestion : cardQuestion.map((elem,index)=>{
                console.log(i)
                console.log(i===index)
                if (i!== index) return elem
                return {...elem, [`${key}`]: value}
            }) }
        })
    }
    
    const deleteQuestion=(id)=>{
        dispatch({
            type: 'SET_STATE',
            payload: {cardQuestion: cardQuestion.filter((elem,i)=>i!== id)}
           
        })
        console.log(id)
     }
     
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
            {cardQuestion.map((qst,i) => <QuestionCard  deleteQuestion={() => deleteQuestion(i)} onChangeQuestion={onChangeQuestion} key={i} questionId={i} qst = {qst} />)}
            
            <Button onClick={()=>dispatch ({
                type: 'SET_STATE',
                payload: {cardQuestion : [...cardQuestion, 
                    {
                        questionTitle: '',
                        questionType: 1,
                        questionCourte: '',
                        questionLongue: '',
                        choixMultiple:'1',
                        caseaCocher: '2',
                        date:null,
                        heure:null,
                        delete: false,
                        obligatoire: false,
                       
                    }]}
            })}>Ajouter une question</Button>
        </div>
    )
}

export default RequestBuilder
