import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleDashboardSideNav} from 'store/actions/Settings';
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'
<<<<<<< HEAD

import Logo from "assets/images/ogdonate-logo.jpeg";
import CIcon from '@coreui/icons-react'

=======
import Logo from "assets/images/ogdonate-logo.jpeg";
import CIcon from '@coreui/icons-react'


>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
// sidebar nav config
import navigation from './_nav'
import saleAffiliateNav from './affiliateNav/saleAffiliateNav'


<<<<<<< HEAD
  const TheSidebar = () => {
  const dispatch = useDispatch()
  const authState = useSelector(state => state.authReducer);
=======
const TheSidebar = () => {
const dispatch = useDispatch()
const authState = useSelector(state => state.authReducer);
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
  const { user } = authState;

  const show = useSelector(state => state.settings)
  const {sidebarShow} = show

<<<<<<< HEAD
    const checkAffiliateType = () => {
      // switch (user.is_affiliate) {
      //   case true:
      //     return (
      //       <CCreateElement
      //         items={saleAffiliateNav}
      //         components={{
      //           CSidebarNavDivider,
      //           CSidebarNavDropdown,
      //           CSidebarNavItem,
      //           CSidebarNavTitle
      //         }}
      //       />
      //     )
      //   default: return (
      //     <CCreateElement
      //       items={navigation}
      //       components={{
      //         CSidebarNavDivider,
      //         CSidebarNavDropdown,
      //         CSidebarNavItem,
      //         CSidebarNavTitle
      //       }}
      //     />
      //   )
      // }
    }
  return (
    <CSidebar
      show={sidebarShow}
      onShowChange={() =>{dispatch(toggleDashboardSideNav())}}
=======
    // const checkAffiliateType = () => {
    //   switch (user.is_affiliate) {
    //     case true:
    //       return (
    //         <CCreateElement
    //           items={saleAffiliateNav}
    //           components={{
    //             CSidebarNavDivider,
    //             CSidebarNavDropdown,
    //             CSidebarNavItem,
    //             CSidebarNavTitle
    //           }}
    //         />
    //       )
    //     default: return (
    //       <CCreateElement
    //         items={navigation}
    //         components={{
    //           CSidebarNavDivider,
    //           CSidebarNavDropdown,
    //           CSidebarNavItem,
    //           CSidebarNavTitle
    //         }}
    //       />
    //     )
    //   }
    // }

  return (
    <CSidebar
      show={sidebarShow}
      onShowChange={() => {
        dispatch(toggleDashboardSideNav());
      }}
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
<<<<<<< HEAD
        <img src ={Logo} alt= 'logo' className="logo c-sidebar-brand-full"
              style={{ width: "150px" }}  name="logo-negative"/>
=======
        <img
          src={Logo}
          alt="logo"
          className="logo c-sidebar-brand-full"
          style={{ width: "150px" }}
          name="logo-negative"
        />
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />
      </CSidebarBrand>
<<<<<<< HEAD
      <CSidebarNav>

=======

      <CSidebarNav>
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />  
<<<<<<< HEAD
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
=======
       
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
>>>>>>> 5ee521180f26cd5a1b7e9c8b021b479ad5ff1dad
}

export default React.memo(TheSidebar)
