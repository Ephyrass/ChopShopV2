import React from "react";
import { CartContext } from "./Context/ContextProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const cartContext = useContext(CartContext);

  const handleClick = () => {
    cartContext.setShowCart(!cartContext.showCart);
  };

  return (
    <header>
      <Link to='/' className='logo'>
        <h1>CHOP SHOP</h1>
      </Link>
      <nav className='navigation'>
        <ul>
          <li>
            <Link to='/'>Shop</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li style={{ cursor: "pointer" }} onClick={handleClick}>
            Cart{" "}
            {cartContext.item.length === 0 ? null : (
              <>| {cartContext.item.length}</>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
