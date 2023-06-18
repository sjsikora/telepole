import React from 'react'
import Link from 'next/link'

export const Hero = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <h1 className='text-[64px] text-white'>
        Welcome to Telepole.
      </h1>
      <h2 className='text-[48px] text-white'>
        Your Online Telephone Pole
      </h2>
      <div className='h-[100px]'>

      </div>
      <Link href="/dashboard">
        <h3 className='text-[34px] text-white p-10 bg-spblack rounded-lg'>
          Get Started
        </h3>
      </Link>


    </div>
  )
}

export default Hero;
