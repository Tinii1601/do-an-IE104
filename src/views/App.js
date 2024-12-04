import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../views/Login";
import Account from "../components/Account";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Account />
        <Footer />
      </>
    );
  }
}

export default App;
