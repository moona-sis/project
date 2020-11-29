import React from 'react'
import './questionCard.css'
import {Button, Input,Select,Switch,DatePicker,Radio,TimePicker } from 'antd'
import {useSelector, useDispatch} from 'react-redux'



const { Option } = Select;
const { TextArea } = Input;


function QuestionCard({qst,onChangeQuestion,questionId,deleteQuestion}) {
    
    const dispatch = useDispatch()
    const{cardQuestion}= useSelector((state)=>state.addRequest)

  

    return (
        <div className='inputs-card'>
            <div className='question-header'>
                <Input onChange={(e)=>onChangeQuestion(questionId,'questionTitle',e.target.value)} className='inputs-form question' 
                placeholder='Question'/>
                <Select className='select-type' defaultValue={1} value={qst.questionType} allowClear
                    onChange={(value)=>{
                        console.log(value)
                        onChangeQuestion(questionId,'questionType',value)}}>
                  <Option value={1}>Reponse courte</Option>
                  <Option value={2}>Reponse longue</Option>
                  <Option value={3}>Choix unique</Option>
                  <Option value={4}>Case a cocher</Option>
                  <Option value={5}>Telecharger un fichier</Option>
                  <Option value={6}>Date</Option>
                  <Option value={7}>Heure</Option>
                </Select>
            </div>
            <div>
                {qst.questionType===1?<div><Input disabled style={{backgroundColor: '#fff'}} className="inputs-form" placeholder='Reponse courte'/></div>
                :qst.questionType===2?<div><TextArea  disabled style={{backgroundColor: '#fff'}} className="inputs-form" placeholder='Reponse longue' className='inputs-form'/></div>
                :qst.questionType===3?<div><Radio >Option 1</Radio></div>
                :qst.questionType===6?<div><DatePicker disabled style={{backgroundColor: '#fff', width: '20vw', marginTop: '20px'}} className="inputs-form" placeholder='Année,Mois,Jour' className='inputs-form'/></div>
                :qst.questionType===7?<div><TimePicker disabled style={{backgroundColor: '#fff', width: '20vw', marginTop: '20px'}} className="inputs-form" placeholder='Heure' className='inputs-form'/></div>:null}
            </div>
          
            
            <div className='question-footer'>
                <div className='question-footer-left'></div>
                <div className='question-footer-right'>
                
                <div className='question-footer-content'>
                     <Button onClick={()=>{deleteQuestion()}}>Delete</Button>
                     </div>
                  
                   
                   
                   <div className='question-footer-content'>Obligatoire</div>
                   <div>
                <Switch className='question-footer-content' size='small'/>
                
                </div>
                </div>
                </div>
            </div>
            
       
    )
}

export default QuestionCard
