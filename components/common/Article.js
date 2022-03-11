import React from 'react'
import ArticleList from './ArticleList'
import Category from './Category'

export default function Article() {
  return (
    <div className="flex justify-between md:my-8 flex-wrap-reverse md:flex-wrap">

        {/* content */}
        <div className="article-left flex flex-wrap w-full md:w-8/12 mt-4 md:mt-0">
          
          <ArticleList/>

        </div>
        {/* end content */}

        {/* kategori */}
        <div className="article-right border-b-2 border-gray-200 my-4 top-4 pb-4 h-full w-full md:w-1/4 md:sticky">
          <p className="text-normal w-full h-auto">DISCOVER MORE OF WHAT MATTERS TO YOU</p>
          <Category/>
        </div>
        {/* end kategori */}

    </div>
  )
}
