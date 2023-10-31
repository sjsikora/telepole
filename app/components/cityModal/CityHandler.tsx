import { useSearchParams } from 'next/navigation';
import React from 'react';
import CityModal from './CityModal';
import { cities } from '@/app/js/setting';
import { auth } from '@/app/js/firebase/firebase';
import { Telepole_User } from '@/app/js/types';
import { set } from 'firebase/database';

type CityHandlerProps = {
    setCity : (city: string) => void
};

const CityHandler:React.FC<CityHandlerProps> = ({setCity}) => {

    const [searchParams] = React.useState(useSearchParams());
    const [city, setCityHandler] = React.useState(Object.keys(cities)[0]);
    const [modalOpen, setModalOpen] = React.useState(false);

    React.useEffect(() => {
        async function fetchData() {
            const cityParam = searchParams.get('city');

            if (cityParam && Object.keys(cities).includes(cityParam)) {
                setCity(cityParam);
                return;
            }

            if (auth.currentUser !== null) {
                const user = new Telepole_User();

                await user.getUserDataByID(auth.currentUser.uid)
                    .then((userValues) => {
                        console.log(userValues['mainCity']);
                        setModalOpen(false);
                        setCity(userValues['mainCity']);
                    })
                    .catch((error) => {
                        setModalOpen(true);
                    });

            } else {
                setModalOpen(true);
            }
        }

        fetchData();
    }, [searchParams]);

    function onClose(e: React.MouseEvent<HTMLButtonElement>) {
        setModalOpen(false);
        setCity(city);
    }

    function setCityModal (city : string ) {
        setCityHandler(city);
    }

    return <CityModal open = {modalOpen} onClose={onClose} setCityModal={setCityModal} />

}
export default CityHandler;