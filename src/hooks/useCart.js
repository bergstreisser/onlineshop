import React from "react";
import AppContext from "../context";

export const useCart = () => {
    const { cartItems, setCartItems } = React.useContext(AppContext);
    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
    const tax = (totalPrice * 19) / 100;

    return { cartItems, setCartItems, tax, totalPrice };
};