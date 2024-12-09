import React from "react";
import HomePage from "./Home_Page";
import ProductMix from "./Product_Mix";
import ProductDetail from "./Product_Detail";
import Cart from "./Cart";
import data from "./data";
import Account from "../components/Account";
import Login from "./Login";
import Pay from "./Pay";
import Intro from "./Intro";
import IntroSystem from "./Intro_system";
import { AuthProvider } from "../context/AuthContext";
import { CartProvider } from "../context/CartContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/App.css";

class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <CartProvider>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product_mix/:category" element={<ProductMix />} />
              <Route
                path="/product/:id"
                element={<ProductDetail products={data.products} />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/account" element={<Account />} />
              <Route path="/login" element={<Login />} />
              <Route path="/pay" element={<Pay />} />
              <Route path="/intro" element={<Intro />} />
              <Route path="/introsystem" element={<IntroSystem />} />
            </Routes>
          </Router>
        </CartProvider>
      </AuthProvider>
    );
  }
}

export default App;
