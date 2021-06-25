import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/ContextProvider";

function Item({ title, price, desc, img, id }) {
  const cartContext = useContext(CartContext);

  const { addToCart } = cartContext;
  return (
    <div className='item'>
      <Link
        to={{
          pathname: `/shop/${title}`,
          state: {
            title: title,
            price: price,
            id: id,
            img: img,
            desc: desc,
          },
        }}
      >
        <img
          style={{
            borderRadius: "10px 10px 0px 0px",
            width: "300px",
            height: "300px",
          }}
          src={img}
          alt={title}
        />
      </Link>
      <h3 style={{ textAlign: "center", fontSize: "24px", margin: "1% 0" }}>
        {title}
      </h3>
      <p className='ml-4' style={{ height: "50px" }}>
        <em>{desc}</em>
      </p>
      <h4 className='ml-4 mb-5'>{price} €</h4>
      <div className='text-center'>
        <button
          className='button_buy'
          onClick={() => addToCart(title, price, id, img)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Item;
