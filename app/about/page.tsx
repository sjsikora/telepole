import React from 'react';
import Navbar from '../components/navbar/Navbar';

type pageProps = {
    
};

const page:React.FC<pageProps> = () => {
    
    return <html lang='en'>
        <head>
            <meta charSet='utf-8' />
            <title> Telepole - About</title>
            <link rel="icon" href="assets/favicon.ico" />
            <meta name="description"
                content="Learn more about the people behind Telepole." />
        </head>
        <body>
            <Navbar />
            <div>
                <h1> About </h1>
            </div>
        </body>
    </html>

}

export default page;