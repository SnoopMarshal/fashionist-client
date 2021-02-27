import React from "react";
import logo from "./../assets/logo/lt-logo.png";
import Icon from "@material-ui/core/Icon";
import {
  NavLink
} from "react-router-dom";
import { useMediaQuery, useTheme } from "@material-ui/core";
import DrawerNav from "./DrawerNav";
export default function Header() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {isMatch ? (
        <DrawerNav />
      ) : (
        <div className="fixed w-full lt-header top-0 flex justify-between items-center bg-transparent shadow-xl">
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
              <Icon className="lt-text-accent lt-icon-lg">account_circle</Icon>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
