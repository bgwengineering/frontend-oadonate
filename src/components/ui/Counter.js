import React from 'react'
import {FaUsers} from 'react-icons/fa'
import {FaWpforms} from 'react-icons/fa'
import {GiReceiveMoney} from 'react-icons/gi'
import {useSelector} from  'react-redux'

const Counter = () => {
  const fundState = useSelector(state => state.fundDonateReducer)
  const {allCampaign} = fundState
  const userCount = useSelector(state => state.authReducer)
  const {accountCreated} = userCount 

    return (
       
               <div className='counter-section mt-5'>
               <div className='container-fluid counter-fluid'>
                   <div className='row counter-row'>
                       <div className="col-9 col-sm-4 col-md-4 col-lg-4 counter-col">
                       <div className='member-counter-container'>
                       <div className="row">
                        <span className='users-icon fs-3'>
                         <FaUsers/>
                        </span>
                        <div className='member-num-block p-t-14 m-l-20 d-block'>
                        <p className='num_members fs-2'>
                          1
                        </p>    
                        <p className='members'>Members</p>
                        </div>
                        </div> 
                        </div>
                       </div>
                      
                       <div className="col-9 col-sm-4 col-md-4 col-lg-4 counter-col-form">
                       <div className='member-counter-container'>
                       <div className="row funds-raised-row">
                        <span className='ann-icon fs-3'>
                         <FaWpforms color='#fff'/>
                        </span>
                        <div className='member-num-block p-t-14 m-l-20 d-block'>
                        <p className='num_members fs-2'>
                         {allCampaign.length}
                        </p>    
                        <p className='members'>Funds raised</p>
                        </div>
                        </div> 
                        </div>
                       </div>
       
          
                       <div className="col-9 col-sm-4 col-md-4 col-lg-4 counter-col">
                       <div className='member-counter-container'>
                       <div className="row">
                        <span className='receive-money-icon fs-3'>
                        <GiReceiveMoney />
                        </span>
                        <div className='member-num-block p-t-14 m-l-20 d-block'>
                        <p className='num_members fs-2'>
                         102
                        </p>    
                        <p className='members'>Donation</p>
                        </div>
                        </div> 
                        </div>
                       </div>     
                   </div>
               </div>
               </div>
      
   
    )
}

export default Counter
