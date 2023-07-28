import React from 'react';
import Image from 'next/image'
import logo from '../../../public/assets/anti_full_logo.png'
import profile from "../../../public/icons/user.png"
import Link from 'next/link';

type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    
    return <div className='bg-spgreen flex justify-between items-center'>
        
        <div className='flex justify-between items-center px-3'>
            <Image alt="Telepole logo" src={logo} width={200} />
            
            <Link className='text-white text-lg px-10' href='./about'> about us</Link>
            <Link className='text-white text-lg' href='./contact'> contact</Link>
        </div>

        <div className='flex justify-between items-center px-3'>
            <Link href="./auth/login"><Image alt="Telepole logo" src={profile} width={50} /> </Link>
        </div>

    </div>
}
export default Navbar;