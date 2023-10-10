import React from 'react'
import Head from 'next/head'
const Id = () => {
  return (
    <div>
    {/* <Link href="/api/auth/logout" className='rounded-md bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600'>
    Logout
    </Link> */}
    <Head>New Chat</Head>
    <div className='grid h-screen grid-cols-[250px_1fr]'>
      <div className=''>Sidebare</div>
      <div className='bg-gray-700 flex flex-col'>
        <div className='flex-1'>Chat Room</div>
        <footer className='bg-gray-800 p-10'>Footer</footer>
      </div>
    </div>
    </div>
  )
}

export default Id