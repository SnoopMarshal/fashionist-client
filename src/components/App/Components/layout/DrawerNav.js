import React, { useContext } from 'react'
import { AppContext } from '../../../Context';
import { LOCALES } from "./../../../i18n/constants"
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import logo from "./../../../../assets/logo/lt-logo.png";
import Icon from "@material-ui/core/Icon";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { FormattedMessage } from "react-intl";
import { NavLink } from "react-router-dom";
export default function DrawerNav() {
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
    <div className="fixed w-full lt-header-mobile top-0 flex justify-between items-center bg-transparent p-4 shadow-lg z-10">
      <div className="flex items-center" onClick={toggleDrawer(true)}>
        <Icon className="lt-text-accent">menu</Icon>
        <div className="pl-2">
          <span className="font-bold lt-text-accent">Little Tags</span>
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
          id="lang-menu"
          anchorEl={langEl}
          keepMounted
          open={Boolean(langEl)}
          onClose={handleLangClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "bottom" }}
        >
          <MenuItem disabled={state.locale === LOCALES.ENGLISH} onClick={() => handleLanguage(LOCALES.ENGLISH)}>English</MenuItem>
          <MenuItem disabled={state.locale === LOCALES.HINDI} onClick={() => handleLanguage(LOCALES.HINDI)}>Hindi</MenuItem>
          <MenuItem disabled={state.locale === LOCALES.SPANISH} onClick={() => handleLanguage(LOCALES.SPANISH)}>Spanish</MenuItem>
        </Menu>
        <div className="flex items-center justify-around w-12 h-12">
          <Icon className="lt-text-accent lt-icon-base">shopping_cart</Icon>
        </div>
        <div
          className="flex items-center justify-around w-12 h-12"
          onClick={handleClick}
        >
          <Icon className="lt-text-accent lt-icon-md">account_circle</Icon>
        </div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
      <Drawer
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
