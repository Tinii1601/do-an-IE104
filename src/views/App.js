import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "../components/Product";
import Login from "./Login";

import "../styles/App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Login />
        <Footer />
      </>
    );
  }
}

export default App;
