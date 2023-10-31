import React from 'react';
import TackBoard from '../components/tack/TackBoard';
import Navbar from '../components/navbar/Navbar';

type pageProps = {
    
};

const page:React.FC<pageProps> = () => {
    
    return <div>
        <TackBoard />
    </div>
}
export default page;