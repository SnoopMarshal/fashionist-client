import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../../Context';
import { LOCALES } from "./../../../i18n/constants"
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Badge from '@material-ui/core/Badge';
import Popover from '@material-ui/core/Popover';
import './desktop.css';
import logo from "./../../../../assets/logo/fashionist.png";
import Icon from "@material-ui/core/Icon";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { FormattedMessage } from "react-intl";
import { Link, Redirect, NavLink } from "react-router-dom";
import { logoutUser } from "./../../../../redux/actions/authAction";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Login from "../auth/Login";
import ShoppingCartMenu from "../../pages/shopping-cart/components/shopping-cart-menu";

const DrawerNav = ({ auth: { isAuthenticated, isLoading, isRegistered }, logoutUser, shop: {cart} }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartItems, setCart] = useState(0);

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

  const authBag = (
    <div className="flex items-center justify-around w-10 h-10">
      <Badge badgeContent={cartItems} color="primary">
      <Icon className="lt-text-accent lt-icon-base" onClick={handleClick}>shopping_cart</Icon>
      </Badge>
      <Popover
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
        <ShoppingCartMenu/>
      </Popover>
    </div>
  );
  const wishList = (
    <div className="flex items-center justify-around w-10 h-10">
      <Icon style={{ color: '#fc466b' }} className="lt-text-accent lt-icon-base">favorite</Icon>
    </div>
  )
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
    <div className="lt-bg-primary right-drawer h-screen">
      {isRegistered ? <Login/> : <Login/>}
    </div>
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
  useEffect(() => {
    getCartItems();
  }, [cart]);
  return (
    <div className="fixed w-full lt-header-mobile top-0 flex justify-between items-center lt-bg-primary p-4 z-10">
      <div className="flex items-center" onClick={toggleDrawer(true)}>
        <Icon className="lt-text-accent">menu</Icon>
        <div className="flex items-center h-12 w-auto pl-4">
            <img src={logo} alt="logo" />
          </div>
      </div>
      <div className="flex items-center">
        {!isLoading && <>{isAuthenticated &&  wishList}</>}
        {!isLoading && <>{isAuthenticated && authBag}</>}
        <div
          className="flex items-center justify-around w-12 h-12"
        >
          <Icon className="lt-text-accent lt-icon-md">account_circle</Icon>
        </div>
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
  shop: state.shop
});
export default connect(mapStateToProps, { logoutUser })(DrawerNav);
