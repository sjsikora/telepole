import React from 'react'
import userLogo from '../../public/assets/user.png'
import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className='flex w-full justify-end'>
        <Link href="/login">
          <Image alt='user logo' src={userLogo} width={80} className='mr-10 mt-10'/>
        </Link>
    </div>
  )
}

export default Navbar
