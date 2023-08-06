import React from 'react';
import { Map } from "react-map-gl"

type MainMapProps = {
    neighborhoodString : string;
};


const MainMap:React.FC<MainMapProps> = (props: MainMapProps) => {
    
    return <div className='w-full h-full'>
        <Map
          mapboxAccessToken= {process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
          initialViewState={{
            longitude: -122.359749,
            latitude: 47.639396,
            zoom: 13,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
        </Map>
    </div>
}

export default MainMap;