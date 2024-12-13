import React, { createContext, useContext, useState } from "react";

const FavorContext = createContext();

export const useFavor = () => {
    return useContext(FavorContext);
}

export const FavorProvider = ({ children }) => {
    const [favor, setFavor] = useState([]);

    const addToFavor = (product) => {
        setFavor((prevFavor) => {
            const existingProductIndex = prevFavor.findIndex(
                (item) => item.id === product.id
            );
            if (existingProductIndex !== -1) {
                console.log("Removing product:", product.name);
                return prevFavor.filter((item) => item.id !== product.id);
            } else {
                console.log("Adding product:", product.name);
                return [...prevFavor, { ...product }];
            }
        });
    };

    return (
        <FavorContext.Provider value={{ favor, setFavor, addToFavor }}>
            {children}
        </FavorContext.Provider>
    );
}
