import React from "react";
import HomePage from "./Home_Page";
import ProductMix from "./Product_Mix";
import ProductDetail from "./Product_Detail";
import Cart from "./Cart";
import Account from "../components/Account";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/App.css";

import Pay from "./Pay";
import "../styles/Pay-style.css";
import Intro from "./Intro";
import IntroSystem from "./Intro_system";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product_mix" element={<ProductMix />} />
            <Route path="/product_detail" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            // Mới chèn
            <Route path="/pay" element={<Pay />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/introsystem" element={<IntroSystem />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
