import React from 'react';
import { SingleMap } from '@/app/js/setting';

type CityModalProps = {
    open: boolean,
    onClose: (e: React.MouseEvent<HTMLButtonElement>) => void,
    setCityModal: (city: string) => void,
    possibleCities: SingleMap,
};

const CityModal:React.FC<CityModalProps> = ({ open, onClose, setCityModal, possibleCities}) => {

    return <div className={`overscroll-none fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/40" : "invisible"}`}>
        <div className={`bg-white rounded-xl shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
            
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
            

            <div className='flex justify-center p-2'>
                <div className='text-xl p-3'>
                    Please select a city:
                </div>

                <select id="city" name="city"
                className='border-2 border-gray-300 rounded-md p-2 w-32'
                onChange={(e) => setCityModal(e.target.value)} >

                    {Object.keys(possibleCities).map((key) => {
                        return <option key={key} value={key}>{possibleCities[key]}</option>
                    })} 

                </select>
                <button onClick={onClose}>

                    <span className="absolute top-2 right-1 material-symbols-outlined"> close</span>
                </button>
            </div>



        </div>
    </div>
}
export default CityModal;