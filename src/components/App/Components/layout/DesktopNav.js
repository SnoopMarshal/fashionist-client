import React, { useContext } from "react";
import { AppContext } from "../../../Context";
import { LOCALES } from "./../../../i18n/constants";
import logo from "./../../../../assets/logo/fashionist.png";
import Icon from "@material-ui/core/Icon";
import { NavLink } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { FormattedMessage } from "react-intl";
export default function DesktopNav() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [langEl, setLangEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
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
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLangClose = () => {
    setLangEl(null);
  };
  const { state, dispatch } = useContext(AppContext);
  return (
    <div className="fixed w-full lt-header top-0 flex justify-between items-center bg-transparent z-10">
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
          <div className="flex items-center justify-around w-16 h-16">
            <Icon className="lt-text-accent lt-icon-base">shopping_cart</Icon>
          </div>
          <Menu
            id="lang-menu"
            anchorEl={langEl}
            keepMounted
            open={Boolean(langEl)}
            onClose={handleLangClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "bottom" }}
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
            <MenuItem
              disabled={state.locale === LOCALES.SPANISH}
              onClick={() => handleLanguage(LOCALES.SPANISH)}
            >
              <FormattedMessage id="spanish" />
            </MenuItem>
          </Menu>
          <div
            className="flex items-center justify-around w-16 h-16"
            onClick={handleClick}
          >
            <Icon className="lt-text-accent lt-icon-lg">account_circle</Icon>
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
      </div>
    </div>
  );
}
