import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "../components/Product";
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
      <div className="relative z-20"><Header /></div>
      <div className="m-5 p-4 bg-white">
        <h1 className="text-2xl font-bold">
          {category === "Van_hoc"
            ? "Sách văn học"
            : category === "Kinh_te"
              ? "Sách kinh tế"
              : category === "Ky_nang_song"
                ? "Kỹ năng sống"
                : category === "Thieu_nhi"
                  ? "Sách thiếu nhi"
                  : category === "vh_dl"
                    ? "Văn hóa và du lịch"
                    : "không tìm thấy danh mục sản phẩm"}
        </h1>
        <div className="grid grid-cols-4 gap-4 mt-5">
          {filteredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductMix;
