import React from 'react';
import Image from 'next/image'
import logo from '../../../public/assets/anti_full_logo.png'
import profile from "../../../public/icons/user.png"

type NavbarProps = {
    
};

const Navbar:React.FC<NavbarProps> = () => {
    
    return <div className='bg-spgreen flex justify-between items-center'>
        
        <div className='flex justify-between items-center px-3'>
            <Image alt="Telepole logo" src={logo} width={200} />
            <div className='text-white text-lg px-10'> about us</div>
            <div className='text-white text-lg'> contact</div>
        </div>

        <div className='flex justify-between items-center px-3'>
            <Image alt="Telepole logo" src={profile} width={50} />
        </div>




    </div>
}
export default Navbar;