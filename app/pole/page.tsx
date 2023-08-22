import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Pole from '../components/pole/Pole';

type pageProps = {
    
};

const page:React.FC<pageProps> = () => {
    
    return <div>

        <Navbar />
        <Pole />

    </div>
}
export default page;