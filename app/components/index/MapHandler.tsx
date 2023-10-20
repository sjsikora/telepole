"use client";
import React from 'react';
import Image from 'next/image';
import MainMap from './MainMap';
import StaticMap from '../../../public/assets/map_fallback.png'

type MapHandlerProps = {
    neighborhood: string
};

const MapHandler:React.FC<MapHandlerProps> = ({neighborhood}) => {

    if(neighborhood === '') return <div className='md:w-1/2 md:h-auto h-1/2 overflow-hidden'>
        <Image src={StaticMap} alt={"A map to be blurred"}/>
    </div>

    return <div className='md:w-1/2 md:h-auto h-1/2 overflow-hidden'>
        <MainMap neighborhoodString={neighborhood}/>
    </div>
}
export default MapHandler;