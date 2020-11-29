import React from 'react'
import './myRequestsCard.css'
import SingleCard from '../MyRequestCard/SingleCard'
import {useSelector} from 'react-redux'

function MyRequestsCard() {
    const cards  = useSelector((state)=>state.response.cards)
    const {experienceFilter, wilayaFilter } = useSelector((state) => state.filter)
    return (
       
            <div className='cv-cards-container'>
            <div className='cv-cards'>
               {cards.filter((elem) => elem.experience === experienceFilter)
               
               .map((elem,i)=><div className='cv-card'>
                    
                    <SingleCard key={i} elem={elem}/>
                    
                    </div>)} 
                
               
        
            </div>
            </div>
      
        
    )
}

export default MyRequestsCard
