import React, { useContext, useState } from "react";
import { AppContext } from "../../../Context";
import { LOCALES } from "./../../../i18n/constants";
import logo from "./../../../../assets/logo/fashionist.png";
import Icon from "@material-ui/core/Icon";
import { Link, NavLink, Redirect } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import Drawer from '@material-ui/core/Drawer';
import MenuItem from "@material-ui/core/MenuItem";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "./../../../../actions/authAction";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import './desktop.css';
const DesktopNav = ({ auth: { isAuthenticated, isLoading }, logoutUser }) => {
  const [rightDrawerOpen, setRightDrawer] = useState(false);
  const handleLangClose = () => {
    setLangEl(null);
  };
  const logout = () => {
    logoutUser();
  }
  const authLinks = (
    <div className="lt-bg-primary h-screen right-drawer">
      <MenuItem onClick={() => setRightDrawer(false)}>Profile</MenuItem>
      <MenuItem onClick={() => setRightDrawer(false)}>My account</MenuItem>
      <MenuItem onClick={logout}>Logout</MenuItem>
    </div>
  );
  const guestLinks = (
    <div className="lt-bg-primary right-drawer h-screen">
      {/* <Login/> */}
      <Signup/>
    </div>
  );
  const authBag = (
    <div className="flex items-center justify-around w-16 h-16">
      <Icon className="lt-text-accent lt-icon-base">shopping_cart</Icon>
    </div>
  );
  const [langEl, setLangEl] = React.useState(null);
  const handleLanguageMenu = (event) => {
    setLangEl(event.currentTarget);
  };
  const handleLanguage = (locale) => {
    setLangEl(null);
    dispatch({
      type: "setLocale",
      locale,
    });
  };
  const { state, dispatch } = useContext(AppContext);
  const openRightMenu =  (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setRightDrawer(open);
  };
  return (
    <div className="fixed w-full lt-header top-0 flex justify-between items-center lt-bg-primary z-10">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <div className="flex items-center h-16 w-24">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex items-center justify-around pl-10">
            <NavLink
              to="/"
              exact
              className="font-semibold mx-4 uppercase lt-text-accent"
              activeClassName="border-b-2 border-gray-700 lt-text-primary"
            >
              <FormattedMessage id="home" />
            </NavLink>
            <NavLink
              to="/shop"
              exact
              className="font-semibold mx-4 uppercase lt-text-accent"
              activeClassName="border-b-2 border-gray-700 lt-text-primary"
            >
              <FormattedMessage id="shop" />
            </NavLink>
            <NavLink
              to="/category"
              exact
              className="font-semibold mx-4 uppercase lt-text-accent"
              activeClassName="border-b-2 border-gray-700 lt-text-primary"
            >
              <FormattedMessage id="category" />
            </NavLink>
            <NavLink
              to="/sale"
              exact
              className="font-semibold mx-4 uppercase lt-text-accent"
              activeClassName="border-b-2 border-gray-700 lt-text-primary"
            >
              <FormattedMessage id="sale" />
            </NavLink>
          </div>
        </div>
        <div className="flex items-center">
          <div
            className="flex items-center justify-around ml-4"
            onClick={handleLanguageMenu}
          >
            <Icon className="lt-text-accent lt-icon-base">translate</Icon>
            <span className="font-semibold lt-text-accent">
              <FormattedMessage id={state.locale} />
            </span>
            <Icon className="lt-text-accent lt-icon-base">
              keyboard_arrow_down
            </Icon>
          </div>
          <Menu
            disableScrollLock={true}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
            anchorEl={langEl}
            keepMounted
            open={Boolean(langEl)}
            onClose={handleLangClose}
          >
            <MenuItem
              disabled={state.locale === LOCALES.ENGLISH}
              onClick={() => handleLanguage(LOCALES.ENGLISH)}
            >
              <FormattedMessage id="english" />
            </MenuItem>
            <MenuItem
              disabled={state.locale === LOCALES.HINDI}
              onClick={() => handleLanguage(LOCALES.HINDI)}
            >
              <FormattedMessage id="hindi" />
            </MenuItem>
          </Menu>

          {!isLoading && <div>{isAuthenticated &&  authBag}</div>}
          <div
            className="flex items-center justify-around w-16 h-16"
            onClick={openRightMenu(true)}
          >
            <Icon className="lt-text-accent lt-icon-lg">account_circle</Icon>
          </div>
          <Drawer anchor={"right"} open={rightDrawerOpen} onClose={() => setRightDrawer(false)} disableScrollLock={true}>
            {isAuthenticated ? authLinks : guestLinks}
          </Drawer>
        </div>
      </div>
    </div>
  );
};

DesktopNav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(DesktopNav);
