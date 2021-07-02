import React from 'react'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'
import { CgProfile } from 'react-icons/cg'
import { GiReceiveMoney, GiPayMoney, GiBuyCard } from "react-icons/gi";
import { SiCampaignmonitor } from 'react-icons/si'


const AffiliateNav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: (
      <CIcon
        content={freeSet.cilSpeedometer}
        customClasses="c-sidebar-nav-icon"
      />
    )
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["User Information"]
  },

  {
    _tag: "CSidebarNavItem",
    name: "Profile",
    icon: <CgProfile className="mr-3" />,
    to: "/dashboard/profile"
  },

  {
    _tag: "CSidebarNavDropdown",
    name: "Affiliate",
    route: "/dashboard/affiliate",
    icon: <GiBuyCard className="mr-3" />,
    _children: [
      // {
      //   _tag: "CSidebarNavItem",
      //   name: "Sale",
      //   to: "/dashboard/affiliate/sale"
      // },
      {
        _tag: "CSidebarNavItem",
        name: "Referrer",
        to: "/dashboard/affiliate/referrer"
      },
      // {
      //   _tag: "CSidebarNavItem",
      //   name: "Delivery",
      //   to: "/dashboard/affiliate/delivery"
      // },
      {
        _tag: "CSidebarNavItem",
        name: "Contact",
        to: "/dashboard/affiliate/contact"
      },
      
    ]
  },
];



export default AffiliateNav
