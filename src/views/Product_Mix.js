import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "../components/Product";
import data from "./data";

const ProductMix = () => {
  const publishers = ["NXB Trẻ", "NXB Phụ Nữ", "NXB Thanh Niên"];
  const prices = ["Dưới 100000đ", "100000đ - 200000đ", "Trên 200000đ"];
  const formats = ["Bìa cứng", "Bìa mềm"];
  const sortOptions = ["Khuyến mãi", "Giá tăng dần", "Giá giảm dần"];
  const { category } = useParams(); // Lấy category từ URL

  const products = data.products

  // Lọc sản phẩm theo category
  const filteredProducts = products.filter(
    (product) => product.the_loai === category
  );

  const renderFilterSection = (title, options) => (
    <div className="m-5 bg-white p-4">
      <p className="text-xl font-bold">{title}</p>
      <div className="flex flex-col space-y-2">
        {options.map((option, index) => (
          <div key={index}>
            <input type="checkbox" value="" className="w-4 h-4" />
            <label className="ml-2">{option}</label>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <div className="relative z-20"><Header /></div>
      <div className="flex flex-row">
        {/* Sidebar Filters */}
        <div className="basis-1/4">
          {renderFilterSection("Nhà xuất bản", publishers)}
          {renderFilterSection("Giá bán", prices)}
          {renderFilterSection("Hình thức", formats)}
        </div>
        {/* Product Section */}
        <div className="basis-3/4 bg-white m-5 p-4">
          {/* Sorting Options */}
          <div className="flex items-center space-x-4 mb-4">
            <p className="text-2xl font-bold">
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
            </p>
            <p className="text-xl">Sắp xếp theo:</p>
            {sortOptions.map((option, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input type="checkbox" value="" className="w-4 h-4" />
                <span>{option}</span>
              </label>
            ))}
          </div>
          {/* Product Grid */}
          <div className="grid grid-cols-4 gap-3">
            {filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductMix;