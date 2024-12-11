import React from "react";
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
  };

  return (
    <div className="relative border w-48 items-center bg-white py-2 px-3">
      {product.sale > 0 && <div className="absolute top-0 right-0 bg-do text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
        {product.sale}%
      </div>}
      <img src={product.image} width="160px" alt={product.name} />
      <p className="h-12 line-clamp-2 ">{product.name}</p>
      <div className="h-12">
        {product.sale > 0 && <p className="line-through">{product.gia.toLocaleString()} đ</p>}
        <p className="font-bold">{product.getDiscountedPrice().toLocaleString()} đ</p>
      </div>
      <div className="flex gap-1 ">
        <button type="button" className="bg-orange-300" onClick={() => handleAddToCart(product)}>Thêm vào giỏ hàng</button>
        <div className="bg-green-300 p-2 cursor-pointer" onClick={() => { navigate(`/product/${product.id}`) }}>Xem chi tiết</div>
      </div>
    </div>
  );
};

export default Product;
