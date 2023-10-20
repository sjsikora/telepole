import React from 'react';

type CityModalProps = {
    open: boolean,
    onClose: () => void,
    setCityModal: (city: string) => void,
    possibleCities: string[],
    children: string
};

const CityModal:React.FC<CityModalProps> = ({ open, onClose, setCityModal, possibleCities, children}) => {

    return <div className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/40" : "invisible"}`}>
        <div className={`bg-white rounded-xl shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
            
            <div className='text-xl'>
                Please select a city
            </div>

            <div>
                <select id="city" name="city"
                className='border-2 border-gray-300 rounded-md p-2 w-32'
                onChange={(e) => setCityModal(e.target.value)} >
                    {possibleCities.map((city) => {
                        return <option value={city}>{city}</option>;
                    })}
                </select>
            </div>



        </div>
    </div>
}
export default CityModal;