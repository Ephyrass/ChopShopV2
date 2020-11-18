import React, { createContext, useState } from "react";

export const CartContext = createContext();

function ContextProvider({ children }) {
  const [showCart, setShowCart] = useState(false);
  const [item, setItem] = useState([]);
  const [price, setPrice] = useState(0);

  const addToCart = (title, prix, id, img) => {
    const product = {
      title: title,
      price: prix,
      id: id,
      img: img,
      unit: 1,
    };
    const checkIfExist = (obj) => obj.id === product.id;
    if (item.some(checkIfExist)) {
    } else {
      setItem((array) => [...array, product]);
      setPrice(price + product.price);
    }
    setShowCart(true);
    console.log(product);
  };

  return (
    <CartContext.Provider
      value={{
        showCart,
        setShowCart,
        item,
        setItem,
        price,
        setPrice,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default ContextProvider;
