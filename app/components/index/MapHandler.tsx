"use client";
import React from 'react';
import MainMap from './MainMap';

type MapHandlerProps = {
    neighborhood: string
};

const MapHandler:React.FC<MapHandlerProps> = ({neighborhood}) => {

    return <div className='md:w-1/2 md:h-auto h-1/2 overflow-hidden'>
        <MainMap neighborhoodString={neighborhood}/>
    </div>
}
export default MapHandler;