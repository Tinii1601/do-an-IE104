import React from "react";
import { useFavor } from "../context/FavorContext";
import { useNavigate } from "react-router-dom";
import Product from "../components/Product";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Favor = () => {
    const { favor } = useFavor();
    const navigate = useNavigate();
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
                            className={`w-full text-left py-2 px-4 rounded-full mb-2 bg-gray-200`}
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
                    <h3 className="text-2xl font-medium">Danh sách sản phẩm yêu thích</h3>
                    {favor.length > 0 ? (
                        <div className="grid grid-cols-4 gap-3">
                            {favor.map((product) => (
                                <Product key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center text-xl h-60">Danh sách yêu thích trống.</div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Favor;