import React from 'react'
import {useSelector } from "react-redux";
import Shipping from './Shipping';
import {ReactComponent as LoaderSpinn} from 'assets/images/244.svg'

const ShippingForm = () => {
	const isLoading = useSelector(state=>state.authReducer.loading)
  return (
    <div>
    {isLoading ? <div className='d-flex justify-content-center'><LoaderSpinn  />
        <LoaderSpinn />
        <LoaderSpinn /></div>
        : null}
      <Shipping />
    </div>
  )
}

export default ShippingForm
