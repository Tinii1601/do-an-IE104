import React from "react";
class Header extends React.Component {
  state = {
    showFolderOptions: false,
    showAccountOptions: false,
  };

  render() {
    return (
      <>
        <div className="flex justify-center items-center space-x-4">
          <div className="mx-5 text-center">
            <p className="font-bold text-xl">Logo</p>
          </div>
          <p className="p-4 text-xl">
            Hotline: 1900xxxx Email: hotro@nhasach.com
          </p>
          <img
            src={require("../assets/icons/facebook.png")}
            alt="Facebook Icon"
            width="30px"
          ></img>
          <img
            src={require("../assets/icons/messenger.png")}
            alt="Messenger Icon"
            width="30px"
          ></img>
          <img
            src={require("../assets/icons/zalo.jpeg")}
            alt="Zalo Icon"
            width="30px"
          ></img>
        </div>
        <div className="bg-xanh flex items-center justify-between p-1">
          <div className="relative">
            <div
              onClick={() =>
                this.setState({
                  showFolderOptions: !this.state.showFolderOptions,
                })
              }
              className={`ml-4 p-1 text-center cursor-pointer ${
                this.state.showFolderOptions
                  ? "bg-lime-700"
                  : "hover:bg-lime-700"
              }`}
            >
              <p className="font-bold text-xl text-white">
                Danh mục sản phẩm
                <span className="pl-1 opacity-75 text-base">
                  {this.state.showFolderOptions ? "∧" : "∨"}
                </span>
              </p>
            </div>
            {this.state.showFolderOptions && (
              <div className="absolute left-4 w-full bg-white shadow-lg">
                {[
                  "Kinh tế",
                  "Văn học",
                  "Kỹ năng sống",
                  "Sách thiếu nhi",
                  "Văn hóa và du lịch",
                ].map((category) => (
                  <div
                    key={category}
                    className="text-xl p-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="relative w-1/2">
            <img
              src={require("../assets/icons/icon_search.png")}
              alt="Search Icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2"
              width="30px"
            />
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm"
              className="w-full h-10 rounded-xl pl-12 pr-5"
            />
          </div>
          <div className="relative">
            <div
              onClick={() =>
                this.setState({
                  showAccountOptions: !this.state.showAccountOptions,
                })
              }
              className={`ml-4 flex p-1 text-center cursor-pointer ${
                this.state.showAccountOptions
                  ? "bg-lime-700"
                  : "hover:bg-lime-700"
              }`}
            >
              <img
                src={require("../assets/icons/icon_user.png")}
                width="30px"
              />
              <p className="ml-1 font-bold text-xl text-white">
                Tài khoản
                <span className="pl-1 opacity-75 text-base">
                  {this.state.showAccountOptions ? "∧" : "∨"}
                </span>
              </p>
            </div>
            {this.state.showAccountOptions && (
              <div className="absolute w-48 bg-white shadow-lg">
                {[
                  "Thông tin tài khoản",
                  "Quản lý đơn hàng",
                  "Đăng nhập",
                  "Đăng ký",
                ].map((category) => (
                  <div
                    key={category}
                    className="text-xl p-2 hover:bg-gray-200 cursor-pointer"
                  >
                    {category}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mr-4 p-1 text-center flex hover:bg-lime-700 cursor-pointer">
            <img src={require("../assets/icons/icon_cart.png")} width="30px" />
            <p className="ml-1 font-bold text-xl text-white">Giỏ hàng</p>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
