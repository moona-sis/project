import React from 'react'
import './navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <div className='logo-side'>
                LOGO
            </div>
            <div className='links-side'>
                <div className='nav-link'>vLink</div>
                <div className='nav-link'>Ajouter une requete</div>
                <div className='nav-link'>Mes requetes</div>
                <div className='nav-link'>Article</div>
                
            </div>
            <div className='Profil-side'>
            <div className='profil-link'>Profil</div>
            </div>
            
        </div>
    )
}

export default Navbar
