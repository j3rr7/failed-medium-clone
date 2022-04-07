import Link from 'next/link';
import React from 'react'
import Layout from '../components/layout';

export default function verify() {
  return (
    <>
      <Layout>
        <div className='h-full'>
          <div className="flex justify-center my-12 w-7/12 mx-auto">
            <div className="flex flex-col shadow-md px-24 py-2 rounded-md">
              <p className="py-5 text-3xl font-medium text-center">Verify your email</p>
              <p className="py-5 text-lg font-normal text-center">You will need to verify your email to complete registration</p>
              <img src='/assets/images/sendEmail.png' className='mx-auto w-5/12'/>
              <p className="py-5 text-sm font-bold text-center w-fit mx-auto">An email has been sent to justdev@gmail.com with a link to verify your account. If you have not received the email after a few minutes, please check your spam folder.</p>
              <div className='flex justify-center mb-12'>
                <button className="px-4 py-2 mx-2 border-2 border-black rounded-full text-lg font-normal hover:text-black hover:bg-white hover:border-white hover:shadow-md">
                  Resend Email
                </button>
              <Link href="/">
                <a className="px-4 py-2 mx-2 bg-black text-white rounded-full text-lg font-normal hover:text-black hover:border-2 hover:border-black hover:bg-transparent hover:shadow-md">
                  Back to Home
                </a>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
