import React from 'react';
import MainMap from './MainMap';

type MapHandlerProps = {
    
};

const MapHandler:React.FC<MapHandlerProps> = () => {

    //Temp***

    const [neighborhoodString, setNeighborhoodString] = React.useState('Queen Anne');
    
    return <div className='md:w-1/2 md:h-auto h-1/2 overflow-hidden'>
        <MainMap neighborhoodString={neighborhoodString}/>
    </div>
}
export default MapHandler;