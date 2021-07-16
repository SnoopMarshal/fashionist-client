import React, { useContext } from "react";
import { AppContext } from "../../../Context";
import { LOCALES } from "./../../../i18n/constants";
import logo from "./../../../../assets/logo/fashionist.png";
import Icon from "@material-ui/core/Icon";
import { Link, NavLink, Redirect } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "./../../../../actions/authAction";
const DesktopNav = ({ auth: { isAuthenticated, isLoading }, logoutUser }) => {
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
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
  const authBag = (
    <div className="flex items-center justify-around w-16 h-16">
      <Icon className="lt-text-accent lt-icon-base">shopping_cart</Icon>
    </div>
  );
  const guestBag = <></>;
  const [anchorEl, setAnchorEl] = React.useState(null);
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
            <MenuItem
              disabled={state.locale === LOCALES.SPANISH}
              onClick={() => handleLanguage(LOCALES.SPANISH)}
            >
              <FormattedMessage id="spanish" />
            </MenuItem>
          </Menu>

          {!isLoading && <div>{isAuthenticated ? authBag : guestBag}</div>}
          <div
            className="flex items-center justify-around w-16 h-16"
            onClick={handleClick}
          >
            <Icon className="lt-text-accent lt-icon-lg">account_circle</Icon>
          </div>
          <Menu
            disableScrollLock={true}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}
          >
            {!isLoading && <div>{isAuthenticated ? authLinks : guestLinks}</div>}
          </Menu>
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
