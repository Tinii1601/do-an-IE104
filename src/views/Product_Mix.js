import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Product from "../components/Product";

class ProductMix extends React.Component {
  render() {
    return (
      <>
        <div className="relative z-20">
          <Header />
        </div>
        <div className="flex flex-row">
          <div className="basis-1/4">
            <div className="m-5 bg-white p-4">
              <p className="text-xl font-bold">Nhà xuất bản</p>
              <div className="flex flex-col space-y-2">
                <div>
                  <input type="checkbox" value="" className="w-4 h-4" />
                  <label className="ml-2">NXB Trẻ</label>
                </div>
                <div>
                  <input type="checkbox" value="" className="w-4 h-4" />
                  <label className="ml-2">NXB Phụ Nữ</label>
                </div>
                <div>
                  <input type="checkbox" value="" className="w-4 h-4" />
                  <label className="ml-2">NXB Thanh Niên</label>
                </div>
              </div>
            </div>
            <div className="m-5 bg-white p-4">
              <p className="text-xl font-bold">Giá bán</p>
              <div className="flex flex-col space-y-2">
                <div>
                  <input type="checkbox" value="" className="w-4 h-4" />
                  <label className="ml-2">Dưới 100000đ</label>
                </div>
                <div>
                  <input type="checkbox" value="" className="w-4 h-4" />
                  <label className="ml-2">100000đ - 200000đ</label>
                </div>
                <div>
                  <input type="checkbox" value="" className="w-4 h-4" />
                  <label className="ml-2">Trên 200000đ</label>
                </div>
              </div>
            </div>
            <div className="m-5 bg-white p-4">
              <p className="text-xl font-bold">Hình thức</p>
              <div className="flex flex-col space-y-2">
                <div>
                  <input type="checkbox" value="" className="w-4 h-4" />
                  <label className="ml-2">Bìa cứng</label>
                </div>
                <div>
                  <input type="checkbox" value="" className="w-4 h-4" />
                  <label className="ml-2">Bìa mềm</label>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-3/4 bg-white m-5 p-4">
            <div className="flex items-center space-x-4">
              <p className="text-2xl font-bold">Văn học</p>
              <p className="text-xl">Sắp xếp theo: </p>
              <label className="flex items-center space-x-2">
                <input type="checkbox" value="" className="w-4 h-4" />
                <span>Bán chạy</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" value="" className="w-4 h-4" />
                <span>Khuyến mãi</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="checkbox" value="" className="w-4 h-4" />
                <span>Mới nhất</span>
              </label>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
                (product) => (
                  <Product key={product} />
                )
              )}
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ProductMix;
