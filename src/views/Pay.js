import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { usePay } from "../context/PayContext";
import { useNavigate } from "react-router-dom";

const Pay = () => {
  const { selectedItems, setSelectedItems } = usePay();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    district: "",
    ward: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) newErrors[key] = "Vui lòng nhập thông tin này.";
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setSelectedItems([]);
      alert("Đặt hàng thành công!");
      navigate("/");
    }
  };
  return (
    <>
      <Header />
      <div className="p-10 my-5 mx-20 bg-white rounded-xl">
        <p className="font-bold text-xl">Địa chỉ giao hàng</p>
        <label>Họ tên người nhận</label>
        <input
          type="text"
          name="name"
          className={`w-full border rounded-full my-2 ${errors.name ? "border-red-500" : ""
            }`}
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}

        <label>Số điện thoại</label>
        <input
          type="tel"
          name="phone"
          className={`w-full border rounded-full my-2 ${errors.phone ? "border-red-500" : ""
            }`}
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="text-red-500">{errors.phone}</p>}

        <label>Tỉnh / Thành phố</label>
        <input
          type="text"
          name="city"
          className={`w-full border rounded-full my-2 ${errors.city ? "border-red-500" : ""
            }`}
          value={formData.city}
          onChange={handleChange}
        />
        {errors.city && <p className="text-red-500">{errors.city}</p>}

        <label>Quận / Huyện</label>
        <input
          type="text"
          name="district"
          className={`w-full border rounded-full my-2 ${errors.district ? "border-red-500" : ""
            }`}
          value={formData.district}
          onChange={handleChange}
        />
        {errors.district && <p className="text-red-500">{errors.district}</p>}

        <label>Phường / Xã</label>
        <input
          type="text"
          name="ward"
          className={`w-full border rounded-full my-2 ${errors.ward ? "border-red-500" : ""
            }`}
          value={formData.ward}
          onChange={handleChange}
        />
        {errors.ward && <p className="text-red-500">{errors.ward}</p>}

        <label>Địa chỉ cụ thể</label>
        <input
          type="text"
          name="address"
          className={`w-full border rounded-full my-2 ${errors.address ? "border-red-500" : ""
            }`}
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <p className="text-red-500">{errors.address}</p>}
      </div>
      <div className="p-10 my-5 mx-20 bg-white rounded-xl">
        <p className="font-bold text-xl">Phương thức thanh toán</p>
        <div className="flex items-center my-2">
          <input type="radio" name="payment" value="cod" className="mr-2" checked="checked" />
          <label>Thanh toán khi nhận hàng</label>
        </div>
        <div className="flex items-center my-2">
          <input type="radio" name="payment" value="bank" className="mr-2" />
          <label>Thanh toán qua chuyển khoản ngân hàng</label>
        </div>
        <div className="flex items-center my-2">
          <input type="radio" name="payment" value="momo" className="mr-2" />
          <label>Thanh toán qua MoMo</label>
        </div>
        <div className="flex items-center my-2">
          <input type="radio" name="payment" value="visa" className="mr-2" />
          <label>Thanh toán qua thẻ Visa/MasterCard</label>
        </div>
      </div>
      <div className="p-10 my-5 mx-20 bg-white rounded-xl shadow-lg">
        <p className="font-bold text-xl mb-4">Mã khuyến mãi</p>
        <select className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="none">Không sử dụng mã khuyến mãi</option>
          <option value="sale5">Giảm 5%</option>
          <option value="sale10">Giảm 10%</option>
          <option value="sale15">Giảm 15%</option>
          <option value="sale20">Giảm 20%</option>
        </select>
      </div>
      <div className="p-10 my-5 mx-20 bg-white rounded-xl shadow-lg">
        <p className="font-bold text-2xl text-gray-800 mb-6 text-center">
          Kiểm tra lại đơn hàng
        </p>
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="p-3 text-left">STT</th>
              <th className="p-3 text-left">Tên sản phẩm</th>
              <th className="p-3 text-left">Giá</th>
              <th className="p-3 text-left">Số lượng</th>
              <th className="p-3 text-left">Thành tiền</th>
            </tr>
          </thead>
          <tbody>
            {selectedItems.map((item, index) => (
              <tr
                key={item.id}
                className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100`}
              >
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{item.name}</td>
                <td className="p-3">
                  {(item.gia * (1 - item.sale / 100)).toLocaleString()} đ
                </td>
                <td className="p-3">{item.quantity}</td>
                <td className="p-3">
                  {((item.gia * (1 - item.sale / 100)) * item.quantity).toLocaleString()} đ
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-right font-bold text-xl mt-6 text-gray-800">
          Tổng cộng:{" "}
          <span className="text-orange-500">
            {selectedItems
              .reduce(
                (acc, item) =>
                  acc + (item.gia * (1 - item.sale / 100)) * item.quantity,
                0
              )
              .toLocaleString()}{" "}
            đ
          </span>
        </p>
        <div className="flex justify-end mt-8">
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-lg px-6 py-3 transition duration-300 ease-in-out"
            onClick={handleSubmit}
          >
            Xác nhận đơn hàng
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Pay;
