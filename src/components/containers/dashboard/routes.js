import React from 'react';


const Dashboard = React.lazy(() => import('./views/dashboard/main/Dashboard'));
const allCampaign = React.lazy(() => import('./views/dashboard/donation/donationCampaigns'));
const raiseCash = React.lazy(() => import('./views/dashboard/funds/raiseCash/raiseCash'));
const raiseItem = React.lazy(() => import('./views/dashboard/funds/raiseItem/raiseItem'));
const Profile = React.lazy(() => import('./views/dashboard/user/Profile'))
const ChangePassword = React.lazy(() => import('./views/dashboard/user/ChangePassword'))
const Coorporate = React.lazy(() => import('./views/dashboard/user/Coorporate'));
const donationReceived = React.lazy(() => import('./views/dashboard/donation/donationReceived/DonationReceived'))
const cashDistribution = React.lazy(() => import('./views/dashboard/funds/yourFunds/cashDistribution'));
const itemDistribution = React.lazy(()=> import('./views/dashboard/funds/yourFunds/itemDistribution'))
const withdrawal = React.lazy(()=> import('./views/dashboard/withdrawal/Withdrawal'))
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
  { path: '/dashboard/profile/edit/', name: 'Change Password', component: ChangePassword},
  { path: '/dashboard/profile/shipping', name: 'Add shipping', component: shipping },
  { path: '/dashboard/profile/Coorporate', name:'Cooporate', component: Coorporate},
  { path: '/dashboard/donation/donation-received', name:'Your Donation', component: donationReceived},
  { path: '/dashboard/funds/yourFunds/cash-distribution', name:'Cash Distribution', component: cashDistribution},
  { path: '/dashboard/funds/yourFunds/item-distribution', name:'Item Distribution', component: itemDistribution},
  { path: '/dashboard/withdrawal', name:'Withdrawal', component: withdrawal},
];

export default routes;
