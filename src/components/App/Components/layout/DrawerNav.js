import React, { useContext } from 'react'
import { AppContext } from '../../../Context';
import { LOCALES } from "./../../../i18n/constants"
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import logo from "./../../../../assets/logo/fashionist.png";
import Icon from "@material-ui/core/Icon";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { FormattedMessage } from "react-intl";
import { Link, Redirect, NavLink } from "react-router-dom";
import { logoutUser } from "./../../../../redux/actions/authAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";


const DrawerNav = ({ auth: { isAuthenticated, isLoading }, logoutUser }) => {
  const authBag = (
    <div className="flex items-center justify-around w-16 h-16">
      <Icon className="lt-text-accent lt-icon-base">shopping_cart</Icon>
    </div>
  );
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [langEl, setLangEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleLanguageMenu = (event) => {
    setLangEl(event.currentTarget)
  }
  const handleLanguage = (locale) => {
    setLangEl(null);
    dispatch({
      type: 'setLocale',
      locale
    })
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLangClose = () => {
    setLangEl(null);
  };
  const logout = () => {
    handleClose();
    logoutUser();
  }
  const authLinks = (
    <>
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={logout}>Logout</MenuItem>
    </>
  );
  const guestLinks = (
    <>
      <MenuItem onClick={handleClose}>
        <Link to="/auth/login">Login</Link>
      </MenuItem>
    </>
  );
  const [drawerState, setState] = React.useState(false);
  const { state, dispatch } = useContext(AppContext)

  const toggleDrawer = (open) => (event) => {
    setState(open);
  };
  const list = () => (
    <div onClick={toggleDrawer(false)}>
      <List>
        <ListItem>
          <NavLink
            to="/"
            exact
            className="font-semibold px-4"
            activeClassName="border-r-2 border-red-600 lt-text-primary"
          >
            <FormattedMessage id="home" />
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to="/shop"
            exact
            className="font-semibold px-4"
            activeClassName="border-r-2 border-red-600 lt-text-primary"
          >
            <FormattedMessage id="shop" />
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to="/sale"
            exact
            className="font-semibold px-4"
            activeClassName="border-r-2 border-red-600 lt-text-primary"
          >
            <FormattedMessage id="category" />
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to="/about"
            exact
            className="font-semibold px-4"
            activeClassName="border-r-2 border-red-600 lt-text-primary"
          >
            <FormattedMessage id="sale" />
          </NavLink>
        </ListItem>
      </List>
    </div>
  );
  return (
    <div className="fixed w-full lt-header-mobile top-0 flex justify-between items-center lt-bg-primary p-4 z-10">
      <div className="flex items-center" onClick={toggleDrawer(true)}>
        <Icon className="lt-text-accent">menu</Icon>
        <div className="flex items-center h-12 w-auto pl-4">
            <img src={logo} alt="logo" />
          </div>
      </div>
      <div className="flex items-center">
        <div
          className="flex items-center justify-around ml-4"
          onClick={handleLanguageMenu}
        >
          <Icon className="lt-text-accent lt-icon-base">translate</Icon>
          <span className="font-semibold lt-text-accent">{state.locale}</span>
          <Icon className="lt-text-accent lt-icon-base">keyboard_arrow_down</Icon>
        </div>
        <Menu
          disableScrollLock={true}
          anchorEl={langEl}
          keepMounted
          open={Boolean(langEl)}
          onClose={handleLangClose}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <MenuItem disabled={state.locale === LOCALES.ENGLISH} onClick={() => handleLanguage(LOCALES.ENGLISH)}>English</MenuItem>
          <MenuItem disabled={state.locale === LOCALES.HINDI} onClick={() => handleLanguage(LOCALES.HINDI)}>Hindi</MenuItem>
          {/* <MenuItem disabled={state.locale === LOCALES.SPANISH} onClick={() => handleLanguage(LOCALES.SPANISH)}>Spanish</MenuItem> */}
        </Menu>
        {!isLoading && <div>{isAuthenticated && authBag}</div>}

        {/* <div className="flex items-center justify-around w-12 h-12">
          <Icon className="lt-text-accent lt-icon-base">shopping_cart</Icon>
        </div> */}
        <div
          className="flex items-center justify-around w-12 h-12"
          onClick={handleClick}
        >
          <Icon className="lt-text-accent lt-icon-md">account_circle</Icon>
        </div>
        <Menu
          disableScrollLock={true}
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={handleClose}
        >
          {!isLoading && <div>{isAuthenticated ? authLinks : guestLinks}</div>}

        </Menu>
      </div>
      <Drawer
        disableScrollLock={true}
        className=""
        anchor={"left"}
        open={drawerState}
        onClose={toggleDrawer(false)}
      >
        <div className="h-full">
          <div className="w-full flex justify-center items-center mt-4">
            <div className="flex items-center h-16 w-24">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div>{list()}</div>
        </div>
      </Drawer>
    </div>
  );
}
DrawerNav.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(DrawerNav);
