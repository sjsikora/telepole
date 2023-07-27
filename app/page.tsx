import React from 'react';
import Navbar from './components/navbar/Navbar';

type pageProps = {
    
};

const page:React.FC<pageProps> = () => {
    
    return <div>
        <head>
            <title> Telepole </title>
            <link rel="icon" href="assets/favicon.ico" />
            <meta name="description"
                content="Placeholder"
            />
        </head>

        <Navbar />
    </div>
}
export default page;