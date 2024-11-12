import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "../components/Product";
import "../styles/App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Product />
        <Footer />
      </>
    );
  }
}

export default App;
