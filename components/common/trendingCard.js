import React from 'react'
import Image from 'next/image';
import { g_1, g_2, g_3, g_4, g_5, g_6 } from '../images/images';

export default function trendingCard() {
  return (
    <>
      <div className="flex flex-wrap w-full h-auto my-4 md:my-8 md:max-h-auto">

        <div className="lg:w-1/3 max-h-30 md:w-2/4 sm:w-full flex justify-around hover:shadow-lg transition-all">
          <div className="py-2 px-1 w-auto">
            <Image src={g_1} width={50} height={50}/>
          </div>
          <div className="flex flex-col w-4/5 py-2">
            <p className="text-base font-semibold capitalize text-ellipsis line-clamp-2">lorem ipsum dolor sit amet consectetur elit is not simply random text</p>
            <p className="text-sm text-ellipsis line-clamp-2 w-9/12 py-1 mb-auto">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur</p>
            <p className="text-xs py-1 text-gray-600 opacity-70">Feb 25 · 2 min read</p>
          </div>
        </div>

        <div className="lg:w-1/3 max-h-30 md:w-2/4 sm:w-full flex justify-around hover:shadow-lg transition-all">
          <div className="py-2 px-1 w-auto">
            <Image src={g_2} width={50} height={50}/>
          </div>
          <div className="flex flex-col w-4/5 py-2">
            <p className="text-base font-semibold capitalize text-ellipsis line-clamp-2">lorem ipsum dolor sit amet consectetur elit is</p>
            <p className="text-sm text-ellipsis line-clamp-2 w-9/12 py-1 mb-auto">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur</p>
            <p className="text-xs py-1 text-gray-600 opacity-70">Feb 25 · 2 min read</p>
          </div>
        </div>

        <div className="lg:w-1/3 max-h-30 md:w-2/4 sm:w-full flex justify-around hover:shadow-lg transition-all">
          <div className="py-2 px-1 w-auto">
            <Image src={g_3} width={50} height={50}/>
          </div>
          <div className="flex flex-col w-4/5 py-2">
            <p className="text-base font-semibold capitalize text-ellipsis line-clamp-2">lorem ipsum dolor sit amet consectetur elit is</p>
            <p className="text-sm text-ellipsis line-clamp-2 w-9/12 py-1 mb-auto">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur</p>
            <p className="text-xs py-1 text-gray-600 opacity-70">Feb 25 · 2 min read</p>
          </div>
        </div>

        <div className="lg:w-1/3 max-h-30 md:w-2/4 sm:w-full flex justify-around hover:shadow-lg transition-all">
          <div className="py-2 px-1 w-auto">
            <Image src={g_4} width={50} height={50}/>
          </div>
          <div className="flex flex-col w-4/5 py-2">
            <p className="text-base font-semibold capitalize text-ellipsis line-clamp-2">lorem ipsum dolor sit amet consectetur elit is</p>
            <p className="text-sm text-ellipsis line-clamp-2 w-9/12 py-1 mb-auto">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur</p>
            <p className="text-xs py-1 text-gray-600 opacity-70">Feb 25 · 2 min read</p>
          </div>
        </div>

        <div className="lg:w-1/3 max-h-30 md:w-2/4 sm:w-full flex justify-around hover:shadow-lg transition-all">
          <div className="py-2 px-1 w-auto">
            <Image src={g_5} width={50} height={50}/>
          </div>
          <div className="flex flex-col w-4/5 py-2">
            <p className="text-base font-semibold capitalize text-ellipsis line-clamp-2">lorem ipsum dolor sit amet consectetur elit is</p>
            <p className="text-sm text-ellipsis line-clamp-2 w-9/12 py-1 mb-auto">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur</p>
            <p className="text-xs py-1 text-gray-600 opacity-70">Feb 25 · 2 min read</p>
          </div>
        </div>

        <div className="lg:w-1/3 max-h-30 md:w-2/4 sm:w-full flex justify-around hover:shadow-lg transition-all">
          <div className="py-2 px-1 w-auto">
            <Image src={g_6} width={50} height={50}/>
          </div>
          <div className="flex flex-col w-4/5 py-2">
            <p className="text-base font-semibold capitalize text-ellipsis line-clamp-2">lorem ipsum dolor sit amet consectetur elit is not simply random text</p>
            <p className="text-sm text-ellipsis line-clamp-2 w-9/12 py-1 mb-auto">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur</p>
            <p className="text-xs py-1 text-gray-600 opacity-70">Feb 25 · 2 min read</p>
          </div>
        </div>

      </div>
    </>
  )
}
