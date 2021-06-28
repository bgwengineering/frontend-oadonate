import React, { useState } from "react";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


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

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const About = () => {
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="OGADONATE" {...a11yProps(0)} />
          <Tab label="WHY GIVE OR BUY ON OGADONATE?" {...a11yProps(1)} />
          <Tab label="WHY FUNDRAISE FOR ITEMS" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="col-lg-8">
        <p className="ogadonate-text">
OGADONATE, a brainchild of Bridgewaters Foundation Inc registered in the US and Nigeria, was launched in December 2020.
Ogadonate is a digital marketplace that connects those (individuals corporate or communities) who have needs -personal, 
social, or communal, to people ( individual or corporate) who are willing to donate IDLE ITEMS or CASH to meet these needs.
Donated items are tacked and auctioned through our solution to meet and cash disbursed to the fundraiser accordingly. 
The marketplace processes not only cash to meet others' needs; our niche is our infrastructure to unlock value values 
from waste or idle assets locally or globally.
It is the first of its kind seeking to optimize giving and keep account of such social responsibility for future digital 
currency reward. 
We are also able to repair, remodel or refurbish some of these items that would have constituted a nuisance to the environment.
Why not do some good here, earn a digital social responsibility currency and boost your individual or corporate CSR brand


CASH OR ITEMS, let us provide you the bridge o reach out , give or receive help.
    </p>
    </div>
    </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="col-lg-8">
        <p className="ogadonate-text">
        Give or buy for the price of 3, yes Three!
Joy, value for money spent and openness are rare to come by in the marketplace.
The possibilities we make happen are not about us but about the difference you love to make happen. 
OgaDonate empowers you or your business to give cash or buy an idle item to effect the change you care about.

There is so much an individual can do to affect a change and in the absence of cash, you can give an item to support a cause, collaborating with others to make a huge/profound difference you alone could not have made. At OGADONATE we don’t just connect you to the cause that matters, we empower those with verified needs or causes: preventive or curative; we provide you with feedback information on how your giving is utilized. And when you buy from the platform, you are not just buying at the most affordable price anywhere but you are helping someone meet a need or advance a cause.
</p>
</div>
</div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="col-lg-8">
        <p className="ogadonate-text">
        In the age of growing economic challenges, cash donations are dwindling.
        But Ogadonate offers you a meeting place and resources to pitch your need to people, businesses and
        firms and at the same time realize cash from those items the way and
         manner no one else allows.<br /> All logistics and worries are taking off you.
      Simply upload a need, we verify, you share and we promote. That is all.
        <i>WATCH AND RELAX!</i> Ogadonate aims at:
     <ol>
          <li>Helping individuals, corporate and communities to reduce waste and make impacts via our digital donation
        and auction solution </li>
          <li>Unlocking abundance from idle items while
        redistributing wealth. </li>
          <li>Tracking and rewarding social kindness </li>
          <li>Reducing the burden, time and management involved in item giving,
          conversion and disposal OGADONATE IS A BRAINCHILD OF BRIDGEWATERS
          FOUNDATION
        </li>
        </ol>
        </p>
        </div>
        </div>
      </TabPanel>
    </div>
  );
}
export default About






// const About = (props) => {

//   return (
//     <div className="container text-justify">
//       <h3 className="text-center mt-4">OgaDonate</h3>
//       <div className="d-flex flex-column align-items-center justify-content-center">
//         <div className="col-lg-10">
//           <p className="ogadonate-text">

//             <div>
//             </div>


//             <h3 className="text-center about-headline">
//               <b>WHY GIVE OR BUY ON OGADONATE?</b>
//             </h3>
//             <p>

//             </p>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
