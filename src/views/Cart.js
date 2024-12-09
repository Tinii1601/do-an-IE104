import React, { useCallback } from "react";
import { useCart } from "../context/CartContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Cart = () => {
  const { cart, setCart } = useCart();

  const handleQuantityChange = useCallback(
    (index, newQuantity) => {
      setCart((prevCart) =>
        prevCart.map((item, i) =>
          i === index
            ? { ...item, quantity: Math.max(1, newQuantity || 1) }
            : item
        )
      );
    },
    [setCart]
  );

  const handleRemove = useCallback(
    (index) => {
      setCart((prevCart) => prevCart.filter((_, i) => i !== index));
    },
    [setCart]
  );

  const handleSelect = useCallback(
    (index) => {
      setCart((prevCart) =>
        prevCart.map((item, i) =>
          i === index ? { ...item, selected: !item.selected } : item
        )
      );
    },
    [setCart]
  );

  const handleSelectAll = useCallback(() => {
    const allSelected = cart.every((item) => item.selected);
    setCart((prevCart) =>
      prevCart.map((item) => ({ ...item, selected: !allSelected }))
    );
  }, [cart, setCart]);

  const totalAmount = cart
    .filter((item) => item.selected)
    .reduce((total, item) => total + item.gia * item.quantity, 0);

  return (
    <>
      <div className="relative z-20">
        <Header />
      </div>

      <div className="mx-20 my-5 bg-white rounded-lg p-5">
        <p className="font-bold text-3xl text-center">Giỏ hàng của tôi</p>
        {cart.length === 0 ? (
          <p className="text-xl text-center">Giỏ hàng đang trống</p>
        ) : (
          <>
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
                    <td className="p-2">{item.gia.toLocaleString()} VND</td>
                    <td className="p-2">
                      {(item.gia * item.quantity).toLocaleString()} VND
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
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
