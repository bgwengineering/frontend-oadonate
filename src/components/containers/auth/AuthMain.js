import React from 'react'
import CollapsedNavbar from 'components/ui/Navigation/CollapsedNavbar'
import AuthLayout from './Auth'
import { ReactComponent as LoaderSpinn } from 'assets/images/244.svg'
import { useSelector } from "react-redux";


const AuthMain = () => {
    const isLoading = useSelector(state => state.authReducer.loading);
    return (
        <div>
            <CollapsedNavbar />
            {isLoading ? <div className='d-flex justify-content-center'><LoaderSpinn  />
        <LoaderSpinn />
        <LoaderSpinn /></div>
        : null}
            <AuthLayout />
        </div>
    )
}

export default AuthMain