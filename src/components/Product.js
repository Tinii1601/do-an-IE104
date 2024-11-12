import React from "react";

class Product extends React.Component {
  render() {
    return (
      <>
        <div className="relative border rounded-2xl w-56 h80 items-center bg-white py-2 px-3 cursor-pointer">
          <div className="absolute top-0 right-0 bg-do text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
            Sale 20%
          </div>
          <img
            src={require("../assets/images/hai-van-dam-duoi-bien-tb-2024.jpg")}
            width="200px"
          />
          <p>Hải Vân Đắm Dưới Biển</p>
          <p className="font-bold">99,000 đ</p>
        </div>
      </>
    );
  }
  i;
}

export default Product;
