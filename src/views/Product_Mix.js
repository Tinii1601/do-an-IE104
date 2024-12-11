import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "../components/Product";
import data from "../assets/data";

const ProductMix = () => {
  const publishers = ["NXB Trẻ", "NXB Phụ nữ", "NXB Thanh niên"];
  const prices = ["Dưới 100000đ", "100000đ - 200000đ", "Trên 200000đ"];
  const formats = ["Bìa cứng", "Bìa mềm"];
  const sortOptions = ["Khuyến mãi", "Giá tăng dần", "Giá giảm dần"];

  const { category } = useParams(); // Lấy category từ URL

  const [selectedPublisher, setSelectedPublisher] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [selectedFormat, setSelectedFormat] = useState([]);
  const [sortOption, setSortOption] = useState("");

  const handlePublisherChange = (publisher) => {
    setSelectedPublisher((prev) =>
      prev.includes(publisher)
        ? prev.filter((p) => p !== publisher) // Bỏ chọn
        : [...prev, publisher] // Thêm vào danh sách đã chọn
    );
  };

  const handlePriceChange = (price) => {
    setSelectedPrice((prev) =>
      prev.includes(price)
        ? prev.filter((p) => p !== price)
        : [...prev, price]
    );
  };

  const handleFormatChange = (format) => {
    setSelectedFormat((prev) =>
      prev.includes(format)
        ? prev.filter((f) => f !== format)
        : [...prev, format]
    );
  };

  // Lọc sản phẩm theo thể loại các tùy chọn
  const filteredProducts = data.list_products_checkbox(category, selectedPublisher, selectedPrice, selectedFormat, sortOption);

  const renderFilterSection = (title, options) => (
    <div className="m-5 bg-white p-4">
      <p className="text-xl font-bold">{title}</p>
      {title === "Nhà xuất bản" ? (
        options.map((option, index) => (
          <div key={index} className="flex">
            <input
              type="checkbox"
              className="w-4 h-4 my-2"
              checked={selectedPublisher.includes(option)}
              onChange={() => handlePublisherChange(option)}
            />
            <label className="ml-2 my-1">{option}</label>
          </div>
        ))
      ) : title === "Giá bán" ? (
        options.map((option, index) => (
          <div key={index} className="flex">
            <input
              type="checkbox"
              className="w-4 h-4 my-2"
              checked={selectedPrice.includes(option)}
              onChange={() => handlePriceChange(option)}
            />
            <p className="ml-2 my-1">{option}</p>
          </div>
        ))
      ) : title === "Hình thức" ? (
        options.map((option, index) => (
          <div key={index} className="flex">
            <input
              type="checkbox"
              className="w-4 h-4 my-2"
              checked={selectedFormat.includes(option)}
              onChange={() => handleFormatChange(option)}
            />
            <label className="ml-2 my-1">{option}</label>
          </div>
        ))
      ) : null}
    </div>
  );

  return (
    <>
      <div className="relative z-20"><Header /></div>
      <div className="flex flex-row">
        <div className="basis-1/4">
          {renderFilterSection("Nhà xuất bản", publishers)}
          {renderFilterSection("Giá bán", prices)}
          {renderFilterSection("Hình thức", formats)}
        </div>
        <div className="basis-3/4 bg-white m-5 p-4">
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
                <input type="radio" name="sortOption" value={option} className="w-4 h-4" onChange={(e) => setSortOption(e.target.value)} />
                <span>{option}</span>
              </label>
            ))}
          </div>
          {filteredProducts.length === 0 ? (
            <p>Không tìm thấy sản phẩm nào</p>
          ) : (
            <div className="grid grid-cols-4 gap-3">
              {filteredProducts.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          )
          }
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductMix;