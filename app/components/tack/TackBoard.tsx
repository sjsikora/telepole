'use client';
import React, { useEffect } from 'react';
import Image from 'next/image'
import tack from '../../../public/icons/brass_tack.png'
import Poster from './poster/Poster';
import CityHandler from '../cityModal/CityHandler';
import Navbar from '../navbar/Navbar';
import { auth } from '@/app/js/firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';

type TackBoardProps = {

};

const TackBoard:React.FC<TackBoardProps> = () => {

    const [city, setCity] = React.useState('');

    //If user is not signed in, redirect to login page:
    const router = useRouter();

    function setCityModal(city : string) {
        setCity(city);

        onAuthStateChanged(auth, (user) => {
            if (!user) router.push(`/auth/login?city=${city}`);
        });
        
    }
    
    return <div>
        <CityHandler setCity={setCityModal} />
        <Navbar city={city} />

        <div className='flex flex-col items-center justify-center w-full p-[1rem]'>

        <div className='w-full max-w-2xl bg-white shadow-lg border-2 border-black'>
            <div className='flex justify-between items-center'>
                <Image className='p-[0.5rem]' alt="Telepole logo" src={tack} width={50} />
                <p className='text-xl font-bold'> TACK YOUR POSTER </p>
                <Image className='p-[0.5rem]' alt="Telepole logo" src={tack} width={50} />
            </div>
            <Poster city={city} />
        </div>


    </div>
    </div>
}
export default TackBoard;