"use client";
import React from 'react';

type DropdownProps = {
    
};

const Dropdown:React.FC<DropdownProps> = () => {

    const [city, setCity] = React.useState<string>('Seattle');
    
    return <div>
        <p className='text-5xl font-bold'> Welcome to Telepole. </p>

        <div className='pl-5 text-xl p-5 flex justify-center'>
            <p>Your connection to</p> <select id="city" name="city"
                className='border-2 border-gray-300 rounded-md p-2 w-32'
                onChange={(e) => setCity(e.target.value)} >
                <option value="Seattle"> Seattle </option>
                <option value="Kelowna"> Kelowna </option>
            </select>
            <p className='inline text-center'>, streamlined.</p>
        </div>
        
        <p className='pl-5 text-2xl'> Your online telephone pole.</p>
    </div>
}
export default Dropdown;