import React from "react";

class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <div className="bg-green flex justify-center items-center space-x-4">
            <p className="text-white p-4 text-2xl">
              Hotline: 1900xxxx Email: hotro@nhasach.com
            </p>
            <img
              src={require("../assets/icons/facebook.png")}
              alt="Facebook Icon"
              width={40}
              height={40}
            ></img>
            <img
              src={require("../assets/icons/messenger.png")}
              alt="Messenger Icon"
              width={40}
              height={40}
            ></img>
            <img
              src={require("../assets/icons/zalo.jpeg")}
              alt="Zalo Icon"
              width={40}
              height={40}
            ></img>
          </div>
          <div className="flex items-center justify-between mt-5 mx-5">
            <div className="w-52 h-14 rounded-2xl bg-red mx-5 text-white text-center">
              Logo
            </div>
            <div className="relative w-2/4">
              <img
                src={require("../assets/icons/icon_search.png")}
                alt="Search Icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2"
                width={30}
                height={30}
              />
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm"
                className="w-full h-14 rounded-2xl border-black border-solid pl-12 pr-5"
              />
            </div>
            <button className="w-40 h-14 bg-orange rounded-2xl text-white text-2xl font-bold flex items-center justify-center space-x-2">
              <img
                src={require("../assets/icons/icon_user.png")}
                alt="User Icon"
                width={30}
                height={30}
              />
              <span>Tài khoản</span>
            </button>
            <button className="w-40 h-14 bg-orange rounded-2xl text-white text-2xl font-bold flex items-center justify-center space-x-2">
              <img
                src={require("../assets/icons/icon_cart.png")}
                alt="Cart Icon"
                width={30}
                height={30}
              />
              <span>Giỏ hàng</span>
            </button>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
