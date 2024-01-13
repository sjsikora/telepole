"use client";
import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { useSearchParams } from 'next/navigation';
import InitalSearchPage from '../components/search/initial/InitalSearchPage';
import TerminalSearchPage from '../components/search/terminal/TerminalSearchPage';
import CityHandler from '../components/cityModal/CityHandler';

type pageProps = {
    
};

const Page:React.FC<pageProps> = () => {

    const searchParams = useSearchParams();
    const [city, setCity] = React.useState<string>('');
    const id = searchParams.get('key');

    function setCityModal(city: string) {
        setCity(city);
    }

    console.log(city);

    return <div>
        <CityHandler setCity={setCityModal} />
        <Navbar city={city}/>


        {id ? <TerminalSearchPage searchKeyword={id} city={city} /> : <InitalSearchPage city={city} />}
        
    </div>
}
export default Page;