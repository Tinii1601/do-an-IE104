import React from "react";
import { Link } from "react-router-dom";
import data from "../views/data";

const Product = ({ product }) => {
  return (
    <div className="relative border w-48 items-center bg-white py-2 px-3 cursor-pointer">
      <div className="absolute top-0 right-0 bg-do text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
        {product.sale}%
      </div>
      <img src={product.image} width="160px" />
      <p>{product.name}</p>
      <p className="font-bold">{product.getDiscountedPrice()} đ</p>
      <Link to={`/product/${product.id}`}>Xem chi tiết</Link>
      <button type="button" onClick={() => {
        alert("Đã thêm vào giỏ hàng");
      }}>Thêm vào giỏ hàng</button>
    </div>
  );
};

export default Product;
