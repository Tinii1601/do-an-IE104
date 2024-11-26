import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "../components/Product";
import Pay from "./Pay";

// import Login from "./Login";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Pay />
        <Footer />
      </>
    );
  }
}

export default App;
