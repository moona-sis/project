import React from 'react'
import './questionCard.css'
import {Button, Input,Select,Switch,DatePicker} from 'antd'



const { Option } = Select;


function QuestionCard({when}) {
    



    return (
        <div className='inputs-card'>
            <div className='question-header'>
                <Input className='inputs-form question' 
                placeholder='Question'/>
                <Select className='select-type' defaultValue={1} value={when} allowClear>
                  <Option value={1}>Reponse courte</Option>
                  <Option value={2}>Reponse longue</Option>
                  <Option value={3}>Choix multiple</Option>
                  <Option value={4}>Case a cocher</Option>
                  <Option value={5}>Date</Option>
                  <Option value={6}>Heure</Option>
                </Select>
            </div>
            <div>
                
            </div>
            {when=== 3? 
      <div className='dater'>
        hello
        
      </div>: <div>hi</div>}
            
            <div className='question-footer'>
                <div className='question-footer-left'></div>
                <div className='question-footer-right'>
                
                <div className='question-footer-content'> <Button>Delete</Button></div>
                  
                   
                   
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
