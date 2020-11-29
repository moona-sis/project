import React from 'react'
import './responseCv.css'
import ImageCv from '../MyRequests/MyRequestCard/SingleCard/ImageCard'
import {Button} from 'antd'

function ResponseCv() {
    return (
        <div className='cv-response'>
            <div className='cv-header'>
                <div className='cv-img-card'><ImageCv /></div>
                <div className='cv-description'>
                    <div>Nom prenom</div>
                    <div>Poste</div>
                    <div className='description-paragraph'>Lorem Ipsum is simply dummy text 
                        of the printing and typesetting industry. Lorem Ipsum has
                         been the industry's standard dummy text ever since the 1500s, when an unknown</div>
                    </div> 
            </div>  
            <div className='contact-candidate'>
                <Button>Entretien Virtuel</Button>
                <Button>Entretien Physique</Button>
            </div>
                 <div className='exp-educ'>
                     <div className='experience'>
                        <span className='span'/>
                     </div>
                     <div className='educ'>
                        education
                     </div>

                 </div>
        </div>
    )
}

export default ResponseCv
