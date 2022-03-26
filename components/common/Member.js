import React from 'react'
import Tabs from './Tabs';
import ArticleList from './ArticleList';
import SideLeftBar from './SideLeftBar';
import SideRightBar from './SideRightBar';

export default function Member() {
  return (
    <section className="">
      <div className="flex justify-start">
        <div className="menu-left flex flex-col items-end w-72">
          <SideLeftBar/>
        </div>
        
        <div className="content-center w-1/2 mx-14 mt-10">
          <Tabs/>
          <ArticleList/>
        </div>
        <div className="menu-right w-1/6">
          <SideRightBar/>
        </div>
      </div>
    </section>
  )
}
