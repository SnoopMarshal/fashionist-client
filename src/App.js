import "./App.css";
import Header from "./layout/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/landing-page/Home";
import Shop from "./components/shop-page/Shop";
import Sale from "./components/sale-page/Sale";
import About from "./components/about-page/About";
import Footer from "./layout/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/sale" exact component={Sale} />
          <Route path="/about" exact component={About} />
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
