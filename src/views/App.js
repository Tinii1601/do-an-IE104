import React from "react";
import Home_Page from "./Home_Page";
import Product_Mix from "./Product_Mix";
import Product_Detail from "./Product_Detail";
import "../styles/App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Product_Detail />
      </>
    );
  }
}

export default App;
