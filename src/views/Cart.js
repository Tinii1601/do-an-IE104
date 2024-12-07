import React, { useState, useCallback } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Cart = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      image: require("../assets/images/Van_hoc/lu-tre-duong-tau.jpg"),
      name: "Lũ trẻ đường tàu",
      price: 150000,
      quantity: 1,
      selected: false,
    },
    {
      id: 2,
      image: require("../assets/images/Van_hoc/lu-tre-duong-tau.jpg"),
      name: "Lũ trẻ đường tàu",
      price: 150000,
      quantity: 1,
      selected: false,
    },
  ]);

  const handleQuantityChange = useCallback((index, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item, i) =>
        i === index
          ? { ...item, quantity: Math.max(1, newQuantity || 1) }
          : item
      )
    );
  }, []);

  const handleRemove = useCallback((index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  }, []);

  const handleSelect = useCallback((index) => {
    setCart((prevCart) =>
      prevCart.map((item, i) =>
        i === index ? { ...item, selected: !item.selected } : item
      )
    );
  }, []);

  const handleSelectAll = useCallback(() => {
    const allSelected = cart.every((item) => item.selected);
    setCart((prevCart) =>
      prevCart.map((item) => ({ ...item, selected: !allSelected }))
    );
  }, [cart]);

  const totalAmount = cart
    .filter((item) => item.selected)
    .reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
      <div className="relative z-20">
        <Header />
      </div>
      <div className="mx-20 my-5 bg-white rounded-lg p-5">
        <p className="font-bold text-3xl text-center">Giỏ hàng của tôi</p>
        <p className="text-xl text-center">Tổng sản phẩm: {cart.length}</p>
        <table className="w-full mt-5 border-collapse">
          <thead>
            <tr className="border-b-2 py-2">
              <th className="text-left text-xl p-2">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={cart.every((item) => item.selected)}
                  onChange={handleSelectAll}
                />
                <label>Chọn tất cả sản phẩm</label>
              </th>
              <th className="text-xl text-left p-2">Số lượng</th>
              <th className="text-xl text-left p-2">Đơn giá</th>
              <th className="text-xl text-left p-2">Thành tiền</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item.id} className="border-b-2 py-2">
                <td className="p-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={item.selected}
                      onChange={() => handleSelect(index)}
                    />
                    <img
                      src={item.image}
                      alt={item.name}
                      width="40px"
                      className="mr-2"
                    />
                    <p className="text-xl">{item.name}</p>
                  </div>
                </td>
                <td className="p-2">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(index, parseInt(e.target.value, 10))
                    }
                    className="w-20 border-2 rounded-lg"
                    min="1"
                  />
                </td>
                <td className="p-2">{item.price.toLocaleString()} VND</td>
                <td className="p-2">
                  {(item.price * item.quantity).toLocaleString()} VND
                </td>
                <td className="p-2">
                  <button
                    onClick={() => handleRemove(index)}
                    className="text-red-500"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-5 text-right">
          <p className="text-2xl font-bold">
            Tổng thanh toán: {totalAmount.toLocaleString()} VND
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
