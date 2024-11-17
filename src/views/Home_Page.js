import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "../components/Product";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
    this.banners = [
      require("../assets/images/Banner1.jpg"),
      require("../assets/images/Banner2.jpg"),
      require("../assets/images/Banner3.jpg"),
      require("../assets/images/Banner4.jpg"),
      require("../assets/images/Banner5.jpg"),
      require("../assets/images/Banner6.jpg"),
    ];
  }

  componentDidMount() {
    this.interval = setInterval(this.handleNext, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handlePrev = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex === 0
          ? this.banners.length - 1
          : prevState.currentIndex - 1,
    }));
  };

  handleNext = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex === this.banners.length - 1
          ? 0
          : prevState.currentIndex + 1,
    }));
  };

  handleDotClick = (index) => {
    this.setState({ currentIndex: index });
  };

  render() {
    const { currentIndex } = this.state;
    return (
      <>
        <div className="relative z-20">
          <Header />
        </div>
        <div className="relative my-5 mx-20">
          <img
            src={this.banners[currentIndex]}
            width="100%"
            className="rounded-2xl"
          />
          <div
            className="absolute top-1/2 left-0 w-10 text-4xl text-white text-center bg-black rounded-xl cursor-pointer"
            onClick={this.handlePrev}
          >
            &#60;
          </div>
          <div
            className="absolute top-1/2 right-0 w-10 text-4xl text-white text-center bg-black rounded-xl cursor-pointer"
            onClick={this.handleNext}
          >
            &#62;
          </div>
          <div className="flex bg-black px-2 py-2 space-x-2 w-fit rounded-xl absolute bottom-5 left-1/2 transform -translate-x-1/2">
            {this.banners.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  currentIndex === index ? "bg-white" : "bg-gray-500"
                }`}
                onClick={() => this.handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
        <div className="rounded-xl bg-white my-5 mx-20 px-10 py-5 z-10 relative">
          <p className="font-bold text-xl">Các sản phẩm bán chạy</p>
          <div className="grid grid-cols-5 gap-4 text-center">
            {[
              "Kinh tế",
              "Văn học",
              "Kỹ năng sống",
              "Sách thiếu nhi",
              "Văn hóa và du lịch",
            ].map((category) => (
              <div
                key={category}
                className="hover:bg-gray-200 cursor-pointer rounded-xl border border-gray-200"
              >
                {category}
              </div>
            ))}
          </div>
          <div className="my-4 mx-10 grid grid-cols-4 gap-5">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
        <div className="rounded-xl bg-white my-5 mx-20 px-10 py-5 z-10 relative">
          <p className="font-bold text-xl">Các sản phẩm mới</p>
          <div className="grid grid-cols-5 gap-4 text-center">
            {[
              "Kinh tế",
              "Văn học",
              "Kỹ năng sống",
              "Sách thiếu nhi",
              "Văn hóa và du lịch",
            ].map((category) => (
              <div
                key={category}
                className="hover:bg-gray-200  cursor-pointer rounded-xl border border-gray-200"
              >
                {category}
              </div>
            ))}
          </div>
          <div className="my-4 mx-10 grid grid-cols-4 gap-5">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default HomePage;
