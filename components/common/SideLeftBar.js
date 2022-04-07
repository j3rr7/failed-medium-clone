import React from 'react'
import logo from '../../public/assets/images/logo.png'
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';

export default function SideBar() {
  return (
    <div className="h-screen sticky top-0 border-r-1">
      <div className="mt-12 mr-4">
        <div className="px-2">
          <Link href="/">
            <a><Image src={logo} width={30} height={30}></Image></a>
          </Link>
        </div>
      </div>

      <div className="mt-52 mr-4">
        <div className="mt-3 py-3 px-2">
          <Icon icon="system-uicons:home-alt" width="30" height="30" className="text-gray-600 hover:text-gray-900"/>
        </div>
        <div className="mt-3 py-3 px-2">
          <Icon icon="fluent:alert-16-regular" width="30" height="30" className="text-gray-600 hover:text-gray-900"/>
        </div>
        <div className="mt-3 py-3 px-2">
          <Icon icon="fluent:bookmark-multiple-20-regular" width="30" height="30" className="text-gray-600 hover:text-gray-900"/>
        </div>
        <div className="mt-3 py-3 px-2">
          <Icon icon="majesticons:paper-fold-text-line" width="30" height="30" className="text-gray-600 hover:text-gray-900"/>
        </div>

        <div className="my-10 border-b-1 opacity-30"></div>

        <div className="mt-3 py-3 px-2">
          <Icon icon="jam:write" width="30" height="30" className="text-gray-600 hover:text-gray-900"/>
        </div>
      </div>

      <div className="mt-52 mr-4">
        <div className="py-2 px-2">
          <Icon icon="carbon:user-avatar" width="30" height="30" className="text-gray-600 hover:text-gray-900"/>
        </div>
      </div>
    </div>
  )
}
