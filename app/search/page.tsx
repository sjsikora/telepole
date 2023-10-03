"use client";
import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { useSearchParams } from 'next/navigation';
import InitalSearchPage from '../components/search/initial/InitalSearchPage';
import TerminalSearchPage from '../components/search/terminal/TerminalSearchPage';

type pageProps = {
    
};

const page:React.FC<pageProps> = () => {

    const searchParams = useSearchParams();
    const id = searchParams.get('search-keyword');

    console.log(id);

    return <div>
        <Navbar />

        {id ? <TerminalSearchPage searchKeyword={id} city='seattle' /> : <InitalSearchPage />}
        
    </div>
}
export default page;