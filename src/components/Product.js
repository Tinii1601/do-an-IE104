import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <Link to="/product_detail">
      <div className="relative border w-48 items-center bg-white py-2 px-3 cursor-pointer">
        <div className="absolute top-0 right-0 bg-do text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
          {`Sale 20%`}
        </div>
        <img
          src={require("../assets/images/Van_hoc/lu-tre-duong-tau.jpg")}
          width="160px"
        />
        <p>Lũ trẻ đường tàu</p>
        <p className="font-bold">90.000 đ</p>
      </div>
    </Link>
  );
};

export default Product;
