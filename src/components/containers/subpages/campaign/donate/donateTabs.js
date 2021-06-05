import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { RiUserHeartFill} from "react-icons/ri";
import { RiUserHeartLine} from "react-icons/ri";


function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const  a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const SimpleTabs = ({story,singleCampaign}) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
const {fund_cash,fund_item} = singleCampaign;
console.log(typeof(fund_cash))
 const cash_donation = fund_cash && fund_cash.map(user_donate=>{
    const {user,donate_as_unknown,donate_comment,donate_currency,donate_amount,id,donate_createdAt} = user_donate
    return (
      <div key={id}>
        {donate_as_unknown ? 
        (<div><RiUserHeartLine/> <p>Anonymous{}{donate_currency}{donate_amount}</p>{donate_createdAt.substring(0,10)}</div>)
        : (<div><RiUserHeartFill/> <p>{user.first_name}{" "}{user.last_name}{" "}{donate_currency}{donate_amount}</p>{donate_createdAt.substring(0,10)}</div>)}
      </div>
    )
  })
 const donate_message = fund_cash && fund_cash.map(user_donate=>{
    const {user,donate_as_unknown,donate_comment,id,donate_createdAt} = user_donate
    return (
      <div key={id}>
        {donate_as_unknown ? 
        (<div><RiUserHeartLine/> <p>Anonymous{}{donate_createdAt.substring(0,10)}</p>{donate_comment}</div>)
        : (<div><RiUserHeartFill/> <p>{user.first_name}{" "}{user.last_name}{" "}{donate_createdAt.substring(0,10)}</p>{donate_comment}</div>)}
      </div>
    )
  })
// const donationGive
  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="DONATIONS" {...a11yProps(0)} />
          <Tab label="THE STORY" {...a11yProps(1)} />
          <Tab label="MESSAGES" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {/* not done check for empty object */}
        {fund_cash?
        <div>{cash_donation}</div> 
         :<div><h6>No donation, you can support fund by donating.</h6></div>}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {story}
      </TabPanel>
      <TabPanel value={value} index={2}>
      {fund_cash? <div>{donate_message}</div>:  <div><h6>No message yet.</h6></div>}
      </TabPanel>
    </div>
  );
}
export default SimpleTabs