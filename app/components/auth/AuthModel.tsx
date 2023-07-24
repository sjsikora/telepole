import React from 'react';
import Image from 'next/image'
import logo from '../../../public/assets/full_logo.png'
import homeIcon from "../../../public/icons/home.svg"
import Link from 'next/link';

type AuthModelProps = {
    
};



const AuthModel:React.FC<AuthModelProps> = () => {
    return <div>
        <div className='p-5'>
            <Link href="."><Image alt="Home button" src={homeIcon} width={40}/></Link>
        </div>
        
        <div className='flex flex-col items-center justify-center'>
            
            <Image className='p-10' alt="Telepole logo" src={logo} width={400}/>

            <div className='shadow-2xl flex flex-col w-[30rem] h-[35rem]'>
            </div>
        </div>
    </div>
}
export default AuthModel;