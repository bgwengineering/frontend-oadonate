import React from 'react'
import {Button} from '@material-ui/core'
import {Link} from 'react-router-dom' 

const GetUserType = () => {

    return (
        <div className="user-type-container">
                   <div>
                    <h4 className='text-center fs-2 mt-5'>Create an individual profile or register for corporate auction ?</h4> 
                    <p className='text-center'>Choose below </p>  

                    <div className='user-type-row'>    
                    <Link to='/dashboard/profile' className='main-link'>
                      <Button className="get-userType-button" id="personal">
                        Individual Profile
                       </Button>
                    </Link>
                      <Link to='/corporate-auction' className='main-link'>
                      <Button className="get-userType-button  ml-4" id="company">
                        Corporate Auction Profile
                      </Button> 
                    </Link>
                     </div>
                     </div>                 
               </div>     
    )
}

export default GetUserType
