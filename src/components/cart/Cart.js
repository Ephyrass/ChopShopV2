import React, { useContext } from "react";
import { CartContext } from "../Context/ContextProvider";
import CartItem from "./CartItem";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const { item, setItem, showCart, setShowCart, price, setPrice } = cartContext;
  return (
    <div className={showCart ? "cart-active" : "cart"}>
      <button className='close-cart' onClick={() => setShowCart(false)}>
        [X]
      </button>

      <h3 style={{ textAlign: "center", marginTop: "15%" }}>Your cart:</h3>
      {item.length < 1 ? (
        <p className='cart-title-empty'>Your cart is Empty</p>
      ) : (
        item.map((product) => {
          return (
            <CartItem
              key={product.id}
              product={product}
              price={price}
              setPrice={setPrice}
              item={item}
              setItem={setItem}
            />
          );
        })
      )}
      <h4 className='price'>{`Total : ${price.toFixed(2)} €`}</h4>
    </div>
  );
};

export default Cart;
