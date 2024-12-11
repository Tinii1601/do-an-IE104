import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity = 1) => {
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex(
                (item) => item.id === product.id
            );

            if (existingProductIndex !== -1) {
                // Sản phẩm đã tồn tại, tăng số lượng
                return prevCart.map((item, index) =>
                    index === existingProductIndex
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                // Thêm sản phẩm mới vào giỏ hàng
                return [...prevCart, { ...product, quantity }];
            }
        });
    };

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
