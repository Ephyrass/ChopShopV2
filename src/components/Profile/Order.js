import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { getOrders } from "../Action/Order";
import { AuthContext } from "../Context/AuthProvider";

function Order() {
  const [orders, setOrders] = useState("");
  const { token } = useContext(AuthContext);

  useEffect(() => {
    getOrders(token, setOrders);
  }, []);
  console.log(orders);

  return (
    <div>
      <div className='profile mt-10 shadow-2xl rounded-lg '>
        <h3 className='text-2xl ml-9 mb-5 pt-5 '>My Orders</h3>
        <div className='xl:flex xl:justify-between  '>
          <div className='xl:w-1/5 w-11/12 m-auto xl:m-0'>
            <nav className='xl:ml-5 xl:pr-10'>
              <Link to='/profile'>
                <p className=' w-28	py-2 pl-5 my-2 text-lg border rounded-md '>
                  Profile
                </p>
              </Link>
              <p className='w-28	py-2 pl-5 my-2 text-lg text-white rounded-md border  bg-purple-500'>
                Orders
              </p>
            </nav>
          </div>
          <div className='w-11/12 m-auto'>
            <h3 className='mb-1 text-2xl text-gray-800 font-semibold'>
              ORDERS:
            </h3>
            <br />
            {orders ? (
              orders.map((order) => (
                <p key={order._id} className='mt-2'>
                  Order n°<strong>{order._id}</strong>
                  {order.items.map((item) => (
                    <p>{item.title}</p>
                  ))}
                  Total: {order.price}€
                </p>
              ))
            ) : (
              <p>No orders yet.</p>
            )}
            <hr className='border-gray-500 xl:mr-10 my-10' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
