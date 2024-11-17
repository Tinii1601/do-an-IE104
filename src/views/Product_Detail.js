import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class ProductDetail extends React.Component {
  render() {
    return (
      <>
        <div className="relative z-20">
          <Header />
        </div>
        <div>
          <div>
            <img
              src={require("../assets/images/hai-van-dam-duoi-bien-tb-2024.jpg")}
              width="300px"
            />
            <div></div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ProductDetail;
