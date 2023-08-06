"use client"
import React from 'react';
import Navbar from './components/navbar/Navbar';
import { GetStaticProps } from 'next';
import { Neighborhood } from './js/types';
import MainMap from './components/index/MainMap';

type pageProps = {
};

const page:React.FC<pageProps> = () => {
    

    const [neighborhoodString, setNeighborhoodString] = React.useState('Queen Anne');


    return <div>
        <div>
            <Navbar />
        </div>

        <div className='w-full h-[93vh] flex-col md:flex-row md:flex md:justify-between'>

            <div className='w-full md:w-1/2 flex items-center justify-center'>
                <div className='md:h-screen p-5 flex flex-col justify-evenly'>
                    <div className='flex flex-col items-center justify-center'>
                        <div>
                            <p className='text-5xl font-bold'> Welcome to Telepole. </p>
                            <p className='pl-5 text-2xl p-5'> Your connection to Seattle, streamlined.</p>
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
            <div className='md:w-1/2 md:h-auto h-1/2 overflow-hidden'>
                <MainMap neighborhoodString={neighborhoodString}/>
            </div>
        </div>
    </div>
}

export default page;
