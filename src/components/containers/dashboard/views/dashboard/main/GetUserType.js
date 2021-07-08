import React from 'react'
import {Button} from '@material-ui/core'
import {Link} from 'react-router-dom' 
import { useSelector } from 'react-redux'

const GetUserType = () => {

  // user state
  // const authState = useSelector(state => state.authReducer);
  // const { user } = authState;
  // const { is_affiliate } = user
  const userState = useSelector(state => state.authReducer.user);
  return (
  <>
  {
    userState ? 
      null :
          <div className="user-type-container">
                   <div>
                    <h4 className='text-center fs-2 mt-5'>Create an individual profile or register for corporate auction?</h4> 
                    <p className='text-center'>Choose below </p>  

                    <div className='user-type-row'>    
                    <Link to='/dashboard/profile' className='main-link'>
                      <Button className="get-userType-button" id="personal">
                        Individual Profile
                       </Button>
                    </Link>
                      <Link to='/corporate-auction' className='main-link'>
                      <Button className="get-userType-button  ml-4" id="company">
                        Corporate Auction 
                      </Button> 
                    </Link>
                     </div>
                     </div>                 
            </div>   
      }  
      </>
)
}

export default GetUserType
