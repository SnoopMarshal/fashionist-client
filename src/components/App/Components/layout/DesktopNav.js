import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../Context";
import { LOCALES } from "./../../../i18n/constants";
import logo from "./../../../../assets/logo/fashionist.png";
import Icon from "@material-ui/core/Icon";
import { NavLink } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import MenuItem from "@material-ui/core/MenuItem";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from ".//../../../../redux/actions/authAction";
import Login from "../auth/Login";
import Signup from "../auth/Signup";
import Badge from '@material-ui/core/Badge';
import Popover from '@material-ui/core/Popover';
import './desktop.css';
import ShoppingCartMenu from "../../pages/shopping-cart/components/shopping-cart-menu";
const DesktopNav = ({ auth: { isAuthenticated, isLoading, isRegistered }, logoutUser, shop: { cart } }) => {
  const [rightDrawerOpen, setRightDrawer] = useState(false);
  const handleLangClose = () => {
    setLangEl(null);
  };
  const logout = () => {
    logoutUser();
  }
  // popover
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartItems, setCart] = useState(0);
  const [isRegisterShow, showRegister] = useState(true);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const getCartItems = () => {
    setCart(cart.length)
  }
  // popover end
  const authLinks = (
    <div className="lt-bg-primary h-screen right-drawer">
      <MenuItem onClick={() => setRightDrawer(false)}>Profile</MenuItem>
      <MenuItem onClick={() => setRightDrawer(false)}>My account</MenuItem>
      <MenuItem onClick={logout}>Logout</MenuItem>
    </div>
  );
  const guestLinks = (
    <div className="lt-bg-primary right-drawer h-screen flex flex-col items-center justify-center">
      {isRegistered || !isRegisterShow ? <Login /> : <Signup />}
      {isRegisterShow ? <div className="flex items-center py-2 px-4 w-full">
      <span>Already have an account?</span>

        <button
          className="w-full px-4 py-2 lt-bg-accent text-white rounded-md font-semibold"
          onClick={() => showRegister(false)}
        >
          Login
        </button>
      </div> : <div className="flex items-center py-2 px-4 w-full">
      <span>Don't have an account?</span>
        <button
          className="w-full px-4 py-2 lt-bg-accent text-white rounded-md font-semibold"
          onClick={() => showRegister(true)}
        >
          Sign Up
        </button>
      </div>}
    </div>
  );
  const authBag = (
    <div className="flex items-center justify-around w-16 h-16">
      <Badge badgeContent={cartItems} color="primary">
        <Icon className="lt-text-accent lt-icon-base" onClick={handleClick}>shopping_cart</Icon>
      </Badge>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        disableScrollLock={true}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <ShoppingCartMenu />
      </Popover>
    </div>
  );
  const wishList = (
    <div className="flex items-center justify-around w-16 h-16">
      <Icon style={{ color: '#fc466b' }} className="lt-text-accent lt-icon-base">favorite</Icon>
    </div>
  )
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
  const openRightMenu = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setRightDrawer(open);
  };

  useEffect(() => {
    getCartItems();
  }, [cart]);

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
            <NavLink
              to="/contact"
              exact
              className="font-semibold mx-4 uppercase lt-text-accent"
              activeClassName="border-b-2 border-gray-700 lt-text-primary"
            >
              <FormattedMessage id="contact" />
            </NavLink>
          </div>
        </div>
        <div className="flex items-center">
          {!isLoading && <div>{isAuthenticated && wishList}</div>}
          {!isLoading && <div>{isAuthenticated && authBag}</div>}
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
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  shop: state.shop
});
export default connect(mapStateToProps, { logoutUser })(DesktopNav);
