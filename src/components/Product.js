import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";


const Product = ({ product }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    if (!isLoggedIn) {
      alert("Bạn cần đăng nhập để thêm vào giỏ hàng!");
      navigate("/login"); // Chuyển hướng đến trang đăng nhập
      return;
    }
    // Thực hiện thêm sản phẩm vào giỏ hàng
    addToCart(product);
    alert(`Đã thêm sản phẩm ${product.name} vào giỏ hàng!`);
  };

  return (
    <div className="relative border w-48 items-center bg-white py-2 px-3 cursor-pointer">
      <div className="absolute top-0 right-0 bg-do text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
        {product.sale}%
      </div>
      <img src={product.image} width="160px" />
      <p>{product.name}</p>
      <p className="font-bold">{product.getDiscountedPrice()} đ</p>
      <Link to={`/product/${product.id}`}>Xem chi tiết</Link>
      <button type="button" onClick={() => handleAddToCart(product)}>Thêm vào giỏ hàng</button>
    </div>
  );
};

export default Product;
