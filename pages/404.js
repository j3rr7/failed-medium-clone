import React from 'react'
import Link from 'next/link'

export default function index() {
  return (
    <div className="flex flex-wrap">
      <div className='flex flex-col mx-auto'>
        <img src='/assets/images/notFound.png'/>
        <p className='text-center text-2xl font-semibold'>An error 404 occurred on server</p>
        <Link href="/"><a className="border-2 border-primary text-lg font-semibold px-4 py-2 text-center my-4 flex justify-center w-1/2 mx-auto rounded-full hover:text-white hover:bg-primary">Back to Home</a></Link>
      </div>
    </div>
  )
}
