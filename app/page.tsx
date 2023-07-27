import React from 'react';
import Navbar from './components/navbar/Navbar';

type pageProps = {
    
};

const page:React.FC<pageProps> = () => {
    
    return <html lang='en'>
        <head>
            <meta charSet='utf-8' />
            <title> Telepole </title>
            <link rel="icon" href="assets/favicon.ico" />
            <meta name="description"
                content="Placeholder"
            />
        </head>
        <body>
            <div>
                <Navbar />
            </div>
        </body>
    </html>
}
export default page;