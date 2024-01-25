'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Telepole_Poster } from '@/app/js/types';
import { citiesNeighborhoods, keywords } from '@/app/js/setting';

type PosterProps = {
    city: string
};

const Poster:React.FC<PosterProps> = ({city}) => {
    const [imageUpload, setImageUpload] = React.useState<any>(null);
    const [errorMessage, setErrorMessage] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [inputs, setInputs] = React.useState({
        title:'required',
        description: 'required',
        neighborhood: 'required',
        imageRef: '',
        keyword: 'required',
        reccuring : false,
        expiration: ''
    });

    //If user is not signed in, redirect to login page:
    const router = useRouter();

    function handleChangeInput(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>): void {
        setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    function handleChangeCheckbox(e: React.ChangeEvent<HTMLInputElement>): void {
        setInputs((prev) => ({...prev, [e.target.name]: e.target.checked}));
    };

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        

        if(imageUpload === null) {
            setErrorMessage('Please upload an image.');
            setLoading(false);
            return;
        }

        // Check if all fields are filled in
        if (!(Object.values(inputs).filter((v) => v === "required").length === 0)) {
            setErrorMessage('Please fill in all fields.');
            setLoading(false);
            return;
        }

        let currentDate = new Date();
        let expirationDate = new Date();

        if(!inputs.reccuring) {

            if(inputs.expiration === '') {
                setErrorMessage('Please enter a valid date.');
                setLoading(false);
                return;
            }

            expirationDate = new Date(inputs.expiration);

            if(expirationDate < currentDate) {
                setErrorMessage('Please enter a date in the future.');
                setLoading(false);
                return;
            }
        }

        // Upload image to firebase storage
        let poster = new Telepole_Poster(city);

        await poster.uploadPoster(
            inputs.title,
            inputs.description,
            inputs.neighborhood,
            imageUpload,
            inputs.keyword,
            expirationDate,
            inputs.reccuring,
         )
            .catch((error) => {
                console.log(error);
                setErrorMessage(error.message);
                setLoading(false);
                return;
            })
            .then(() => {
                router.push(`/?city=${city}`);
            });

    }

    console.log(inputs);
    
    return <div>
        <form onSubmit={handleRegister} className='p-5 flex flex-col'>

            <div className='py-2'>
                <label htmlFor="title"> Title</label>
                <input type="title" name="title" id="title"
                    className='border-2 border-gray-300 rounded-md p-2 w-full'
                    placeholder='Mouse Rat Concert for All Ages'
                    onChange={(e) => handleChangeInput(e)} />
            </div>

            <div>
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" 
                    className='border-2 border-gray-300 rounded-md p-2 w-full'
                    placeholder='A free concert in Seattle Center' 
                    onChange={(e) => handleChangeInput(e)} />
            </div>

            <div className='py-2'>
                <label htmlFor="keywords"> Neighborhood </label>
                <select id="neighborhood" name="neighborhood"
                    className='border-2 border-gray-300 rounded-md p-2 w-full'
                    onChange={(e) => handleChangeInput(e)} >
                    <option value="placeHolder"> Choose a Neighborhood </option>

                    {city ? Object.keys(citiesNeighborhoods[city]).map((key) => {
                        return <option key={key} value={key}>{citiesNeighborhoods[city][key]}</option>
                    }) : <option value='placeHolder'> Loading.. Please wait</option>}
                    
                </select>
            </div>

            <div className='py-2'>
                <label htmlFor="keyword"> Event Type </label>
                <select id="keyword" name="keyword" 
                    className='border-2 border-gray-300 rounded-md p-2 w-full'
                    onChange={(e) => handleChangeInput(e)}>

                    {Object.keys(keywords).map((key) => {
                        return <option key={key} value={key}>{keywords[key]}</option>
                    })}

                </select>
            </div>

            <div className='py-2'>
                <label htmlFor="reccuring">Recurring? </label>
                <input type="checkbox" name="reccuring" id="reccuring" onChange={(e) => handleChangeCheckbox(e)} />
            </div>

            {!inputs.reccuring && <div className='py-2'>

                <label htmlFor='expiration'>Event Date </label>
                <input type="date" name="expiration" id="expiration" onChange={(e) => handleChangeInput(e)} />
            
            </div>}
            
            <div className='py-2'>

                <label htmlFor="imageUpload">Upload your Poster</label>
                <br />

                <input type="file" name='imageUpload' id='imageUpload' className='p-2' accept='image/png, image/jpeg, image/jpg'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        if(!e.target.files) return; 
                        setImageUpload(e.target.files[0])
                    }} />

            </div>

            <p className='text-red-600 py-2'>{errorMessage}</p>

            <div className='flex justify-center'>

            {!loading && 
                <button className='bg-spgreen text-white rounded-md p-3'>
                    Upload my Poster
                </button>}
                
            {loading &&
                <div className='bg-spgreen text-white rounded-md p-3'>
                    Uploading...
                </div>}
        </div>
        </form>
        
    </div>

}
export default Poster;