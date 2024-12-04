import React from "react";
import HomePage from "./Home_Page";
import ProductMix from "./Product_Mix";
import ProductDetail from "./Product_Detail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../styles/App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product_mix" element={<ProductMix />} />
            <Route path="/product_detail" element={<ProductDetail />} />
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
