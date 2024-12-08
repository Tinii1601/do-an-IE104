import React, { useState, useCallback } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class IntroSystem extends React.Component {
  render() {
    return (
      <>
        <div className="relative z-20">
          <Header />
        </div>
        <div class="container"></div>
        <Footer />
      </>
    );
  }
}

export default IntroSystem;
