import React from 'react'
import './homeBody.css'

function HomeBody() {
    return (
        <div>
            <div className='our-services-container'>
                 <div className='titles'>
                     <div className='home-titles'> NOS SERVICES</div>
                     <div className='services-img'>
                        <div className='service1'>
                            <div>SERVICE1</div>
                        </div>
                         <div className='service2'>
                            <div>SERVICE2</div>
                        </div>
                    </div>
                 </div>
             </div>
             
       
         <div className='chiffres-container'>
                 <div className='titles'>
                     <div className='home-titles'> NOS CHIFFRES</div>
                     <div className='chiffres'>
                        <div className='chiffres-details'>124</div>
                        <div className='chiffres-details'>124</div>
                        <div className='chiffres-details'>124</div>
                        <div className='chiffres-details'> 124</div>
                     </div>
                </div>
        </div>

        <div className='nos-valeurs'>
                 <div className='titles'>
                     <div className='home-titles'> NOS  VALEURS</div>
                     <div className='chiffres'>
                        <div className='chiffres-details'>124</div>
                        <div className='chiffres-details'>124</div>
                        <div className='chiffres-details'>124</div>
                        
                     </div>
                 </div>
             </div>

            <div className='partner-container'>
                 <div className='titles'>
                     <div className='home-titles'> ILS NOUS FONT CONFIANCE</div>
                     <div className='chiffres'>
                        <div className='chiffres-details'>LOGO1</div>
                        <div className='chiffres-details'>LOGO2</div>
                        <div className='chiffres-details'>LOGO3</div>
                        <div className='chiffres-details'> LOGO4</div>
                     </div>
                 </div>
             </div>
        </div>

        
    )
}

export default HomeBody
