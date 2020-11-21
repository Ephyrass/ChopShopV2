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
    <header className='bg-gray-800 flex p-5 justify-around items-center '>
      <Link to='/' className='logo text-4xl '>
        <h1>CHOP SHOP</h1>
      </Link>
      <nav className='navigation '>
        <ul className='flex space-x-5'>
          <Link to='/'>
            <li className='px-5 py-2 hover:text-white hover:bg-gray-700 rounded cursor-pointer'>
              Shop
            </li>
          </Link>
          <Link to='/profile'>
            <li className='px-5 py-2 hover:text-white hover:bg-gray-700 rounded cursor-pointer'>
              Profile
            </li>
          </Link>
          <li
            className='px-5 py-2 hover:text-white hover:bg-gray-700 rounded cursor-pointer'
            onClick={handleClick}
          >
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
