import React from 'react'
import { Icon } from '@iconify/react';
import Category from './Category'

export default function SideRightBar() {
  return (
    <div className="h-screen border-l-1">
      <div className="ml-6">
        <button className="mt-12 bg-black text-white text-sm font-normal py-2 w-full rounded-full hover:bg-apple">Upgrade</button>
      </div>
      <div className="ml-6 mt-12 flex justify-between ">
        <label className="relative block">
          <span className="sr-only">Search</span>
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <Icon icon="akar-icons:search" width="20" height="20" />
          </span>
          <input type="text" className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." name="search"/>
        </label>
      </div>
      <div className="ml-6 mt-8">
        <div className="w-full rounded-md bg-third px-6 py-6">
          <div className="flex justify-between pb-5">
            <p className="text-sm font-bold pt-3">Writing on Medium clone</p>
            <Icon icon="eva:close-fill" color="#64748b" width="20" height="20"/>
          </div>
          <p className="text-sm font-semibold py-1">New Writer FAQ</p>
          <p className="text-sm font-semibold py-1">Expert writing advice</p>
          <p className="text-sm font-semibold py-1">Grow your readership</p>
          <div className="mt-4">
            <button className="bg-black text-white text-xs px-4 py-2 rounded-full">Start writing</button>
          </div>
        </div>
      </div>
      <div className="ml-6 border-b-1 mt-8"></div>
      <div className="ml-6 mt-12">
        <p className="font-medium text-normal">Recommended topics</p>
        <Category/>
      </div>
    </div>
  )
}
