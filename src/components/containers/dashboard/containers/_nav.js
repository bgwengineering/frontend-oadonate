import React from 'react'
import CIcon from '@coreui/icons-react'
import { freeSet } from '@coreui/icons'
import {CgProfile} from 'react-icons/cg'
import { GiReceiveMoney, GiPayMoney, GiBuyCard } from "react-icons/gi";
import { SiCampaignmonitor } from 'react-icons/si'



  const _nav = [
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
      name: "Donation",
      route: "/dashboard/donation",
      icon: <GiPayMoney className="mr-3" />,
      _children: [
        {
          _tag: "CSidebarNavItem",
          name: "Donate to Campaigns",
          to: "/dashboard/donation/all-campaigns"
        },

        {
          _tag: "CSidebarNavItem",
          name: "Donations Received",
          to: "/dashboard/donation/donation-received"
        }
      ]
    },

    {
      _tag: "CSidebarNavDropdown",
      name: "Campaigns",
      route: "/dashboard/funds",
      icon: <SiCampaignmonitor className="mr-3" />,
      _children: [
        {
          _tag: "CSidebarNavItem",
          name: "Create Cash Campaign",
          to: "/dashboard/funds/raiseCash/raise-cash"
        },
        {
          _tag: "CSidebarNavItem",
          name: "Create Item Campaign",
          to: "/dashboard/funds/raiseItem/raise-item"
        },
        {
          _tag: "CSidebarNavItem",
          name: "Your Cash Cause",
          to: "/dashboard/funds/yourFunds/cash-distribution"
        },
        {
          _tag: "CSidebarNavItem",
          name: "Your Item Cause",
          to: "/dashboard/funds/yourFunds/item-distribution"
        }
      ]
    },
    {
      _tag: "CSidebarNavDropdown",
      name: "Products",
      route: "/dashboard/products",
      icon: <GiBuyCard className="mr-3" />,
      _children: [
        {
          _tag: "CSidebarNavItem",
          name: "auction",
          to: "/dashboard/products/auction"
        },
        {
          _tag: "CSidebarNavItem",
          name: "orders",
          to: "/dashboard/products/orders"
        }
      ]
    },
  
    {
      _tag: "CSidebarNavItem",
      name: "Withdrawal",
      route: "/dashboard/withdrawal",
      icon: <GiReceiveMoney className="mr-3" />,
      to: "/dashboard/withdrawal"
    }
  ];



export default _nav
