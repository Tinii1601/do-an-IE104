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
        <div className="my-5 mx-10 h-auto bg-white p-5">
          <p className="text-2xl font-bold ml-5">Hai Vạn Dặm Dưới Biển</p>
          <div className="flex ">
            <div className="relative basis-3/5">
              <img
                className="absolute w-1/2 mt-5 left-1/4"
                src={require("../assets/images/hai-van-dam-duoi-bien-tb-2024.jpg")}
              />
            </div>
            <div className="basis-2/5 bg-pink-200">Hello</div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ProductDetail;
