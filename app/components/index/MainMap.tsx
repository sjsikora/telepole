"use client";
import React from 'react';
import { Map } from "react-map-gl"
import { mapboxNeighborhood } from '@/app/js/setting';

type MainMapProps = {
  neighborhoodString: string;
};


const MainMap: React.FC<MainMapProps> = ({ neighborhoodString }) => {

  return <div className='w-full h-full'>
    <Map
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
      initialViewState={mapboxNeighborhood[neighborhoodString]}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
    </Map>
  </div>
}

export default MainMap;