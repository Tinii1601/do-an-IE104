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
          <p>Hai Vạn Dặm Dưới Biển</p>
          <img
            src={require("../assets/images/hai-van-dam-duoi-bien-tb-2024.jpg")}
          />
        </div>
        <Footer />
      </>
    );
  }
}

export default ProductDetail;
