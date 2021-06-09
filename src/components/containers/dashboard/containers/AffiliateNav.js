import React from 'react'
import { useSelector } from 'react-redux'


const AffiliateNav = () => {
    const authState = useSelector(state => state.authReducer);
    const { user } = authState;
    const name = user.first_name;  
    const y = () => {
        if (name === 'John') {
            return (

             <div>
           
            </div>
            )
        }
    }
    return (
        y()
    )
}


export default AffiliateNav
