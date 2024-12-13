import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import data from "../assets/data";

const Signin = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = () => {
        if (!username || !password || !confirmPassword) {
            setErrorMessage("Vui lòng điền đầy đủ thông tin.");
            return;
        }
        if (data.users.find((user) => user.username === username)) {
            setErrorMessage("Tên đăng nhập đã tồn tại.");
            return;
        }
        if (password !== confirmPassword) {
            setErrorMessage("Mật khẩu và Nhập lại mật khẩu không khớp.");
            return;
        }
        data.users.push({ username, password });
        setErrorMessage("");
        alert("Đăng ký thành công!");
        navigate("/login");
    };

    return (
        <>
            <Header />
            <div className="bg-white w-1/2 my-10 mx-1/4 p-10 rounded-xl">
                <div className="w-1/2 my-10 mx-auto border-gray-200 border rounded-full">
                    <button
                        type="button"
                        className="p-4 w-1/2 rounded-l-full"
                        onClick={() => navigate("/login")}
                    >
                        Đăng nhập
                    </button>
                    <button
                        type="button"
                        className="bg-gray-200 p-4 w-1/2 rounded-r-full"
                        onClick={() => navigate("/signin")}
                    >
                        Đăng ký
                    </button>
                </div>
                <label className="block text-sm font-medium my-2 w-1/2 mx-1/4">
                    Tên đăng nhập
                </label>
                <input
                    type="text"
                    placeholder="Tên đăng nhập"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-1/2 mx-1/4 border rounded-full px-4 py-2"
                />
                <label className="block text-sm font-medium my-2 w-1/2 mx-1/4">
                    Mật khẩu
                </label>
                <input
                    type="password"
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-1/2 mx-1/4 border rounded-full px-4 py-2"
                />
                <label className="block text-sm font-medium my-2 w-1/2 mx-1/4">
                    Nhập lại mật khẩu
                </label>
                <input
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-1/2 mx-1/4 border rounded-full px-4 py-2"
                />
                {errorMessage && (
                    <p className="text-red-500 text-center">{errorMessage}</p>
                )}
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="block bg-gray-200 p-4 w-1/4 my-10 mx-3/8 rounded-full"
                >
                    Đăng ký
                </button>
            </div>
            <Footer />
        </>
    );
};

export default Signin;
