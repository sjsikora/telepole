import Login from '../../components/auth/Login';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image'
import logo from '../../../public/assets/full_logo.svg'
import homeIcon from "../../../public/icons/home.svg"


type pageProps = {
    
};

const page:React.FC<pageProps> = () => {
    
    return <div>
        <div className='p-5'>
            <Link href="."><Image alt="Home button" src={homeIcon} width={40}/></Link>
        </div>
        
        <div className='flex flex-col items-center justify-center'>
            
            <Image className='p-10' alt="Telepole logo" src={logo} width={400}/>

            <div className='shadow-2xl flex flex-col min-w-[20rem] w-[26vw] max-w-[30rem]'>
                <Login />
            </div>
        </div>
    </div>
}
export default page;