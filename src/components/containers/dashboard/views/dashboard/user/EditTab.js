import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Field, reduxForm } from "redux-form";
import {useDispatch} from 'react-redux';
import { updatePersonalProfile } from "store/actions/auth/Dashboard";
import {Link} from 'react-router-dom'

// tab panel
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
};


// main function
const EditTabs = ({ pristine, reset, submitting, handleSubmit, history }) => {
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const dispatch = useDispatch()

  const editProfileSubmit = values => {
    dispatch( updatePersonalProfile(values))
  }

  
  return (
    <div>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Basic Information" {...a11yProps(0)} />
          <Tab label="Password" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>

        <form onSubmit={handleSubmit(editProfileSubmit)} className="edit-profile-fields">
          <div>
            <label className="mt-3">Email</label>
            <div className="profile-reg-fields">
              <Field
                name="email"
                component="input"
                type="text"
                className="field-inputs"
              />
            </div>
          </div>

          <div className="d-flex mt-3">
            <label className="mr-3">Gender:</label>
            <div>
              <label className="mr-3">
                <Field
                  name="gender"
                  component="input"
                  type="radio"
                  value="Male"
                  className="mr-2"
                />
                Male
              </label>
              <label>
                <Field
                  name="gender"
                  component="input"
                  type="radio"
                  value="Female"
                  className="mr-2"
                />
                Female
              </label>
            </div>
          </div>

          <div className="profile-reg-fields">
            <label className="mt-3">Country</label>
            <div>
              <Field
                name="country"
                component="input"
                type="text"
                className="field-inputs"
              />
            </div>
          </div>
          <div className="mt-4">
            <button
              className="profile-form-but mr-3"
            ><Link to='/dashboard/profile' className='link-router-inverted'>
              Cancel
              </Link>
            </button>
            <button
              disabled={pristine || submitting}
              className="profile-form-but"
            >
              Save Profile
            </button>
          </div>
        </form>
      </TabPanel>


      {/* password */}
      <TabPanel value={value} index={1}>
        <form onSubmit={handleSubmit(editProfileSubmit)}>
        <div>
          <label className="mt-3">Current Password</label>
          <div className="profile-reg-fields">
            <Field
              name="password"
              component="input"
              type="password"
              className="field-inputs"
            />
          </div>
        </div>
        <div>
          <label>New Password</label>
          <div className="profile-reg-fields">
            <Field
              name="new_password"
              component="input"
              type="password"
              className="field-inputs"
            />
          </div>
        </div>
        <div className="mt-4">
          <button
            disabled={pristine || submitting}
            onClick={reset}
            className="profile-form-but mr-3"
            >
              <Link className='link-router-inverted' to='/dashboard/profile'>
            Cancel
            </Link>
          </button>
          <button
            disabled={pristine || submitting}
            className="profile-form-but"
          >
            Change Password
          </button>
        </div>
        </form>
      </TabPanel>
    </div>
  );
};

export default reduxForm({ form: "editForm" })(EditTabs);
