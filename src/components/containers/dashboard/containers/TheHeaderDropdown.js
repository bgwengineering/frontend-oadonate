import React from "react";
import {useDispatch, useSelector} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { logout } from "store/actions/auth/Auth";
import {Avatar} from '@material-ui/core'

import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
  CLink,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const TheHeaderDropdown = ({history}) => {
  const dispatch = useDispatch();
  const authenticatedState = useSelector(state => state.authReducer)
  const {isAuthenticated} = authenticatedState;

  const logoutUser = () => {
    dispatch(logout());
    history.push('/');
  }
  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <Avatar src='{""}' className="c-avatar-img" alt="" />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem header tag="div" color="light" className="text-center">
          <strong>Account</strong>
        </CDropdownItem>

        <CDropdownItem>
          <CIcon name="" className="mfe-2" />
        <CLink className="c-subheader-nav-link"
            aria-current="page"
            to="/dashboard">
         
          Dashboard
          </CLink>
        </CDropdownItem>

{/* 
        <CDropdownItem>
          <CIcon name="cil-envelope-open" className="mfe-2" />
          Messages
          <CBadge color="success" className="mfs-auto">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem>
          <CIcon name="cil-comment-square" className="mfe-2" />
          Comments
          <CBadge color="warning" className="mfs-auto">
            42
          </CBadge>
        </CDropdownItem>
        <CDropdownItem header tag="div" color="light" className="text-center">
          <strong>Settings</strong>
        </CDropdownItem> */}
        <CDropdownItem>
        <CLink
            className="c-subheader-nav-link"
            aria-current="page"
            to="/dashboard/profile"
          >
          <CIcon name="cil-user" className="mfe-2" />
          
            Profile
          </CLink>
        </CDropdownItem>



        <CDropdownItem>
          <CIcon name="cil-settings" className="mfe-2" />
          Settings
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem onClick={logoutUser}>
          <CIcon name="cil-lock-locked" className="mfe-2"/>
         {isAuthenticated ? "Log out" : "Login" }
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

export default withRouter(TheHeaderDropdown);
