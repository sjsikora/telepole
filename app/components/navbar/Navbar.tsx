import React from 'react';
import Image from 'next/image'
import largeLogo from '../../../public/assets/anti_full_logo.png'
import smallLogo from '../../../public/assets/anti_small_logo.png'
import profile from "../../../public/icons/user.png"
import NavbarButton from './NavbarButton';
import Link from 'next/link';

type NavbarProps = {
    
};

//TODO: Profile Picture in top right should be converted to a google symbol


const Navbar:React.FC<NavbarProps> = () => {
    
    return <div className='bg-spgreen flex justify-between items-center'>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        
        <div className='flex items-center px-3'>
            <Link href="/"><Image className='hidden md:block' alt="Telepole logo" src={largeLogo} width={200} /></Link>
            <Link href="/"><Image className='p-[0.5rem] md:hidden' alt="Telepole logo" src={smallLogo} width={90} /></Link>
            
            
            <Link className='text-white text-md px-[1rem] sm:text-lg' href='./about'> about</Link>
            <Link className='text-white text-md sm:text-lg' href='./contact'> contact</Link>
        </div>

        <div className='flex items-center pr-3'>

            <div className='flex justify-around px-[2rem]'>
                <NavbarButton iconName='push_pin' word='Tack' redirectURL='/tack'/>
                <div className='px-2'/>
                <NavbarButton iconName='search' word='Search' redirectURL='/search'/>
            </div>

            <Link href="/auth/login"><Image alt="user icon" src={profile} width={50} /> </Link>
        </div>

    </div>
}
export default Navbar;