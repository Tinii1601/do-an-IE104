import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Account = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: "",
    dob: "",
    gender: "",
    address: "",
    phone: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveUserInfo = (e) => {
    e.preventDefault();
    alert("Thông tin tài khoản đã được lưu!");
  };

  return (
    <>
      <div className="relative z-20"><Header /></div>
      <div className="flex justify-center p-10 min-h-screen">
        <div className="bg-white p-5 rounded-lg shadow-md w-96 mr-8">
          <h2 className="font-semibold text-lg mb-4">Tài khoản của tôi</h2>
          <div>
            <button
              className={`w-full text-left py-2 px-4 rounded-full mb-2 bg-gray-200`}
              onClick={() => navigate("/account")}
            >
              Thông tin tài khoản
            </button>
            <button
              className={`w-full text-left py-2 px-4 rounded-full mb-2`}
              onClick={() => navigate("/favor")}
            >
              Sản phẩm yêu thích
            </button>
            <button
              className={`w-full text-left py-2 px-4 rounded-full mb-2`}
              onClick={() => navigate("/change-password")}
            >
              Đổi mật khẩu
            </button>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-md w-[1000px]">
          <h2 className="text-xl font-bold mb-4">Thông tin tài khoản</h2>
          <form onSubmit={handleSaveUserInfo}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Họ tên</label>
              <input
                type="text"
                name="name"
                value={userInfo.name}
                onChange={handleInputChange}
                className="w-full border rounded-full px-4 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Ngày sinh</label>
              <input
                type="date"
                name="dob"
                value={userInfo.dob}
                onChange={handleInputChange}
                className="w-full border rounded-full px-4 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Giới tính</label>
              <input
                type="text"
                name="gender"
                value={userInfo.gender}
                onChange={handleInputChange}
                className="w-full border rounded-full px-4 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Địa chỉ</label>
              <input
                type="text"
                name="address"
                value={userInfo.address}
                onChange={handleInputChange}
                className="w-full border rounded-full px-4 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Số điện thoại</label>
              <input
                type="text"
                name="phone"
                value={userInfo.phone}
                onChange={handleInputChange}
                className="w-full border rounded-full px-4 py-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={userInfo.email}
                onChange={handleInputChange}
                className="w-full border rounded-full px-4 py-2"
              />
            </div>
            <button
              type="submit"
              className="bg-gray-200 px-4 py-2 rounded-full text-black border"
            >
              Lưu thông tin
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Account;
