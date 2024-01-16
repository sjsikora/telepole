import { useSearchParams } from 'next/navigation';
import React from 'react';
import CityModal from './CityModal';
import { cities } from '@/app/js/setting';
import { auth } from '@/app/js/firebase/firebase';
import { Singleton, Telepole_User } from '@/app/js/types';

/*
    This component will handle the city selection. It is important that every single page
    declares this at the start to ensure that every city has updated and correct city infomation.
    The component will first check to see if the city is in the search params, if not it will check
    the Singleton class. If that fails, it will open the modal to select a city. This ensures that
    when the pages check the city in the Singleton class, it will always be there and accurate.
*/


type CityHandlerProps = {};

const CityHandler:React.FC<CityHandlerProps> = () => {

    const [searchParams] = React.useState(useSearchParams());
    const [cityInModal, setCityInModal] = React.useState(Object.keys(cities)[0]);
    const [modalOpen, setModalOpen] = React.useState(false);

    // This useEffect will check to see if the searchParams has a city parameter. 
    // If it does, it will set the city to that value. If it doesn't, it will try
    // to get the user's city from the Singleton class. If that fails, it will open
    // the modal to select a city.
    React.useEffect(() => {
        async function fetchData() {

            // Find city in search params.
            const cityParam = searchParams.get('city');

            if (cityParam && Object.keys(cities).includes(cityParam)) {
                Singleton.getInstance().setCity(cityParam);
                return;
            }

            // Find city in Singleton
            const singleton = Singleton.getInstance();
            const singletonCity = await singleton.getCity();

            if(singletonCity !== "") {
                return;
            }

            if(auth.currentUser !== null) {

                const user = new Telepole_User();
                const authCity = await user.getUserDataByID(auth.currentUser.uid)
                
                    .then((userValues) => {
                        return userValues['mainCity'];
                    })
                    .catch((error) => {
                        throw new Error(error);
                    });

                Singleton.getInstance().setCity(authCity);
            }

            setModalOpen(true);
        }

        fetchData();
        
    }, [searchParams]);

    // When we finally close our Modal, we will know that the city in var "cityInModal" is the correct city.
    // We will then set the city in the Singleton class to that city.
    function onClose(e: React.MouseEvent<HTMLButtonElement>) {
        Singleton.getInstance().setCity(cityInModal);
        setModalOpen(false);
    }

    // When the city is selected in the modal, this function will be called.
    // It will set "cityInModal" to the selected city.
    function setCityModal (city : string ) {
        setCityInModal(city);
    }

    return <CityModal open = {modalOpen} onClose={onClose} setCityModal={setCityModal} />

}
export default CityHandler;