import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ChangePassword = () => {
    const navigate = useNavigate();
    const [passwords, setPasswords] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [passwordError, setPasswordError] = useState("");

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setPasswords((prev) => ({
            ...prev,
            [name]: value,
        }));
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
            <div className="relative z-20"><Header /></div>
            <div className="flex justify-center p-10 min-h-screen">
                <div className="bg-white p-5 rounded-lg shadow-md w-96 mr-8">
                    <h2 className="font-semibold text-lg mb-4">Tài khoản của tôi</h2>
                    <div>
                        <button
                            className={`w-full text-left py-2 px-4 rounded-full mb-2`}
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
                            className={`w-full text-left py-2 px-4 rounded-full mb-2 bg-gray-200`}
                            onClick={() => navigate("/change-password")}
                        >
                            Đổi mật khẩu
                        </button>
                    </div>
                </div>
                <div className="bg-white p-5 rounded-lg shadow-md w-[1000px]">
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
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ChangePassword;
