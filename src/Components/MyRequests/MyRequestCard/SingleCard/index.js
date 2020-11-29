import React from 'react'
import './singleCard.css'
import ImageCard from './ImageCard'
import {Button} from 'antd'



function SingleCard({elem}) {
   
    
    return (
        
        
        <div className='card-content'>
          
               
                    <div  className='card-result'>
                      <div className='card-header'>
                <div>
                <div>{elem.commune},</div>
                <div>{elem.wilaya}</div>
                </div>
               <div></div>                
            </div>

            <div className='card-infos'>
                <div className='name-post'>
                    <div style={{color:'#C2C9CF'}}>{elem.nomPrenom}</div>
                    <div style={{color:'#00796b'}}>{elem.poste}</div>
                    <div style={{color:'#00796b'}}>{elem.age}ans</div>

                </div>
                <div className='img-card'><ImageCard/></div>
            </div>
            <span className='trait'/>

            <div className='card-skills'>
                <div className='card-skills-left'>
                    <div>Diplome :</div>
                    <div>Competence :</div>
                    <div>Experience :</div>
                </div>
                <div className='card-skills-right'>
                <div>{elem.diplome}</div>
                    <div>{elem.competences}</div>
                    <div>{elem.experience}</div>
                </div>
            </div>
            <div className='card-btn'>
                <div></div>
                <Button style={{backgroundColor: '#00796b', marginRight:'15px', color: '#fff', fontWeight: 'bold'}}>Details</Button>
            </div>

                    </div>
                
           
   
           
            </div>
        
    )
}

export default SingleCard

 
     