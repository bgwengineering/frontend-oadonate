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
import Logo from "assets/images/ogdonate-logo.jpeg";
import CIcon from '@coreui/icons-react'


// sidebar nav config
import navigation from './_nav'
import saleAffiliateNav from './affiliateNav/saleAffiliateNav'


const TheSidebar = () => {
const dispatch = useDispatch()
const authState = useSelector(state => state.authReducer);
  const { user } = authState;

  const show = useSelector(state => state.settings)
  const {sidebarShow} = show

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
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
        <img
          src={Logo}
          alt="logo"
          className="logo c-sidebar-brand-full"
          style={{ width: "150px" }}
          name="logo-negative"
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />
      </CSidebarBrand>

      <CSidebarNav>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />  
       
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
}

export default React.memo(TheSidebar)
