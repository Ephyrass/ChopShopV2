import React, { useState, useContext } from "react";
import { Signup } from "../Action/User";
import { AuthContext } from "../Context/AuthProvider";

function SignUp({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [adress, setadress] = useState("");
  const { setAuth, setToken } = useContext(AuthContext);

  return (
    <div>
      <h2 className='text-center text-4xl mt-20'>Sign in</h2>
      <div className='w-full'>
        <form className='flex justify-between'>
          <div className='w-1/2'>
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
            <div className='m-auto xl:w-3/5 sm:w-4/5 mt-10'>
              <label>Confirm password</label>
              <br />
              <input
                className='w-full p-3 bg-gray-600 text-gray-100 text-lg rounded-md'
                type='password'
                required
                placeholder='Confirm your password'
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
              />
            </div>
          </div>
          <div className='w-1/2'>
            <div className='m-auto xl:w-3/5 sm:w-4/5 mt-10'>
              <label>Firstname</label>
              <br />
              <input
                className='w-full p-3 bg-gray-600 text-gray-100 text-lg rounded-md'
                type='text'
                required
                placeholder='Your firstname'
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className=' m-auto xl:w-3/5 sm:w-4/5 mt-10'>
              <label>Lastname</label>
              <br />
              <input
                className='w-full p-3 bg-gray-600 text-gray-100 text-lg rounded-md'
                type='text'
                required
                placeholder='Your Lastname'
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className='m-auto xl:w-3/5 sm:w-4/5 mt-10'>
              <label>Adress</label>
              <br />
              <input
                className='w-full p-3 bg-gray-600 text-gray-100 text-lg rounded-md'
                type='text'
                required
                placeholder='Your Adress'
                value={adress}
                onChange={(e) => setadress(e.target.value)}
              />
            </div>
          </div>
        </form>
        <div className='flex justify-center  m-auto xl:w-3/5 sm:w-4/5 mt-10 mt-20'>
          <button
            onClick={(e) =>
              Signup(
                e,
                email,
                password,
                firstname,
                lastname,
                adress,
                history,
                setAuth,
                setToken
              )
            }
            className=' w-1/2 p-3 bg-purple-500 text-gray-50 text-lg rounded-md'
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
