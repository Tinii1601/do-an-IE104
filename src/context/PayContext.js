import React, { createContext, useContext, useState } from "react";

const PayContext = createContext();

export const usePay = () => useContext(PayContext);

export const PayProvider = ({ children }) => {
    const [selectedItems, setSelectedItems] = useState([]);

    return (
        <PayContext.Provider value={{ selectedItems, setSelectedItems }}>
            {children}
        </PayContext.Provider>
    );
};
