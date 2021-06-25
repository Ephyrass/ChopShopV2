import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { login } from "../Action/User";
import { Link } from "react-router-dom";

function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuth, setToken } = useContext(AuthContext);

  return (
    <div>
      <h2 className='text-center text-4xl mt-20'>Login</h2>
      <div className='w-1/2 mx-auto '>
        <form
          onSubmit={(e) =>
            login(e, email, password, history, setAuth, setToken)
          }
        >
          <div className='m-auto xl:w-3/5 sm:w-4/5 mt-10 text-gray-800'>
            <label>Email Adress</label>
            <br />
            <input
              className='w-full p-3 bg-gray-600 text-gray-100 text-lg rounded-md'
              type='mail'
              placeholder='Your mail'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='m-auto xl:w-3/5 sm:w-4/5 mt-10'>
            <label>Password</label>
            <br />
            <input
              className='w-full p-3 bg-gray-600 text-gray-100 text-lg rounded-md'
              type='password'
              required
              placeholder='Your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='w-2/5 m-auto mt-10'>
            <button className='w-full p-3 bg-purple-500 text-gray-50 text-lg rounded-md'>
              Login
            </button>
          </div>
        </form>
        <Link to='/signup'>
          <p>No account ? Signup</p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
