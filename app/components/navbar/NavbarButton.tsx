import React from 'react';
import Link from 'next/link';

type NavbarButtonProps = {
    iconName: string;
    word: string;
    redirectURL: string;
};

const NavbarButton:React.FC<NavbarButtonProps> = ({iconName, word, redirectURL}) => {

    return <div className=''>
        
        <div className='bg-white flex items-center p-1 rounded-xl'>
            <span className="material-symbols-outlined">{iconName}</span>
            <p className='text-2xl px-2 hidden sm:block'> {word} </p>
        </div>
    </div>
}
export default NavbarButton;


