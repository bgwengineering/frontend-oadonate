import React, {useState}  from 'react'
import {Button} from '@material-ui/core'
import {Link} from 'react-router-dom' 

const GetUserType = () => {

    return (
        <div className="user-type-container">
                   <div>
                    <h4 className='text-center fs-2 mt-5'>Are you an individual, corporate organisation</h4> 
                    <p className='text-center'>Choose below and fill in the information</p>  

                    <div className='user-type-row'>    
                    <Link to='/dashboard/profile/personal' className='main-link'>
                      <Button className="get-userType-button" id="personal">
                          Personal
                       </Button>
                    </Link>
                      <Link to='/dashboard/profile/Coorporate' className='main-link'>
                      <Button className="get-userType-button  ml-4" id="company">
                        Corporate
                      </Button> 
                    </Link>
                     </div>
                     </div>
                    
        </div>
      
    )
}

export default GetUserType
