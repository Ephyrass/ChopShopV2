import React, { useContext } from "react";
import { CartContext } from "../Context/ContextProvider";

const ProductItem = (props) => {
  const cartContext = useContext(CartContext);

  const { addToCart } = cartContext;
  return (
    <>
      <div className='single_product'>
        <div>
          <img
            src={props.location.state.img}
            alt={props.location.state.title}
          />
        </div>
        <div className='single_product_information'>
          <h2>{props.location.state.title}</h2>
          <h3 className='price'>Price: {props.location.state.price}€</h3>
          <p>{props.location.state.desc}</p>
          <button
            className='button_buy'
            onClick={() =>
              addToCart(
                props.location.state.title,
                props.location.state.price,
                props.location.state.id,
                props.location.state.img
              )
            }
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
