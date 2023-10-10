'use client'
import Link from 'next/link'
import styles from './page.module.css'
import Head from 'next/head'
import { useUser } from '@auth0/nextjs-auth0/client';
import LoadingSkeleton from './LoadingSkeleton'
import { useRouter } from 'next/navigation'
import { Router } from 'next/router';
import { redirect } from 'next/navigation'


export default  function Home() {
  const {isLoading, user, error} = useUser();

  if (isLoading) return <LoadingSkeleton />
  if (error) return <div>{error.message}</div>
  return (
    <div>
      <Head>
        <title>Chatty AI - Login or Sign Up</title>
      </Head>
      <div className='min-h-screen w-full bg-gray-800 flex justify-center items-center text-white text-center'>
        <div>
        {
          !!user && redirect('/chat')
        }
        {
          !user && 
          <>
          <Link href="/api/auth/login" className='rounded-md bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600'>
          Login
          </Link>
          <Link href="/api/auth/signup" className='rounded-md bg-emerald-500 px-4 py-2 text-white hover:bg-emerald-600'>
          Sign Up
          </Link>
          </>
        }
        </div>
      </div>
    </div>
  )
}

