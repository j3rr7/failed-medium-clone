import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function signup() {
  const [member, setMember] = useState({
    username:'',
    email:'',
  });
  const onSubmit = (e) => {
    e.prevenDefault();
  }

  const onChange = (e) => {
    setMember({...member,[e.target.name]:e.target.value});
  }

  return (
    <div className="mt-14 px-12 sm:px-12 md:px-12 lg:px-12 xl:px-12 lg:mt-14 xl:max-w-2xl">
      <h2 className="text-center text-4xl font-semibold lg:text-left xl:text-5xl xl:font-bold">Sign Up</h2>
      <div className="mt-12">

        {/* form */}
        <form onSubmit={onSubmit}>
          <div>
            <div className="text-sm font-bold text-gray-700 tracking-wide">Username</div>
            <input 
              className='w-full text-lg border-b border-gray-300 py-2 focus:outline-none focus:border-color-primary' 
              placeholder="JohnDoe"
              type="text"
              name="username"
              id="username"
              onChange={onChange}
            />
          </div>
          <div className="mt-10">
            <div className="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
            <input 
              className='w-full text-lg border-b border-gray-300 py-2 focus:outline-none focus:border-color-primary' 
              placeholder="JohnDoe@gmail.com"
              type="email"
              name="email"
              id="email"
              onChange={onChange}
            />
          </div>
          <div className="mt-10">
            <button className="w-full bg-primary text-gray-100 font-semibold tracking-wide py-4 text-lg rounded-full focus:outline-none shadow-lg">
              Sign In
            </button>
          </div>
          <div className="flex justify-end">
            <p className="mr-2 text-base mt-2">Already have an account?</p>
            <Link href="/login">
              <a className="text-base mt-2 font-semibold hover:color-primary">Sign In</a>
            </Link>
          </div>
        </form>
        {/* end form */}

      </div>

      <div className="mt-10">
        <div className="flex justify-center">
          <div className="w-full border-t border-gray-300 px-2 mt-2"></div>
          <p className="text-base px-5 tracking-wide text-gray-300 font-normal leading-3">or</p>
          <div className="w-full border-t border-gray-300 px-2 mt-2"></div>
        </div>
      </div>
      <div className="mt-10">
        <button className="flex justify-center w-full text-twitter font-semibold tracking-wide py-2 my-5 text-lg rounded-full border-gray-50 focus:outline-none shadow-md hover:bg-twitter hover:text-white">
          <Icon icon="entypo-social:twitter-with-circle" width="30" height="30" />
          <a className="mx-2">Twitter</a>
        </button>
        <button className="flex justify-center w-full text-google font-semibold tracking-wide py-2 my-5 text-lg rounded-full border-gray-50 focus:outline-none shadow-md hover:bg-google hover:text-white">
          <Icon icon="akar-icons:google-contained-fill" width="30" height="30" />
          <a className="mx-2">Google</a>
        </button>
        <button className="flex justify-center w-full text-github font-semibold tracking-wide py-2 my-5 text-lg rounded-full border-gray-50 focus:outline-none shadow-md hover:bg-github hover:text-white">
          <Icon icon="bi:github" width="30" height="30" />
          <a className="mx-2">Github</a>
        </button>
        <button className="flex justify-center w-full text-apple font-semibold tracking-wide py-2 my-5 text-lg rounded-full border-gray-50 bg-github focus:outline-none shadow-md hover:bg-apple hover:text-apple">
          <Icon icon="cib:apple" width="30" height="30" />
          <a className="mx-2">Apple</a>
        </button>
      </div>

    </div>
  )
}
