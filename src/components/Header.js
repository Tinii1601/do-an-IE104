import React from "react";
class Header extends React.Component {
  state = {
    showAccountOptions: false,
  };

  render() {
    return (
      <>
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

          <div className="relative">
            <button
              className="w-40 h-14 bg-orange rounded-2xl text-white text-2xl font-bold flex items-center justify-center space-x-2"
              onClick={() =>
                this.setState({
                  showAccountOptions: !this.state.showAccountOptions,
                })
              }
            >
              <img
                src={require("../assets/icons/icon_user.png")}
                alt="User Icon"
                width={30}
                height={30}
              />
              <span>Tài khoản</span>
            </button>
            {this.state.showAccountOptions && (
              <div className="absolute top-full mt-2 w-40 bg-white shadow-lg rounded-lg">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-200">
                  Tài khoản của tôi
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-200">
                  Đơn hàng của tôi
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-200">
                  Đăng nhập
                </button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-200">
                  Đăng ký
                </button>
              </div>
            )}
          </div>
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
        {this.state.showAccountOptions && (
          <div
            className="fixed inset-0"
            onClick={() => this.setState({ showAccountOptions: false })}
          ></div>
        )}
      </>
    );
  }
}

export default Header;
