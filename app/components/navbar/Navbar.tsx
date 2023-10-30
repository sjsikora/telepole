'use client';
import React from 'react';
import Image from 'next/image'
import largeLogo from '../../../public/assets/anti_full_logo.png'
import smallLogo from '../../../public/assets/anti_small_logo.png'
import profile from "../../../public/icons/user.png"
import NavbarButton from './NavbarButton';
import Link from 'next/link';

type NavbarProps = {
    city : string | null
};

//TODO: Profile Picture in top right should be converted to a google symbol


const Navbar:React.FC<NavbarProps> = ({city}) => {
    
    const urlAddition = (Object.is(city, null) || city === '' || city === 'undefined') ? '' : `?city=${city}`;

    return <div className='bg-spgreen flex justify-between items-center'>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        
        <div className='flex items-center px-3'>
            <Link href={`/${urlAddition}`}> <Image className='hidden md:block' alt="Telepole logo" src={largeLogo} width={200} /></Link>
            <Link href={`/${urlAddition}`}> <Image className='p-[0.5rem] md:hidden' alt="Telepole logo" src={smallLogo} width={90} /></Link>
            
            
            <Link className='text-white text-md px-[1rem] sm:text-lg' href={`./about${urlAddition}`}> about</Link>
            <Link className='text-white text-md sm:text-lg' href={`./contact${urlAddition}`}> contact</Link>
        </div>

        <div className='flex items-center pr-3'>

            <div className='flex justify-around px-[2rem]'>
                <NavbarButton iconName='push_pin' word='Tack' redirectURL={`/tack${urlAddition}`} />
                <div className='px-2'/>
                <NavbarButton iconName='search' word='Search' redirectURL={`/search${urlAddition}`} />
            </div>

            <Link href={`/auth/login${urlAddition}`}><Image alt="user icon" src={profile} width={50} /> </Link>
        </div>

    </div>
}
export default Navbar;