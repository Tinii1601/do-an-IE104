import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useFavor } from "../context/FavorContext";
import { useNavigate } from "react-router-dom";


const Product = ({ product }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { addToFavor, favor } = useFavor();
  const [isFavorited, setIsFavorited] = useState(
    favor.some((item) => item.id === product.id)
  );

  const handleAddToCart = (product) => {
    if (!isLoggedIn) {
      alert("Bạn cần đăng nhập để thêm vào giỏ hàng!");
      navigate("/login"); // Chuyển hướng đến trang đăng nhập
      return;
    }
    // Thực hiện thêm sản phẩm vào giỏ hàng
    addToCart(product);
  };

  const handleAddToFavor = (product) => {
    if (!isLoggedIn) {
      alert("Bạn cần đăng nhập để thêm vào danh sách yêu thích!");
      navigate("/login"); // Chuyển hướng đến trang đăng nhập
      return;
    }
    // Thực hiện thêm sản phẩm vào danh sách yêu thích
    setIsFavorited((prev) => !prev);
    addToFavor(product);
  };

  return (
    <div className="relative border w-48 items-center bg-white py-2 px-3 rounded-xl">
      {product.sale > 0 && <div className="absolute top-0 right-0 bg-do text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
        {product.sale}%
      </div>}
      <img
        src={require(`../assets/icons/${isFavorited ? "heart1.png" : "heart.png"}`)}
        className="absolute top-7 right-0 cursor-pointer"
        onClick={() => handleAddToFavor(product)}
        width="30px"
        alt="heart"
      />
      <img src={product.image} width="160px" alt={product.name} />
      <p className="h-12 line-clamp-2 font-bold">{product.name}</p>
      <div className="h-12">
        {product.sale > 0 && <p className="line-through opacity-50">{product.gia.toLocaleString()} đ</p>}
        <p className="font-bold">{(product.gia * (1 - product.sale / 100.0)).toLocaleString()} đ</p>
      </div>
      <button type="button" className="bg-orange-300 w-full my-2 rounded-lg" onClick={() => handleAddToCart(product)}>Thêm vào giỏ hàng</button>
      <button type="button" className="bg-green-300 w-full rounded-lg" onClick={() => { navigate(`/product/${product.id}`) }}>Xem chi tiết</button>
    </div>
  );
};

export default Product;
