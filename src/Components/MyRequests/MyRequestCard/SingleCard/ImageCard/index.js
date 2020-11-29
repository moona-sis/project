import React from 'react'
import './imageCard.css'
import Image from '../../../../../assets/image-profil.jpg'

function ImageCard() {
    return (
        <div>
            <img alt='profil-postulant' src={Image} style={{width: '150px'}}/>
            
        </div>
    )
}

export default ImageCard
