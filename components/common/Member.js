import React from 'react'
import { Icon } from '@iconify/react';
import logo from '../../public/assets/images/logo.png'
import Image from 'next/image';
import ArticleList from './ArticleList';

export default function Member() {
  return (
    <section className="">
      <div className="flex justify-start">
        <div className="menu-left flex flex-col max-h-screen w-1/5 mt-4 border-2 sticky">

          <div className="flex justify-end border-2">

            <div className="px-4 py-8 border-2 border-red-500">
              <Image src={logo} width={40} height={40}></Image>
            </div>

          </div>

          <div className="my-auto flex justify-end border-2">

            <div className="px-5 border-2 border-orange-500">
              <div className="py-8">
                <Icon icon="dashicons:admin-home"  width="30" height="30"/>
              </div>
              <div className="py-8">
                <Icon icon="fluent:alert-16-regular" width="30" height="30" />
              </div>
              <div className="py-8">
                <Icon icon="fluent:bookmark-multiple-20-regular" width="30" height="30" />
              </div>
              <div className="py-8">
                <Icon icon="fluent:bookmark-multiple-20-regular" width="30" height="30" />
              </div>
              <div className="py-8">
                <Icon icon="fluent:bookmark-multiple-20-regular" width="30" height="30" />
              </div>
            </div>

          </div>

          <div className="flex justify-end mt-4 border-2">

            <div className="px-4 py-8 border-2 border-sky-500">
              <Icon icon="bxs:user-circle" width="40" height="40" />
            </div>

          </div>

        </div>
        <div className="content-center w-1/2 mt-4 border-2">
          <div className="">
            <ArticleList/>
          </div>
        </div>
        <div className="menu-right"></div>
      </div>
    </section>
  )
}
