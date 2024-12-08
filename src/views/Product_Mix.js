import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import data from "./data";

const ProductMix = () => {
  const { category } = useParams(); // Lấy category từ URL

  const products = data.products

  // Lọc sản phẩm theo category
  const filteredProducts = products.filter(
    (product) => product.the_loai === category
  );

  return (
    <>
      <Header />
      <div className="m-5 p-4 bg-white">
        <h1 className="text-2xl font-bold">
          {category === "Van_hoc" ? "Sách Văn học" : category === "Ky_nang" ? "Sách Kỹ năng" : "Danh mục"}
        </h1>
        <div className="grid grid-cols-4 gap-4 mt-5">
          {filteredProducts.map((product) => (
            <div key={product.id} className="p-4 border rounded-lg">
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>{product.gia} VND</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductMix;
