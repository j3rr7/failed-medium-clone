import React from 'react'
import { Icon } from '@iconify/react'

export default function Article() {
  return (
    <div className="flex justify-between md:my-8">

      <div className="flex flex-col article-left h-30 w-8/12">
        
        <div className="flex my-4 border-2">  
          {/* content container */}
          <div className="flex w-10/12 px-2 py-2 flex-col">
            <p className="text-2xl font-semibold text-ellipsis line-clamp-2">Meet Vladimir Putin's Biggest Accomplice in His War</p>
            <div className="mb-auto pt-1">
              <p className="py-1 text-ellipsis line-clamp-2 text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
            </div>

            <div className="flex justify-between">
              <div className="flex">
                <p className="text-sm py-1 text-gray-600 opacity-70">Feb 25</p>
                <p className="px-2 py-1">·</p>
                <p className="text-sm py-1 text-gray-600 opacity-70">2 min read</p>
                <p className="px-2 py-1">·</p>
                <p className="text-sm py-1 opacity-70 bg-gray-200 px-3 rounded-full text-gray-900 leading-5">Russia</p>
                <div className="px-2 py-1.5">
                  <Icon icon="ant-design:star-filled" width="15" height="15" color="#9ca3af"/>
                </div>
              </div>
              <div className="flex opacity-70">
                <Icon icon="carbon:bookmark-add" width="30" height="30"/>
              </div>
            </div>
          </div>
          {/* end content container */}

          {/* image */}
          <div className="img w-4/12">
            <img src="http://source.unsplash.com/286x168/?woman" class="bg-cover bg-no-repeat object-cover"/>
          </div>
          {/* end image */}
        </div>

        <div className="flex my-4 border-2">  
          {/* content container */}
          <div className="flex w-10/12 px-2 py-2 flex-col">
            <p className="text-2xl font-semibold text-ellipsis line-clamp-2">Meet Vladimir Putin's Biggest Accomplice in His War on Ukraine</p>
            <div className="mb-auto pt-1">
              <p className="py-1 text-ellipsis line-clamp-2 text-base">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make</p>
            </div>

            <div className="flex justify-between">
              <div className="flex">
                <p className="text-sm py-1 text-gray-600 opacity-70">Feb 25</p>
                <p className="px-2 py-1">·</p>
                <p className="text-sm py-1 text-gray-600 opacity-70">2 min read</p>
                <p className="px-2 py-1">·</p>
                <p className="text-sm py-1 opacity-70 bg-gray-200 px-3 rounded-full text-gray-900 leading-5">Russia</p>
                <div className="px-2 py-1.5">
                  <Icon icon="ant-design:star-filled" width="15" height="15" color="#9ca3af"/>
                </div>
              </div>
              <div className="flex opacity-70">
                <Icon icon="carbon:bookmark-add" width="30" height="30"/>
              </div>
            </div>
          </div>
          {/* end content container */}

          {/* image */}
          <div className="img w-4/12">
            <img src="http://source.unsplash.com/286x168/?woman" class="bg-cover bg-no-repeat object-cover"/>
          </div>
          {/* end image */}
        </div>
      
      </div>
      
      <div className="flex article-right border-2 border-red-400 w-1/4 my-4">
        <p>DISCOVER MORE OF WHAT MATTERS TO YOU</p>
      </div>

    </div>
  )
}
