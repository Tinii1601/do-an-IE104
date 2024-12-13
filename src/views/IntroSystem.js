import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const IntroSystem = () => {
  return (
    <>
      <div className="relative z-20">
        <Header />
      </div>
      <div className="w-4/5 bg-white p-8 mx-auto my-12 rounded-lg shadow-md">
        <h1 className="text-3xl font-extrabold mb-5">Hệ thống Nhà sách UIT</h1>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 text-left">STT</th>
              <th className="border border-gray-300 p-2 text-left">NHÀ SÁCH</th>
              <th className="border border-gray-300 p-2 text-left">ĐỊA CHỈ</th>
              <th className="border border-gray-300 p-2 text-left">EMAIL</th>
              <th className="border border-gray-300 p-2 text-left">SĐT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">1</td>
              <td className="border border-gray-300 p-2">UIT - Thủ Đức</td>
              <td className="border border-gray-300 p-2">Tầng 3 - Vincom Plaza, 50 Lê Văn Việt, P. Hiệp Phú, TP. Thủ Đức, TP. HCM</td>
              <td className="border border-gray-300 p-2">nslevanviet@gm.uit.edu.vn</td>
              <td className="border border-gray-300 p-2">0915 050 940</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="border border-gray-300 p-2">2</td>
              <td className="border border-gray-300 p-2">UIT - Quận 1</td>
              <td className="border border-gray-300 p-2">Tầng 4 - Saigon Centre, 65 Lê Lợi, P. Bến Nghé, Q.1, TP. HCM</td>
              <td className="border border-gray-300 p-2">nsleloi@gm.uit.edu.vn</td>
              <td className="border border-gray-300 p-2">0915 501 287</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">3</td>
              <td className="border border-gray-300 p-2">UIT - Phú Nhuận</td>
              <td className="border border-gray-300 p-2">Tầng 2 - Co.opmart, 48 Hoa Sứ, P.7, Q. Phú Nhuận, TP. HCM</td>
              <td className="border border-gray-300 p-2">nsrachmieu@gm.uit.edu.vn</td>
              <td className="border border-gray-300 p-2">0914 129 286</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

export default IntroSystem;
