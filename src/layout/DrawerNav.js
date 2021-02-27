import React from "react";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import logo from "./../assets/logo/lt-logo.png";
import Icon from "@material-ui/core/Icon";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
export default function DrawerNav() {
  const [state, setState] = React.useState(false);
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
            Home
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to="/shop"
            exact
            className="font-semibold px-4"
            activeClassName="border-r-2 border-red-600 lt-text-primary"
          >
            Shop
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to="/sale"
            exact
            className="font-semibold px-4"
            activeClassName="border-r-2 border-red-600 lt-text-primary"
          >
            Sale
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to="/about"
            exact
            className="font-semibold px-4"
            activeClassName="border-r-2 border-red-600 lt-text-primary"
          >
            About
          </NavLink>
        </ListItem>
      </List>
    </div>
  );
  return (
    <div className="fixed w-full lt-header-mobile top-0 flex justify-between items-center bg-transparent p-4 shadow-lg">
      <div className="flex items-center" onClick={toggleDrawer(true)}>
        <Icon className="lt-text-primary">menu</Icon>
        <div className="pl-2">
          <span className="font-bold lt-text-primary">Little Tags</span>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center justify-end">
          <Icon className="lt-text-accent lt-icon-lg">account_circle</Icon>
        </div>
      </div>
      <Drawer
        className=""
        anchor={"left"}
        open={state}
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
