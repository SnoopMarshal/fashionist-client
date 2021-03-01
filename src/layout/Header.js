import React from "react";
import logo from "./../assets/logo/lt-logo.png";
import Icon from "@material-ui/core/Icon";
import { NavLink } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useMediaQuery, useTheme } from "@material-ui/core";
import DrawerNav from "./DrawerNav";
export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {isMatch ? (
        <DrawerNav />
      ) : (
        <div className="fixed w-full lt-header top-0 flex justify-between items-center bg-transparent shadow-xl z-10">
          <div className="flex items-center h-16 w-24">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex items-center">
            <div className="flex items-center justify-around">
              <NavLink
                to="/"
                exact
                className="font-semibold px-4"
                activeClassName="border-b-2 border-red-600 lt-text-primary"
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                exact
                className="font-semibold px-4"
                activeClassName="border-b-2 border-red-600 lt-text-primary"
              >
                Shop
              </NavLink>
              <NavLink
                to="/sale"
                exact
                className="font-semibold px-4"
                activeClassName="border-b-2 border-red-600 lt-text-primary"
              >
                Sale
              </NavLink>
              <NavLink
                to="/about"
                exact
                className="font-semibold px-4"
                activeClassName="border-b-2 border-red-600 lt-text-primary"
              >
                About
              </NavLink>
            </div>
            <div className="flex items-center justify-around ml-4 w-16 h-16">
              <Icon className="lt-text-accent lt-icon-base">shopping_cart</Icon>
            </div>
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
      )}
    </>
  );
}
