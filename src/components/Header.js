import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showFolderOptions, setShowFolderOptions] = useState(false);
  const [showAccountOptions, setShowAccountOptions] = useState(false);
  const { cart } = useCart(); // Truy cập giỏ hàng từ CartContext
  const { isLoggedIn } = useAuth(); // Truy cập trạng thái đăng nhập từ AuthContext
  const navigate = useNavigate();

  // Tính tổng số lượng sản phẩm trong giỏ hàng
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

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
            className={`ml-4 p-1 text-center cursor-pointer ${showFolderOptions ? "bg-lime-700" : "hover:bg-lime-700"
              }`}
          >
            <p className="font-bold text-xl text-white">
              Danh mục sản phẩm
              <span className="pl-1 opacity-75 text-base">
                {showFolderOptions ? "∧" : "∨"}
              </span>
            </p>
          </div>
          {showFolderOptions && (
            <div className="absolute left-4 w-full bg-white shadow-lg">
              <Link to="/product_mix/Van_hoc">
                <div className="text-xl p-2 hover:bg-gray-200 cursor-pointer">
                  Sách văn học
                </div>
              </Link>
              <Link to="/product_mix/Kinh_te">
                <div className="text-xl p-2 hover:bg-gray-200 cursor-pointer">
                  Sách kinh tế
                </div>
              </Link>
              <Link to="/product_mix/Ky_nang_song">
                <div className="text-xl p-2 hover:bg-gray-200 cursor-pointer">
                  Sách kỹ năng sống
                </div>
              </Link>
              <Link to="/product_mix/Thieu_nhi">
                <div className="text-xl p-2 hover:bg-gray-200 cursor-pointer">
                  Sách thiếu nhi
                </div>
              </Link>
              <Link to="/product_mix/vh_dl">
                <div className="text-xl p-2 hover:bg-gray-200 cursor-pointer">
                  Văn hóa và du lịch
                </div>
              </Link>
            </div>
          )}
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
            className={`ml-4 flex p-1 text-center cursor-pointer ${showAccountOptions ? "bg-lime-700" : "hover:bg-lime-700"
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
          {showAccountOptions && <div className="absolute w-48 bg-white shadow-lg">
            <Link to="/account">
              <div className="text-xl p-2 hover:bg-gray-200 cursor-pointer">
                Thông tin tài khoản
              </div>
            </Link>
            <Link to="/account">
              <div className="text-xl p-2 hover:bg-gray-200 cursor-pointer">
                Đơn hàng của tôi
              </div>
            </Link>
            <Link to="/account">
              <div className="text-xl p-2 hover:bg-gray-200 cursor-pointer">
                Đổi mật khẩu
              </div>
            </Link>
            <Link to="/login">
              <div className="text-xl p-2 hover:bg-gray-200 cursor-pointer">
                Đăng nhập
              </div>
            </Link>
            <Link to="/login">
              <div className="text-xl p-2 hover:bg-gray-200 cursor-pointer">
                Đăng ký
              </div>
            </Link>
          </div>
          }
        </div>
        <div className="relative mr-4 p-1 text-center flex hover:bg-lime-700 cursor-pointer"
          onClick={() => {
            if (!isLoggedIn) {
              alert("Bạn cần đăng nhập để thêm vào giỏ hàng!");
              navigate("/login"); // Chuyển hướng đến trang đăng nhập
              return;
            }
            navigate("/cart"); // Chuyển hướng đến trang giỏ hàng
          }
          }>
          <img
            src={require("../assets/icons/icon_cart.png")}
            alt="Cart Icon"
            width="30px"
          />
          <p className="ml-1 font-bold text-xl text-white">Giỏ hàng</p>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-cam text-white text-sm font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
