import "./styles.css";
import Header from "./Components/layout/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/landing-page/Home";
import Shop from "./Components/shop-page/Shop";
import Sale from "./Components/sale-page/Sale";
import About from "./Components/about-page/About";
import Footer from "./Components/layout/Footer";
import Login from "./Components/auth/Login";
import firebase from "firebase/app";
import "firebase/auth";
import Register from "./Components/auth/Signup";
import { Provider } from "react-redux";
import { useMediaQuery, useTheme } from "@material-ui/core";
import DrawerNav from "./Components/layout/DrawerNav";
import DesktopNav from "./Components/layout/DesktopNav";
import store from "./../../store";
function App() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          {isMatch ? <DrawerNav /> : <DesktopNav />}
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth/register" exact component={Register} />
            <Route path="/auth/login" exact component={Login} />
            {/* <Route path="/shop" exact component={Shop} />
          <Route path="/sale" exact component={Sale} />
          <Route path="/about" exact component={About} /> */}
          </Switch>
          {/* <Footer/> */}
        </Router>
      </div>
    </Provider>
  );
}

export default App;
