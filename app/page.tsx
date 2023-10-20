'use client';
import React from 'react';
import Navbar from './components/navbar/Navbar';
import MapHandler from './components/index/MapHandler';
import DropdownCitySelect from './components/index/DropdownCitySelect';
import CityModal from './components/cityModal/CityModal';

type pageProps = {
};

const page:React.FC<pageProps> = () => {

    const [neighborhood, setNeighborhood] = React.useState<string>('');

    return <div>

        <div>
            <CityModal open = {true} onClose = {() => {}} children = "test" /> 
        </div>

        <div>
            <Navbar />
        </div>

        <div className='w-full h-[93vh] flex-col md:flex-row md:flex md:justify-between'>

            <div className='w-full md:w-1/2 flex items-center justify-center'>
                <div className='md:h-screen p-5 flex flex-col justify-evenly'>
                    <div className='flex flex-col items-center justify-center'>
                        <DropdownCitySelect />
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

export default page;
