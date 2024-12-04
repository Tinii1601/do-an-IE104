import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "../components/Product";

// Các mảng sản phẩm
let listProduct_vh = [
  {
    image: require("../assets/images/thoi-tho-au-song-ngu.jpg"),
    sale: 10,
    name: "Thời thơ ấu",
    price: 100000,
  },
  {
    image: require("../assets/images/nhung-tam-long-cao-ca-song-ngu.jpg"),
    sale: 15,
    name: "Những tấm lòng cao cả",
    price: 120000,
  },
  {
    image: require("../assets/images/hai-van-dam-duoi-bien-tb-2024.jpg"),
    sale: 20,
    name: "Hai vạn dặm dưới biển",
    price: 150000,
  },
  {
    image: require("../assets/images/lau-dai-than-bi.jpg"),
    sale: 5,
    name: "Lâu đài thần bí",
    price: 80000,
  },
];

// Các mảng sản phẩm khác (kt, kns, stn, vh_dl) tương tự như trên.

const categories = [
  { key: "vh", name: "Văn học", products: listProduct_vh },
  { key: "kt", name: "Kinh tế", products: listProduct_vh },
  { key: "kns", name: "Kỹ năng sống", products: listProduct_vh },
  { key: "stn", name: "Sách thiếu nhi", products: listProduct_vh },
  { key: "vh_dl", name: "Văn hóa - Du lịch", products: listProduct_vh },
];

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("kt");
  const [activeCategoryNew, setActiveCategoryNew] = useState("kt");

  const banners = [
    require("../assets/images/Banner1.jpg"),
    require("../assets/images/Banner2.jpg"),
    require("../assets/images/Banner3.jpg"),
    require("../assets/images/Banner4.jpg"),
    require("../assets/images/Banner5.jpg"),
    require("../assets/images/Banner6.jpg"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const renderProducts = (categoryKey) => {
    const category = categories.find((cat) => cat.key === categoryKey);
    return category ? (
      <div className="my-4 mx-10 grid grid-cols-4 gap-5">
        {category.products.map((product, idx) => (
          <Product key={idx} product={product} />
        ))}
      </div>
    ) : null;
  };

  return (
    <>
      <div className="relative z-20">
        <Header />
      </div>
      <div className="relative my-5 mx-20">
        {/* Banner */}
        <img
          src={banners[currentIndex]}
          width="100%"
          className="rounded-2xl"
          alt="Banner"
        />
        <div
          className="absolute top-1/2 left-0 w-10 text-4xl text-white text-center bg-black rounded-xl cursor-pointer"
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? banners.length - 1 : prevIndex - 1
            )
          }
        >
          &#60;
        </div>
        <div
          className="absolute top-1/2 right-0 w-10 text-4xl text-white text-center bg-black rounded-xl cursor-pointer"
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === banners.length - 1 ? 0 : prevIndex + 1
            )
          }
        >
          &#62;
        </div>
        <div className="flex bg-black px-2 py-2 space-x-2 w-fit rounded-xl absolute bottom-5 left-1/2 transform -translate-x-1/2">
          {banners.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-white" : "bg-gray-500"
              }`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>

      {/* Các sản phẩm bán chạy */}
      <div className="rounded-xl bg-white my-5 mx-20 px-10 py-5 z-10 relative">
        <p className="font-bold text-xl">Các sản phẩm bán chạy</p>
        <div className="flex justify-between mx-8 my-2">
          {categories.map((cat) => (
            <div
              key={cat.key}
              className={`cursor-pointer ${
                activeCategory === cat.key
                  ? "border-b-2 border-xanh"
                  : "hover:border-b-2 hover:border-gray-300"
              }`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.name}
            </div>
          ))}
        </div>
        <hr className="my-3" />
        {renderProducts(activeCategory)}
      </div>

      {/* Các sản phẩm mới */}
      <div className="rounded-xl bg-white my-5 mx-20 px-10 py-5 z-10 relative">
        <p className="font-bold text-xl">Các sản phẩm mới</p>
        <div className="flex justify-between mx-8 my-2">
          {categories.map((cat) => (
            <div
              key={cat.key}
              className={`cursor-pointer ${
                activeCategoryNew === cat.key
                  ? "border-b-2 border-xanh"
                  : "hover:border-b-2 hover:border-gray-300"
              }`}
              onClick={() => setActiveCategoryNew(cat.key)}
            >
              {cat.name}
            </div>
          ))}
        </div>
        <hr className="my-3" />
        {renderProducts(activeCategoryNew)}
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
