import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "../components/Product";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="flex flex-row">
          <div className="basis-1/4 h-96 rounded-2xl mt-10 mx-7 px-4 bg-white">
            <p className="font-bold text-2xl text-center py-5">
              Danh mục sản phẩm
            </p>
            {[
              "Kinh tế",
              "Văn học",
              "Kỹ năng sống",
              "Sách thiếu nhi",
              "Văn hóa và du lịch",
            ].map((category) => (
              <div
                key={category}
                className="text-xl p-4 hover:bg-gray-200 cursor-pointer rounded-2xl"
              >
                {category}
              </div>
            ))}
          </div>
          <div className="basis-3/4 my-10 mr-5 px-4">
            <div className="rounded-2xl bg-white mb-5">
              <img
                className="rounded-2xl p-2"
                src={require("../assets/images/banner3.png")}
                width="1022px"
                height="480px"
                alt="Banner"
              />
            </div>
            <div className="rounded-2xl bg-white mb-5 p-4">
              <p className="font-bold text-3xl">Các sản phẩm bán chạy</p>
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
                    className="text-xl hover:bg-gray-200 cursor-pointer rounded-xl border border-gray-200"
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-white p-4">
              <p className="font-bold text-3xl">Các sản phẩm mới</p>
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
                    className="text-xl hover:bg-gray-200 cursor-pointer rounded-xl border border-gray-200"
                  >
                    {category}
                  </div>
                ))}
              </div>
              <div className="">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default HomePage;
