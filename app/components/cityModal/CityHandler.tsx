import { useSearchParams } from 'next/navigation';
import React from 'react';
import CityModal from './CityModal';
import { cities } from '@/app/js/setting';

type CityHandlerProps = {
    setCity : (city: string) => void
};

const CityHandler:React.FC<CityHandlerProps> = ({setCity}) => {

    const [searchParams] = React.useState(useSearchParams());
    const [city, setCityHandler] = React.useState(Object.keys(cities)[0]);
    const [modalOpen, setModalOpen] = React.useState(true);

    if(Object.keys(cities).includes(searchParams.get('city') as string) ) {
        setModalOpen(false);
        setCity(searchParams.get('city') as string);
        return <div></div>
    }

    function onClose(e: React.MouseEvent<HTMLButtonElement>) {
        setModalOpen(false);
        setCity(city);
    }

    function setCityModal (city : string ) {
        setCityHandler(city);
    }
    
    if(!modalOpen) {
        setCity(city);
        return <div></div>
    }

    return <CityModal open = {modalOpen} onClose={onClose} setCityModal={setCityModal} />


}
export default CityHandler;