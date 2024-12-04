import React from "react";

class Product4 extends React.Component {
  render() {
    return (
      <>
        <div className="relative border w-48 items-center bg-white py-2 px-3 cursor-pointer">
          <div className="absolute top-0 right-0 bg-do text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
            Sale 20%
          </div>
          <img
            src={require("../assets/images/30-co-gai-can-dam-thay-doi-the-gioi-truoc-tuoi-20.jpg")}
            width="160px"
          />
          <p>30 Cô Gái Can Đảm Thay Đổi Thế Giới Trước Tuổi 20</p>
          <p className="font-bold">155,000 đ</p>
        </div>
      </>
    );
  }
  i;
}

export default Product4;
