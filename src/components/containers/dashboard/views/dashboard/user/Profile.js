import React from 'react'
import { Button } from '@material-ui/core'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

// import {Shipping} from '../../../../../checkout/Shipping'
 


const Profile = () => { 
  const profileState= useSelector((state) => state.userTypeReducer);
      const {profile_user} = profileState
        
    return (
      <>
         {profile_user.map(personal=>{
             const {user, address, gender, country, contact_method, city} = personal
          const { email, first_name, last_name } = user 
          
           return (
            <div className="container-fluid mt--7">
            <div className="row">
                <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
                <div className="card card-profile shadow">
                  <div className="row justify-content-center">
                    <div className="col-lg-3 order-lg-2">
                      <div className="card-profile-image">
                          <img src="" alt='rounded-circle' className="rounded-circle-img"/>
                      </div>
                    </div>
                  </div>
                 
                <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
                    <div className="d-flex justify-content-between">
                      <Link to='/dashboard/profile/edit' className="btn btn-sm edit-btn  mr-4">Edit profile</Link>
                      <a href="/#" className="btn btn-sm btn-default float-right">Message</a>
                    </div>
                  </div>
                  
                  <div className="card-body pt-0 pt-md-4"> 
                  <div className="row">
                      <div className="col">
                        <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                          <div>
                          <h3 className='all-heading'>
                         {first_name + " " +last_name}
                         </h3>
                         <div className="h5 font-weight-300">
                         <i className="ni location_pin mr-2"></i>{city + " " + country}
                        </div> 
                         <hr className="my-4"/> 
                          </div>
                        </div>
                      </div>
                    </div> 
                   </div>
                  </div>
                </div>
                
                 
                 {/* account info */}
              <div className="col-xl-8 order-xl-1">
                <div className="card shadow">
                  <div className="card-header bg-white border-0">
                    <div className="row align-items-center">
                      <div className="col-4">
                        <h3 className="all-heading mb-0">My account</h3>
                      </div>
                      <div className="col-4">
                      <Link to='/dashboard/profile/shipping' className='main-link'>
                          <Button className="shipping-btn">Add Shipping Address</Button>
                       </Link>
                      </div>
                      <div className="col-4">
                      <Link to='/dashboard/profile/billing' className='main-link'>
                          <Button className="shipping-btn">Add Billing Address</Button>
                       </Link>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <form>
                      <h6 className="heading-small text-muted mb-4">User information</h6>
                      <div className="pl-lg-4">
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="profile-control-label" for="input-email">Email address</label>
                              <input type="email" id="input-email" className="form-control form-control-alternative" placeholder='email' value={email}/>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group">
                              <label className="profile-control-label" for="gender">Gender</label>
                              <input type="text" id="gender" className="form-control form-control-alternative" placeholder="gender" value={gender}/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="form-group focused">
                              <label className="profile-control-label" for="input-first-name">First name</label>
                              <input type="text" id="input-first-name" className="form-control form-control-alternative" placeholder="First name" value={first_name}/>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="form-group focused">
                              <label className="profile-control-label" for="input-last-name">Last name</label>
                              <input type="text" id="input-last-name" className="form-control form-control-alternative" placeholder="Last name" value={last_name}/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="my-4"/>
                      <h6 className="heading-small text-muted all-heading mb-4">Contact information</h6>
                      <div className="pl-lg-4">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-group focused">
                              <label className="profile-control-label" for="input-address">Address</label>
                              <input id="input-address" className="form-control form-control-alternative" placeholder="Address" value={address} type="text"/>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-4">
                            <div className="form-group focused">
                              <label className="profile-control-label" for="input-city">City</label>
                              <input type="text" id="input-city" className="form-control form-control-alternative" placeholder="City" value={city}/>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="form-group focused">
                              <label className="profile-control-label" for="input-country">Country</label>
                              <input type="text" id="input-country" className="form-control form-control-alternative" placeholder='country' value={country}/>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="form-group">
                              <label className="profile-control-label" for="input-country">Contact Method</label>
                              <input type="text" id="input-postal-code" className="form-control form-control-alternative" placeholder="contact method" value={contact_method}/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr className="profile_hr my-4"/>
      
                     {/* description */} 
                      <h6 className="heading-small text-muted all-heading mb-4">About me</h6>
                      <div className="pl-lg-4">
                        <div className="form-group focused">
                          <label>About Me</label>
                          <textarea rows="4" className="form-control form-control-alternative about_textarea" placeholder="A few words about you ..."></textarea>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>         
             )
         })}      
  </>
 )
      
}

export default Profile
