import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Aboutme from "./pages/Aboutme";
import Portfolio from "./pages/Portfolio";
import Contactme from "./pages/Contactme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import './App.css';


function App() {
  return (
<Router>
      <div className="app">
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Aboutme} />
          <Route exact path="/Portfolio" component={Portfolio} />
          <Route exact path="/Contactme" component={Contactme} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
