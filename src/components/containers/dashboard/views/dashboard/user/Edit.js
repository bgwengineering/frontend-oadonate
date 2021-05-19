import React from 'react'
// import {useDispatch} from 'react-redux'
import EditTabs from './EditTab'



const EditProfile = () => {
    return (
        <form  className='profile-form-container mb-5'>
        <div className = 'profile-reg-heading text-white text-center'>
        <h4 className='pt-4 pb-4 text-uppercase'>Edit Profile</h4>
        </div>
         <EditTabs /> 
      </form>
    )
}

export default EditProfile;
