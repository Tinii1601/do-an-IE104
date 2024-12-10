import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Home_Page";
import ProductMix from "./Product_Mix";
import ProductDetail from "./Product_Detail";
import Cart from "./Cart";
import Account from "../components/Account";
import Login from "./Login";
import Pay from "./Pay";
import Intro from "./Intro";
import IntroSystem from "./Intro_system";
import FAQ from "./Faq"; 
import ReturnPolicy from "./ReturnPolicy"; 
import "../styles/App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product_mix/:category" element={<ProductMix />} />
          <Route
            path="/product/:id"
            element={<ProductDetail />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/introsystem" element={<IntroSystem />} />
          <Route path="/faq" element={<FAQ />} /> 
          <Route
            path="/return-policy"
            element={<ReturnPolicy />}
          />{" "}
          
        </Routes>
      </Router>
    );
  }
}

export default App;
