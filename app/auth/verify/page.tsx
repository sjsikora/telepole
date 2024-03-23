import React, { use, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/app/js/firebase/firebase';
import CityHandler from '@/app/components/cityModal/CityHandler';
import Loading from '@/app/components/loading/Loading';
import Navbar from '@/app/components/navbar/Navbar';

type pageProps = {

    city: string;
    redirectTo: string;
    
};

// This is a simple page. Verify the user is logged in and if so, route them to the correct page. Otherwise, route them to the login page.
const page:React.FC<pageProps> = ({city, redirectTo}) => {

    //If user is not signed in, redirect to login page:
    const router = useRouter();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) router.push(`/auth/login?city=${city}`);
            else router.push(redirectTo + `?city=${city}`);
        });
    });

    return <div>
        <Navbar city={city} />
        <Loading />
    </div>
}
export default page;