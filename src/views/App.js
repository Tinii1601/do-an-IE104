import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ProductMix from "./ProductMix";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";
import ChangePassword from "./ChangePassword";
import Account from "./Account";
import Favor from "./Favor";
import Login from "./Login";
import Signin from "./Signin";
import Pay from "./Pay";
import Intro from "./Intro";
import IntroSystem from "./IntroSystem";
import FAQ from "./Faq";
import ReturnPolicy from "./ReturnPolicy";
import { AuthProvider } from "../context/AuthContext";
import { CartProvider } from "../context/CartContext";
import { FavorProvider } from "../context/FavorContext";
import { PayProvider } from "../context/PayContext";
import data from "../assets/data";
import "../styles/App.css";

const App = () => {
  return (
    <AuthProvider>
      <FavorProvider>
        <CartProvider>
          <PayProvider>
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product_mix/:category" element={<ProductMix />} />
                <Route
                  path="/product/:id"
                  element={<ProductDetail products={data.products} />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/change-password" element={<ChangePassword />} />
                <Route path="/account" element={<Account />} />
                <Route path="/favor" element={<Favor />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/pay" element={<Pay />} />
                <Route path="/intro" element={<Intro />} />
                <Route path="/introsystem" element={<IntroSystem />} />
                <Route path="/faq" element={<FAQ />} />
                <Route
                  path="/return-policy"
                  element={<ReturnPolicy />} />
              </Routes>
            </Router>
          </PayProvider>
        </CartProvider>
      </FavorProvider>
    </AuthProvider>
  );
}

export default App;
