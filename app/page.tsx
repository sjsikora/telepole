'use client';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import MapHandler from './components/index/MapHandler';
import { cities, citiesNeighborhoods} from './js/setting';
import CityHandler from './components/cityModal/CityHandler';

type pageProps = {
};

const Page: React.FC<pageProps> = () => {

    const [neighborhood, setNeighborhood] = React.useState<string>('');
    const [city, setCity] = React.useState<string>('');
    const [cityDisplayName, setCityDisplayName] = React.useState<string>('');

    function setCityModal(city: string) {
        setCity(city);
        setCityDisplayName(cities[city]);
        setNeighborhood(Object.keys(citiesNeighborhoods[city])[0]);
    }

    return <div>

        <CityHandler setCity={setCityModal} />
        <Navbar city={city} />

        <div className='w-full h-[93vh] flex-col md:flex-row md:flex md:justify-between'>

            <div className='w-full md:w-1/2 flex items-center justify-center'>
                <div className='md:h-screen p-5 flex flex-col justify-evenly'>
                    <div className='flex flex-col items-center justify-center'>
                        <div>
                            <p className='text-5xl font-bold'> Welcome to Telepole. </p>
                            <p className='pl-5 text-2xl'> Your connection to {!(neighborhood === '') ? cityDisplayName : "... "} streamlined.</p>
                            <p className='pl-5 text-2xl'> Your online telephone pole.</p>
                        </div>
                    </div>

                    <div>
                        <div className='flex flex-col items-center justify-center p-5'>
                            <div className='flex flex-col items-center justify-center p-5'>
                                <div className='p-5 w-[20rem] flex bg-spgreen rounded-xl text-white text-xl items-center justify-center overflow-hidden'>
                                    Find your neighborhood
                                </div>
                            </div>
                            <div className='p-5 w-[20rem] flex bg-spgreen rounded-xl text-white text-xl items-center justify-center'>
                                Find by Event
                            </div>
                        </div>
                    </div>
                    <div />
                </div>
            </div>
            <MapHandler neighborhood={neighborhood} />
        </div>
    </div>
}

export default Page;
