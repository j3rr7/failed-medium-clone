import React from 'react'

import ArticleList from './ArticleList';
import SideBar from './SideBar'

export default function Member() {
  return (
    <section className="">
      <div className="flex justify-start">
        <div className="menu-left flex flex-col items-end w-72">
          <SideBar/>
        </div>
        
        <div className="content-center w-1/2 border-2 mx-44 mt-10">
          <ArticleList/>
        </div>
        <div className="menu-right"></div>
      </div>
    </section>
  )
}
