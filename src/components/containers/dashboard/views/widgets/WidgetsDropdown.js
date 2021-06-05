import React from 'react'
import {
  CWidgetDropdown,
  CRow,
  CCol,
} from '@coreui/react'
import {GiReceiveMoney} from 'react-icons/gi'
import {RiFundsLine} from 'react-icons/ri'
import {TiShoppingCart} from 'react-icons/ti'

const WidgetsDropDown = () => {
  // render
  return (
    <CRow>
      <CCol sm="6" lg="4">
      <div className='pt-4 pl-3' style={{height:'170px', backgroundColor:'#C75A00', color:'#fff'}} >
          <div className=' d-flex justify-content-between'>
           <h4>Donations</h4>
           <span className='text-white  icon-position'>
           <GiReceiveMoney className='fs-3'/>
           </span>
           </div>
            <p>Total Donations Received</p>
            <p>Total Amount Donated</p>
        </div>
      </CCol>

      <CCol sm="6" lg="4" >
        <div className='pt-4 pl-3' style={{height:'170px', backgroundColor:'#0C5421', color:'#fff'}} >
          <div className=' d-flex justify-content-between'>
           <h4>Funds Raised</h4>
           <span className='text-white icon-position'>
            <RiFundsLine className='fs-3'/>
           </span>
           </div>
            Total funds raised
        </div>
      </CCol>

      <CCol sm="6" lg="4">
      <div className='pt-4 pl-3 d-flex justify-content-between' style={{height:'170px', backgroundColor:'#C75A00', color:'#fff'}} >
           <h4>Total Order</h4>
           <span className='text-white icon-position'>
           <TiShoppingCart className='fs-3'/>
           </span>
        </div>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropDown
