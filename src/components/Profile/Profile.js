import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { getProfile, updateProfile } from "../Action/User";

function Profile({}) {
  const [profileData, setProfileData] = useState([]);
  const [change, setChange] = useState(false);
  // Data when updating
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [adress, setAdress] = useState();
  //
  const { token } = useContext(AuthContext);

  useEffect(() => {
    getProfile(token, setProfileData);
  }, []);

  return (
    <div>
      <div className='profile mt-10 shadow-2xl rounded-lg '>
        <h3 className='text-2xl ml-9 mb-5 pt-5 '>My Profile</h3>
        <div className='xl:flex xl:justify-between  '>
          <div className='xl:w-1/5 w-11/12 m-auto xl:m-0'>
            <nav className='xl:ml-5 xl:pr-10'>
              <p className=' w-28	py-2 pl-5 my-2 text-lg text-white rounded-md border bg-purple-500'>
                Profile
              </p>
              <Link to='profile/order'>
                <p className=' w-28	py-2 pl-5 my-2 text-lg border rounded-md '>
                  Orders
                </p>
              </Link>
            </nav>
          </div>
          <div className='w-11/12 m-auto'>
            <div className='flex justify-between'>
              <div className='w-6/12 '>
                <p className='mb-1 text-gray-500 font-semibold '>FIRST NAME:</p>
                <input
                  required
                  value={firstname}
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                  className='input-settings py-2 px-5 mb-5	border-2 border-gray-400 placeholder-black'
                  type='text'
                  placeholder={
                    profileData.user ? profileData.user.firstname : ""
                  }
                />
                <p className='mb-1 text-gray-500 font-semibold'>LAST NAME:</p>
                <input
                  required
                  value={lastname}
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                  className='input-settings py-2 px-5 mb-5	border-2 border-gray-400 placeholder-black'
                  type='text'
                  placeholder={
                    profileData.user ? profileData.user.lastname : ""
                  }
                />
                <p className='mb-1 text-gray-500 font-semibold'>ADRESS:</p>
                <input
                  required
                  value={adress}
                  onChange={(e) => {
                    setAdress(e.target.value);
                  }}
                  className='input-settings py-2 px-5	mb-5 border-2 border-gray-400 placeholder-black'
                  type='text'
                  placeholder={profileData.user ? profileData.user.adress : ""}
                />
              </div>
              <div style={{ width: "50%" }}>
                <p className=' text-gray-500 font-semibold'>YOUR AVATAR</p>
              </div>
            </div>
            <hr className='border-gray-500 xl:mr-10 my-10' />
            <div className='flex justify-between items-center'>
              <div>
                <h3 className='mb-1 text-2xl text-gray-800 font-semibold'>
                  Email Adress
                </h3>
                <br />
                <p>
                  Your email adress is{" "}
                  {change ? (
                    <input
                      required
                      className='border-2 border-gray-400'
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    ></input>
                  ) : (
                    <span className='font-semibold'>
                      {profileData.user ? profileData.user.email : ""}
                    </span>
                  )}
                </p>
              </div>
            </div>
            <hr className='border-gray-500 xl:mr-10 my-10' />
            <div className=''>
              <h3 className='mb-1 text-2xl text-gray-800 font-semibold'>
                Password
              </h3>
              <br />
              {change ? (
                <div>
                  <label>New password</label>{" "}
                  <input
                    required
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className='border-2 border-gray-400'
                    type='password'
                  ></input>
                </div>
              ) : (
                ""
              )}
            </div>
            <hr className='border-gray-500 xl:mr-10 my-10' />
            <div className='flex justify-between'>
              <p className='underline mr-10 text-red-600 cursor-pointer mb-10'>
                Delete my account
              </p>
              {change ? (
                <p
                  className='underline mr-10 text-blue-600 cursor-pointer'
                  onClick={() => {
                    setChange(false);
                    updateProfile(
                      token,
                      email,
                      adress,
                      lastname,
                      password,
                      firstname
                    );
                    getProfile(token, setProfileData);
                  }}
                >
                  Confirm Change
                </p>
              ) : (
                <p
                  className='underline mr-10 text-blue-600 cursor-pointer'
                  onClick={() => {
                    setChange(true);
                  }}
                >
                  Change
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
