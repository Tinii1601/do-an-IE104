import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Account() {
  const [activeSection, setActiveSection] = useState("accountInfo");
  const [userInfo, setUserInfo] = useState({
    name: "",
    dob: "",
    gender: "",
    address: "",
    phone: "",
    email: "",
  });
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [passwordError, setPasswordError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSaveUserInfo = (e) => {
    e.preventDefault();
    alert("Thông tin tài khoản đã được lưu!");
  };

  const handleSavePassword = (e) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      setPasswordError("Mật khẩu nhập lại không khớp!");
    } else {
      setPasswordError("");
      alert("Mật khẩu đã được thay đổi thành công!");
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-center bg-gray-100 p-10 min-h-screen">
        <div className="bg-white p-5 rounded-lg shadow-md w-96 mr-8">
          <h2 className="font-semibold text-lg mb-4">Tài khoản của tôi</h2>
          <div>
            <button
              onClick={() => setActiveSection("accountInfo")}
              className={`w-full text-left py-2 px-4 rounded-full mb-2 border ${
                activeSection === "accountInfo" ? "bg-gray-200" : "bg-white"
              }`}
            >
              Thông tin tài khoản
            </button>
            <button
              onClick={() => setActiveSection("orderManagement")}
              className={`w-full text-left py-2 px-4 rounded-full mb-2 border ${
                activeSection === "orderManagement" ? "bg-gray-200" : "bg-white"
              }`}
            >
              Quản lý đơn hàng
            </button>
            <button
              onClick={() => setActiveSection("changePassword")}
              className={`w-full text-left py-2 px-4 rounded-full mb-2 border ${
                activeSection === "changePassword" ? "bg-gray-200" : "bg-white"
              }`}
            >
              Đổi mật khẩu
            </button>
          </div>
        </div>

        <div className="bg-white p-5 rounded-lg shadow-md w-[1000px]">
          {activeSection === "accountInfo" && (
            <>
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
            </>
          )}

          {activeSection === "orderManagement" && (
            <>
              <h2 className="text-xl font-bold mb-4">Quản lý đơn hàng</h2>
              <div className="flex gap-4 mb-4">
                <button className="bg-gray-200 px-4 py-2 rounded-full">Tất cả đơn</button>
                <button className="bg-gray-200 px-4 py-2 rounded-full">Đang xử lý</button>
                <button className="bg-gray-200 px-4 py-2 rounded-full">Đang vận chuyển</button>
                <button className="bg-gray-200 px-4 py-2 rounded-full">Đã giao</button>
                <button className="bg-gray-200 px-4 py-2 rounded-full">Đã hủy</button>
              </div>
              <div className="border p-4 rounded-lg">
                <p className="text-gray-500">Bạn chưa có đơn hàng nào</p>
              </div>
            </>
          )}

          {activeSection === "changePassword" && (
            <>
              <h2 className="text-xl font-bold mb-4">Đổi mật khẩu</h2>
              <form onSubmit={handleSavePassword}>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Mật khẩu hiện tại</label>
                  <input
                    type="password"
                    name="currentPassword"
                    value={passwords.currentPassword}
                    onChange={handlePasswordChange}
                    className="w-full border rounded-full px-4 py-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Mật khẩu mới</label>
                  <input
                    type="password"
                    name="newPassword"
                    value={passwords.newPassword}
                    onChange={handlePasswordChange}
                    className="w-full border rounded-full px-4 py-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium mb-2">Nhập lại mật khẩu mới</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={passwords.confirmPassword}
                    onChange={handlePasswordChange}
                    className="w-full border rounded-full px-4 py-2"
                  />
                </div>
                {passwordError && <p className="text-red-500">{passwordError}</p>}
                <button
                  type="submit"
                  className="bg-gray-200 px-4 py-2 rounded-full text-black border"
                >
                  Lưu thay đổi
                </button>
              </form>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Account;
