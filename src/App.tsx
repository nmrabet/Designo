import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Locations from "./components/Locations";
import Contact from "./components/Contact";
import WebDesign from "./components/pages/WebDesign";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Card />
          </Route>
          <Route path='/ourCompany'>
            <AboutUs />
          </Route>
          <Route path='/locations'>
            <Locations />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/webDesign'>
            <WebDesign />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
