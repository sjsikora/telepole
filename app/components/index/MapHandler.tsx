"use client";
import React from 'react';
import Image from 'next/image';
import MainMap from './MainMap';
import logo from '../../../public/assets/small_icon.svg'

type MapHandlerProps = {
    neighborhood: string
};

const MapHandler:React.FC<MapHandlerProps> = ({neighborhood}) => {

    if(neighborhood === '') return <div className='md:w-1/2 overflow-hidden'>
        <div className='h-screen flex justify-center items-center'>
            <Image src={logo} alt='map' />
        </div>
    </div>

    return <div className='md:w-1/2 md:h-auto h-1/2 overflow-hidden'>
        <MainMap neighborhoodString={neighborhood}/>
    </div>
}
export default MapHandler;