import React from 'react'
import { Icon } from '@iconify/react';
export default function Tabs() {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px text-sm font-normal text-center text-gray-500 dark:text-gray-400">
        <li className="mr-2">
          <a href="#" className="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
            <Icon icon="arcticons:chieffollow" width="20" height="20" />
            <p className="pl-2">Following</p>
          </a>
        </li>
        <li className="mr-2">
          <a href="#" className="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group">
            <Icon icon="carbon:recommend" width="20" height="20" />
            <p className="pl-2">Recommended</p>
          </a>
        </li>
      </ul>
    </div>
  )
}
