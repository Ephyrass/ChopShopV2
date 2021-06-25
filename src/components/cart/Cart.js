import React, { useContext } from "react";
import { createOrder } from "../Action/Order";
import { AuthContext } from "../Context/AuthProvider";
import { CartContext } from "../Context/ContextProvider";
import CartItem from "./CartItem";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const { item, setItem, showCart, setShowCart, price, setPrice } = cartContext;
  const { token } = useContext(AuthContext);

  const handleCheckout = (token, item, price) => {
    createOrder(token, item, price);
    alert("Thank you for your purchase");
    setItem([]);
    setPrice(0);
  };

  return (
    <div className={showCart ? "cart-active" : "cart"}>
      <div className='cart-container'>
        <button className='close-cart' onClick={() => setShowCart(false)}>
          [X]
        </button>

        <h3
          className='text-2xl	'
          style={{ textAlign: "center", marginTop: "15%" }}
        >
          Your cart:
        </h3>
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
        <h4 className='price '>{`Total : ${price.toFixed(2)} €`}</h4>

        {item.length < 1 ? null : (
          <button
            className='pay_button'
            onClick={() => handleCheckout(token, item, price)}
          >
            Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
