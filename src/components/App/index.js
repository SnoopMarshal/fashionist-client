import "./styles.css";
import Header from "./Components/layout/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/landing-page/Home";
import Shop from "./Components/shop-page/Shop";
import Sale from "./Components/sale-page/Sale";
import About from "./Components/about-page/About";
import Footer from "./Components/layout/Footer";
import Login from "./Components/auth/Login";
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route path="/auth/login" exact component={Login} />
          {/* <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/sale" exact component={Sale} />
          <Route path="/about" exact component={About} /> */}
        </Switch>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
