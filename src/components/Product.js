import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <Link to="/product_detail">
      <div className="relative border w-48 items-center bg-white py-2 px-3 cursor-pointer">
        {/* Phần hiển thị sale nếu có */}
        {product.sale && (
          <div className="absolute top-0 right-0 bg-do text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
            {`Sale ${product.sale}%`}
          </div>
        )}
        {/* Hình ảnh sản phẩm */}
        <img src={product.image} alt={product.name} width="160px" />
        {/* Tên sản phẩm */}
        <p>{product.name}</p>
        {/* Giá sản phẩm */}
        <p className="font-bold">{product.price} đ</p>
      </div>
    </Link>
  );
};

export default Product;
