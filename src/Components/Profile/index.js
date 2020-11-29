import React from 'react'
import './profile.css'
import ProfileBody from './ProfileBody'


function Profile() {
    return (
        <div className='profile'>
            <div className='profile-header'>

            </div>
            <div className='photo-de-profil'>
                photo de profil
            </div>
            <div className='profile-body'>
            <ProfileBody/>
            </div>
        </div>
    )
}

export default Profile
