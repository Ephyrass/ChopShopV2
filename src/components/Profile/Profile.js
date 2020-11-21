import React from "react";

function Profile() {
  return (
    <div>
      <div className='profile mt-10 shadow-2xl rounded-lg '>
        <h3 className='text-2xl ml-9 mb-5 pt-5 '>My Profile</h3>
        <div className='flex justify-between'>
          <div style={{ width: "20%" }}>
            <nav className='ml-5 pr-10'>
              <p className='py-2 pl-5 my-2 text-lg text-white rounded-md  bg-purple-500'>
                Profile
              </p>
              <p className='py-2 pl-5 my-2 text-lg  rounded-md '>Orders</p>
            </nav>
          </div>
          <div style={{ width: "80%" }}>
            <div className='flex justify-between'>
              <div style={{ width: "50%" }}>
                <p className='mb-1 text-gray-500 font-semibold '>FIRST NAME:</p>
                <input
                  className='input-settings py-2 px-5 mb-5	border-2 border-gray-400 placeholder-black'
                  type='text'
                  placeholder='Jean-Baptiste'
                />
                <p className='mb-1 text-gray-500 font-semibold'>LAST NAME:</p>
                <input
                  className='input-settings py-2 px-5 mb-5	border-2 border-gray-400 placeholder-black'
                  type='text'
                  placeholder='Houi'
                />
                <p className='mb-1 text-gray-500 font-semibold'>ADRESS:</p>
                <input
                  className='input-settings py-2 px-5	mb-5 border-2 border-gray-400 placeholder-black'
                  type='text'
                  placeholder='Chemin de Licard, 31100 Toulouse'
                />
              </div>
              <div style={{ width: "50%" }}>
                <p className=' text-gray-500 font-semibold'>YOUR AVATAR</p>
              </div>
            </div>
            <hr className='border-gray-500 mr-10 my-10' />
            <div className='flex justify-between items-center'>
              <div>
                <h3 className='mb-1 text-2xl text-gray-800 font-semibold'>
                  Email Adress
                </h3>
                <br />
                <p>
                  Your email adress is{" "}
                  <span className='font-semibold'>jb.houi@yahoo.fr</span>
                </p>
              </div>
              <p className='underline mr-10 text-blue-600 cursor-pointer'>
                Change
              </p>
            </div>
            <hr className='border-gray-500 mr-10 my-10' />
            <div className='flex justify-between'>
              <h3 className='mb-1 text-2xl text-gray-800 font-semibold'>
                Password
              </h3>
              <p className='underline mr-10 text-blue-600 cursor-pointer'>
                Change
              </p>
            </div>
            <hr className='border-gray-500 mr-10 my-10' />
            <p className='underline mr-10 text-red-600 cursor-pointer mb-10'>
              Delete my account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
