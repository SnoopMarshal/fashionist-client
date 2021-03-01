import "./styles.css";
import Header from "../../layout/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../landing-page/Home";
import Shop from "../shop-page/Shop";
import Sale from "../sale-page/Sale";
import About from "../about-page/About";
import Footer from "../../layout/Footer";
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
