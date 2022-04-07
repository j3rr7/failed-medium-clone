import React from 'react'
import Image from 'next/image'
import SignIn from '../../components/common/signin'
import illustration from '../../public/assets/images/illustration_library.png'
import Layout from '../../components/layout'

export default function login() {
  return (
    <>
      <Layout>
        <div className="lg:flex mt-1">
          <div className="lg:w-1/2 xl:max-w-screen-sm">
            <SignIn />
          </div>
          <div className="hidden lg:flex items-center justify-center flex-1 h-screen">
            <div className="w-9/12 transform duration-200 hover:scale-110 cursor-pointer">
              <Image src={illustration} width={2000} height={2000}/>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
