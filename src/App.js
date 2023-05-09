import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/css/style.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Review from "./components/Review";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/review" component={Review} />
        <Route component={NotFound} />
      </Switch>
      <Route exact path={["/", "/about", "/menu", "/contact", "/review"]}>
        <Navbar />
        <Footer />
      </Route>
    </Router>
  );
};

export default App;
