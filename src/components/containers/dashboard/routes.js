import React from 'react';
import {useDispatch} from 'react-redux'

const Dashboard = React.lazy(() => import('./views/dashboard/main/Dashboard'));
const allCampaign = React.lazy(() => import('./views/dashboard/donation/donationCampaigns'));
const raiseCash = React.lazy(() => import('./views/dashboard/funds/raiseCash/raiseCash'));
const raiseItem = React.lazy(() => import('./views/dashboard/funds/raiseItem/raiseItem'));
const Profile = React.lazy(() => import('./views/dashboard/user/Profile'))
const editProfile = React.lazy(() => import('./views/dashboard/user/Edit'))
const Personal = React.lazy(() => import('./views/dashboard/user/Personal'))
const Coorporate = React.lazy(() => import('./views/dashboard/user/Coorporate'));
const donationReceived = React.lazy(() => import('./views/dashboard/donation/donationReceived/DonationReceived'))
const cashDistribution = React.lazy(() => import('./views/dashboard/funds/yourFunds/cashDistribution'));
const itemDistribution = React.lazy(()=> import('./views/dashboard/funds/yourFunds/itemDistribution'))
const withdrawal = React.lazy(()=> import('./views/dashboard/withdrawal/Withdrawal'))
const billing = React.lazy(()=> import('./views/dashboard/user/BillingIndex'))
const shipping = React.lazy(()=> import('./views/dashboard/user/ShippingIndex'))



const routes = [
  { path: '/', 
  exact: true, 
  name: 'Home'
  },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard, exact: true},
  { path: '/dashboard/donation/all-campaigns', name: 'Donate to Campaigns', component: allCampaign },
  { path: '/dashboard/funds/raiseCash/raise-cash', name: 'Funds', component: raiseCash},
  { path: '/dashboard/funds/raiseItem/raise-item', name: 'Funds', component: raiseItem},
  { path: '/dashboard/profile/', name:'Profile', component: Profile, exact:true},
  { path: '/dashboard/profile/edit/', name: 'editProfile', component: editProfile },
  { path: '/dashboard/profile/shipping', name: 'add shipping', component: shipping },
  { path: '/dashboard/profile/billing', name:'add billing', component: billing},
  { path: '/dashboard/profile/personal/', name:'Personal', component: Personal},
  { path: '/dashboard/profile/Coorporate', name:'Cooporate', component: Coorporate},
  // { path: '/dashboard/profile/edit-profile', name:'Edit', component: editProfile},
  { path: '/dashboard/donation/donation-received', name:'Your Donation', component: donationReceived},
  { path: '/dashboard/funds/yourFunds/cash-distribution', name:'Cash Distribution', component: cashDistribution},
  { path: '/dashboard/funds/yourFunds/item-distribution', name:'Item Distribution', component: itemDistribution},
  { path: '/dashboard/withdrawal', name:'Withdrawal', component: withdrawal},
];

export default routes;
