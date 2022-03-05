import React from 'react'
import Image from 'next/image';
import { g_1, g_2, g_3, g_4, g_5, g_6 } from '../images/images';

export default function trendingCard() {
  return (
    <>
      <div className="flex flex-wrap w-full h-96 mb-10 mt-4 md:mt-0 md:max-h-60">

        <div className="lg:w-1/3 max-h-30 md:w-2/4 sm:w-full flex justify-around border-2">
          <div className="py-2 px-1 w-auto">
            <Image src={g_1} width={50} height={50}/>
          </div>
          <div className="w-4/5 py-2">
            <p className="text-base font-semibold capitalize">lorem ipsum dolor sit amet consectetur elit kambing hitam</p>
            <p className="text-sm text-ellipsis line-clamp-2 w-9/12 py-1">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur</p>
            <p className="text-xs py-1 text-gray-600 opacity-70">Feb 25 · 2 min read</p>
          </div>
        </div>

        <div className="lg:w-1/3 max-h-30 md:w-2/4 sm:w-full flex justify-between">
          <div className="p-2">
            <Image src={g_2} width={50} height={50}/>
          </div>
        </div>
        <div className="lg:w-1/3 max-h-30 md:w-2/4 sm:w-full flex justify-between">
          <div className="p-2">
            <Image src={g_3} width={50} height={50}/>
          </div>
        </div>
        <div className="lg:w-1/3 max-h-30 md:w-2/4 sm:w-full flex justify-between">
          <div className="p-2">
            <Image src={g_4} width={50} height={50}/>
          </div>
        </div>
        <div className="lg:w-1/3 max-h-30 md:w-2/4 sm:w-full flex justify-between">
          <div className="p-2">
            <Image src={g_5} width={50} height={50}/>
          </div>
        </div>
        <div className="lg:w-1/3 max-h-30 md:w-2/4 sm:w-full flex justify-between">
          <div className="p-2">
            <Image src={g_6} width={50} height={50}/>
          </div>
        </div>
      </div>
    </>
  )
}
