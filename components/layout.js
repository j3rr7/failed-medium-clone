import React from 'react'
import HeadTags from './headTags'
import Navbar from './navbar'
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;


export default function layout({children}) {
  return (
    <>
      <HeadTags/>
      <Navbar/>
      <div className="container">
        {children}
      </div>
      {/* <Footer>Footer</Footer> */}
    </>
  )
}
