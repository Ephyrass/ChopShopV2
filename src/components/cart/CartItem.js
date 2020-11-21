import React from "react";

function CartItem({ product, price, setPrice, item, setItem }) {
  const updateProductQty = (value, productPrice) => {
    console.log(product);
    let objIndex = item.findIndex((obj) => obj.id === product.id);
    if (item[objIndex].unit === 1 && value === -1) {
      item[objIndex].unit = 1;
      productPrice = 0;
    } else {
      item[objIndex].unit += value;
    }

    value === 1
      ? setPrice((price += productPrice))
      : setPrice((price -= productPrice));
  };

  const deleteProduct = () => {
    let objIndex = item.indexOf(product);
    setPrice((price -= product.price * item[objIndex].unit));
    item.splice(objIndex, 1);
  };

  return (
    <>
      <div className='cart-title' key={product.id}>
        <h4>
          {product.title} - {product.price}€ <span>x</span>{" "}
          <button
            className='quantity-button'
            onClick={() => {
              updateProductQty(-1, product.price);
            }}
          >
            {" "}
            -{" "}
          </button>
          {product.unit}
          <button
            className='quantity-button'
            onClick={() => {
              updateProductQty(+1, product.price);
            }}
          >
            +
          </button>
        </h4>{" "}
        <img className='card-img' src={product.img} alt={product.title} />
        <span className='delete-product' onClick={deleteProduct}>
          x
        </span>
      </div>
    </>
  );
}

export default CartItem;
