import React, { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'
import styleNav from './MenuStyle.module.css'
import logo from '../../public/assets/images/logo.png'

export default function Items(){
  const router = useRouter();
  const [flyer, setFlyer] = useState(false);
  return(
    <>
      <nav className="nav flex flex-wrap items-center justify-between px-4">
        <div className="flex-1 flex justify-between items-center">
          <Link href="/">
            <Image src={logo} width={30} height={30}/>
          </Link>
        </div>
        <input 
          className='hidden' 
          type="checkbox" 
          id="menu-toggle" 
          defaultChecked={!flyer}
          onClick={(e) => setFlyer(!flyer)}
        />
        <label htmlFor="menu-toggle" className='pointer-cursor md:hidden block'>
          {
            flyer === true ? (
              <svg height="15" viewBox="0 0 376.49067 376.49067" width="15" xmlns="http://www.w3.org/2000/svg"><path d="m361.726562 301.375-286.613281-286.613281c-12.5-12.5-32.765625-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503906-12.5 32.769531 0 45.25l286.613281 286.613281c12.503906 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.523438-12.480469 12.523438-32.746094.019531-45.25zm0 0" fill="#f44336"/><path d="m301.375 14.761719-286.613281 286.613281c-12.5 12.503906-12.5 32.769531 0 45.25l15.082031 15.082031c12.503906 12.5 32.769531 12.5 45.25 0l286.632812-286.59375c12.503907-12.5 12.503907-32.765625 0-45.246093l-15.082031-15.082032c-12.5-12.523437-32.765625-12.523437-45.269531-.023437zm0 0" fill="#f44336"/><path d="m316.457031 376.46875c-9.554687 0-19.132812-3.648438-26.429687-10.921875l-101.78125-101.761719-101.761719 101.761719c-14.632813 14.589844-38.335937 14.589844-52.90625 0l-22.632813-22.636719c-14.570312-14.570312-14.59375-38.3125-.023437-52.882812l101.78125-101.78125-101.757813-101.761719c-14.59375-14.589844-14.59375-38.335937 0-52.90625l22.632813-22.632813c14.570313-14.570312 38.292969-14.59375 52.886719-.023437l101.78125 101.804687 101.757812-101.78125c14.636719-14.59375 38.335938-14.59375 52.90625 0l22.636719 22.632813c14.589844 14.59375 14.589844 38.335937 0 52.90625l-101.761719 101.761719 101.761719 101.757812s.019531 0 .019531.023438c14.570313 14.589844 14.550782 38.335937-.019531 52.882812l-22.636719 22.636719c-7.292968 7.273437-16.871094 10.921875-26.453125 10.921875zm-128.210937-151.316406c4.09375 0 8.191406 1.558594 11.304687 4.691406l113.066407 113.066406c2.09375 2.09375 5.589843 2.09375 7.660156 0l22.632812-22.632812c2.09375-2.089844 2.070313-5.589844-.019531-7.679688l-113.046875-113.046875c-6.25-6.25-6.25-16.382812 0-22.632812l113.066406-113.066407c2.09375-2.089843 2.09375-5.589843 0-7.660156l-22.632812-22.613281c-2.089844-2.089844-5.566406-2.070313-7.679688.023437l-113.046875 113.066407c-5.992187 5.992187-16.617187 5.992187-22.632812 0l-113.046875-113.089844c-2.089844-2.089844-5.589844-2.089844-7.65625 0l-22.636719 22.636719c-2.089844 2.089844-2.089844 5.585937 0 7.65625l113.066406 113.066406c6.25 6.25 6.25 16.386719 0 22.636719l-113.066406 113.066406c-2.070313 2.089844-2.089844 5.589844 0 7.65625l22.636719 22.636719c2.089844 2.089844 5.566406 2.070312 7.679687-.023438l113.042969-113.042968c3.117188-3.136719 7.210938-4.714844 11.308594-4.714844zm0 0"/></svg>
            ) : (
              <svg height="20" viewBox="-192 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="#000"z><path d="m128 256c0 35.347656-28.652344 64-64 64s-64-28.652344-64-64 28.652344-64 64-64 64 28.652344 64 64zm0 0"/><path d="m128 64c0 35.347656-28.652344 64-64 64s-64-28.652344-64-64 28.652344-64 64-64 64 28.652344 64 64zm0 0"/><path d="m128 448c0 35.347656-28.652344 64-64 64s-64-28.652344-64-64 28.652344-64 64-64 64 28.652344 64 64zm0 0"/></g><path d="m64 320c-35.285156 0-64-28.714844-64-64s28.714844-64 64-64 64 28.714844 64 64-28.714844 64-64 64zm0-96c-17.644531 0-32 14.355469-32 32s14.355469 32 32 32 32-14.355469 32-32-14.355469-32-32-32zm0 0"/><path d="m64 128c-35.285156 0-64-28.714844-64-64s28.714844-64 64-64 64 28.714844 64 64-28.714844 64-64 64zm0-96c-17.644531 0-32 14.355469-32 32s14.355469 32 32 32 32-14.355469 32-32-14.355469-32-32-32zm0 0"/><path d="m64 512c-35.285156 0-64-28.714844-64-64s28.714844-64 64-64 64 28.714844 64 64-28.714844 64-64 64zm0-96c-17.644531 0-32 14.355469-32 32s14.355469 32 32 32 32-14.355469 32-32-14.355469-32-32-32zm0 0"/></svg>
            )
          }
          
        </label>

        <div className={
          flyer === true ? (
            'w-full md:items-center md:w-auto md:flex'
          ) : (
            'hidden w-full md:items-center md:w-auto md:flex'
          )
        } id='menu-toggle'>
          <nav>
            <ul className='flex items-center md:flex-row flex-col md:w-auto text-base text-gray-700 pt-4 md:pt-0'>
              <li>
                <Link href="/">
                  <a className={router.pathname === "/" ? styleNav.active : "md:p-4 py-3 px-0 block font-normal center hover:color-primary"}>
                    Home
                  </a>
                  </Link>
              </li>
              <li>
                <Link href="/ourstory">
                  <a className={router.pathname === "/ourstory" ? styleNav.active : "md:p-4 py-3 px-0 block font-normal center hover:color-primary"}>
                    Our story
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/write">
                  <a className={router.pathname === "/write" ? styleNav.active : "md:p-4 py-3 px-0 block font-normal center hover:color-primary"}>
                    Write
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/auth/signin">
                  <a className={router.pathname === "/auth/signin" ? styleNav.active : "md:p-4 py-3 px-0 block font-normal center hover:color-primary"}>
                    Sign in
                  </a>
                </Link>
              </li>
              <li>
                
                <Link href="/auth/signup">
                  <a className="mx-3 bg-primary btn-custom relative block text-white px-3 py-2 rounded-full tracking-widest hover:tracking-widest hover:bg-transparent hover:border-1 hover:border-color-primary">
                    Get Started
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </>
  );
}