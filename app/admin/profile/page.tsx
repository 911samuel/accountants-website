import ProfileBody from '@/components/ProfileBody'
import ProfileHeader from '@/components/ProfileHeader'
import React from 'react'

const Profile = () => {
    return (
        <div className='container mx-auto px-4 py-8'>
            <h2 className='mb-3'>Profile</h2>
            <div className='bg-white rounded-md px-4 py-8'>
                <ProfileHeader />
                <ProfileBody />
            </div>
        </div>
    )
}

export default Profile