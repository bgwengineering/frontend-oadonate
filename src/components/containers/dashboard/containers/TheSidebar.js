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
import AdminNavigation from './adminNav'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const isAdmin = useSelector(state => state.userTypeReducer.profile_user)
   const show = useSelector(state => state.settings)
  const {sidebarShow} = show

  return (
    <CSidebar
      show={sidebarShow}
      onShowChange={() =>{dispatch(toggleDashboardSideNav())}}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
        <img src ={Logo} alt= 'logo' className="logo c-sidebar-brand-full"
              style={{ width: "150px" }}  name="logo-negative"/>
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>

       {/* <CCreateElement
          items={AdminNavigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
          /> */}
          
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
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
