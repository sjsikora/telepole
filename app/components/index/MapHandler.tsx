"use client";
import React from 'react';
import MainMap from './MainMap';

type MapHandlerProps = {
    
};

const MapHandler:React.FC<MapHandlerProps> = () => {

    const [neighborhoodString, setNeighborhoodString] = React.useState('queenAnne');
    
    return <div className='md:w-1/2 md:h-auto h-1/2 overflow-hidden'>
        <MainMap neighborhoodString={neighborhoodString}/>
    </div>
}
export default MapHandler;