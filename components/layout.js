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
      {/* <Content>{children}</Content>
      <Footer>Footer</Footer> */}
    </>
  )
}
