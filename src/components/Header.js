import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showFolderOptions, setShowFolderOptions] = useState(false);
  const [showAccountOptions, setShowAccountOptions] = useState(false);

  const categories = [
    "Kinh tế",
    "Văn học",
    "Kỹ năng sống",
    "Sách thiếu nhi",
    "Văn hóa và du lịch",
  ];

  const accountOptions = [
    "Thông tin tài khoản",
    "Quản lý đơn hàng",
    "Đăng nhập",
    "Đăng ký",
  ];

  const renderDropdown = (options, onClickOutside) => (
    <div className="absolute w-48 bg-white shadow-lg">
      {options.map((option) => (
        <Link key={option} to="/product_mix">
          <div
            className="text-xl p-2 hover:bg-gray-200 cursor-pointer"
            onClick={onClickOutside}
          >
            {option}
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <>
      {/* Top Bar */}
      <div className="flex bg-white justify-center items-center space-x-4">
        <div className="mx-5 text-center">
          <p className="font-bold text-xl">Logo</p>
        </div>
        <p className="p-4 text-xl">
          Hotline: 1900xxxx Email: hotro@nhasach.com
        </p>
        {["facebook", "messenger", "zalo"].map((icon) => (
          <img
            key={icon}
            src={require(`../assets/icons/${icon}.png`)}
            alt={`${icon} Icon`}
            width="30px"
          />
        ))}
      </div>

      {/* Navigation Bar */}
      <div className="bg-xanh flex items-center justify-between p-1">
        <Link to="/">
          <img
            src={require("../assets/icons/home.png")}
            alt="Home Icon"
            width="30px"
            className="ml-5 cursor-pointer"
          />
        </Link>
        {/* Categories Dropdown */}
        <div className="relative">
          <div
            onClick={() => setShowFolderOptions(!showFolderOptions)}
            className={`ml-4 p-1 text-center cursor-pointer ${
              showFolderOptions ? "bg-lime-700" : "hover:bg-lime-700"
            }`}
          >
            <p className="font-bold text-xl text-white">
              Danh mục sản phẩm
              <span className="pl-1 opacity-75 text-base">
                {showFolderOptions ? "∧" : "∨"}
              </span>
            </p>
          </div>
          {showFolderOptions &&
            renderDropdown(categories, () => setShowFolderOptions(false))}
        </div>

        {/* Search Bar */}
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

        {/* Account Dropdown */}
        <div className="relative">
          <div
            onClick={() => setShowAccountOptions(!showAccountOptions)}
            className={`ml-4 flex p-1 text-center cursor-pointer ${
              showAccountOptions ? "bg-lime-700" : "hover:bg-lime-700"
            }`}
          >
            <img
              src={require("../assets/icons/icon_user.png")}
              alt="User Icon"
              width="30px"
            />
            <p className="ml-1 font-bold text-xl text-white">
              Tài khoản
              <span className="pl-1 opacity-75 text-base">
                {showAccountOptions ? "∧" : "∨"}
              </span>
            </p>
          </div>
          {showAccountOptions &&
            renderDropdown(accountOptions, () => setShowAccountOptions(false))}
        </div>

        {/* Cart */}
        <Link to="/Cart">
          <div className="mr-4 p-1 text-center flex hover:bg-lime-700 cursor-pointer">
            <img
              src={require("../assets/icons/icon_cart.png")}
              alt="Cart Icon"
              width="30px"
            />
            <p className="ml-1 font-bold text-xl text-white">Giỏ hàng</p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Header;
