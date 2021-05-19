import React from 'react'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'

const _adminNav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon content={freeSet.cilSpeedometer} customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Admin Dashboard']
  },

   
  {
    _tag: 'CSidebarNavItem',
    name: 'Profile',
    route: '/dashboard/profile',
    icon: 'cil-puzzle',
    to: 'dashboard/profile',
    // _children: [
    //   {
    //     _tag: 'CSidebarNavItem',
    //     name: 'Edit',
    //     to: 'dashboard/profile/Edit',
    //   },
    // ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Donation',
    route: '/dashboard/donation',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Donate to Campaigns',
        to: '/dashboard/donation/all-campaigns',
      },
     
      {
        _tag: 'CSidebarNavItem',
        name: 'All Donation',
        to: '/dashboard/donation/your-donation',
      },
    ],
  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'Campaigns',
    route: '/dashboard/funds',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Create Cash Campaign',
        to: '/dashboard/funds/raiseCash/raise-cash',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Create Item Campaign',
        to: '/dashboard/funds/raiseItem/raise-item',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'All Cash Campaigns',
        to: '/dashboard/funds/yourFunds/cash-distribution',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'All Item Campaigns',
        to: '/dashboard/funds/yourFunds/item-distribution',
      },
    ],
  },
 
  {
    _tag: 'CSidebarNavItem',
    name: 'Withdrawal',
    route: '/dashboard/withdrawal',
    icon: 'cil-cashapp',
    to: 'dashboard/withdrawal'
  },
 
  //  
]

export default _adminNav
