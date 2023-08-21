'use client';
import React, { useEffect } from 'react';
import { storage, firestore } from '@/app/js/firebase/firebase';
import { ref, uploadBytes } from "firebase/storage";
import { auth } from '@/app/js/firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { addDoc, collection } from 'firebase/firestore';
import { error } from 'console';

type PosterProps = {
    

};

const Poster:React.FC<PosterProps> = () => {

    //If user is not signed in, redirect to login page:
    const router = useRouter();

    //Wrapped in a useEffect because with get an error if not
    useEffect(() => {onAuthStateChanged(auth, (user) => {
            if (!user) router.push('/auth/login');
        });
    }, []);


    const [imageUpload, setImageUpload] = React.useState<any>(null);
    const [errorMessage, setErrorMessage] = React.useState('');

    const [inputs, setInputs] = React.useState({
        title:'',
        description: '',
        neighborhood: '',
        imageRef: '',
        keywords: '',
        created: '',
        reccuring : false,
        expiration: '',
        reccuringDays: ''
    });


    const uploadImage = async (imageName: string) => {
        const imageRef = ref(storage, `images/${imageName}`);
        uploadBytes(imageRef, imageUpload)
    };


    function handleChangeInput(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>): void {
        setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    function handleChangeCheckbox(e: React.ChangeEvent<HTMLInputElement>): void {
        setInputs((prev) => ({...prev, [e.target.name]: e.target.checked}));
    };

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let city = 'seattle';
        

        if(imageUpload === null) {
            setErrorMessage('Please upload an image.');
            return;
        }

        let imageName = city + "_" + imageUpload.name + Date.now();
        await uploadImage(imageName);

        const posterRef = collection(firestore, `cities/${city}/posters`);

        // Check if all fields are filled in
        if (!(Object.values(inputs).filter((v) => v === "").length === 0)) {
            return alert('Please fill in all fields.');
        } 


        
        addDoc(posterRef, {
            city: city,
            owner: auth.currentUser?.uid,
            title: inputs.title,
            description: inputs.description,
            neighborhood: inputs.neighborhood,
            imageRef: `images/${imageName}`,
            keywords: inputs.keywords,
            created: inputs.created,
            expiration: inputs.expiration,
            reccuring: inputs.reccuring,
            reccuringDays: inputs.reccuringDays
        })
            .then(() => {
                alert('Poster added successfully.');
            })
            .catch((error) => {
                alert(error);
            })
    }

    console.log(inputs);
    
    return <div>
        <form onSubmit={handleRegister}>

            <p className='text-red-600'>{errorMessage}</p>

            <input type="file" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if(!e.target.files) return; 
                    setImageUpload(e.target.files[0])
            }} />

            <div>
                <label htmlFor="title"> Title</label>
                <input type="title" name="title" id="title"
                    className='border-2 border-gray-300 rounded-md p-2 w-full'
                    placeholder='Title'
                    onChange={(e) => handleChangeInput(e)} />
            </div>

            <div>
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" 
                    className='border-2 border-gray-300 rounded-md p-2 w-full'
                    placeholder='Description' 
                    onChange={(e) => handleChangeInput(e)} />
            </div>

            <div>
                <label htmlFor="keywords"> Neighborhood </label>
                <select id="neighborhood" name="neighborhood" placeholder='' onChange={(e) => handleChangeInput(e)} >
                    <option value="queenAnne"> Queen Anne </option>
                    <option value="universityDistrict"> University District</option>
                </select>
            </div>

            <div>
                <label htmlFor="keywords"> Keywords </label>
                <select id="keywords" name="keywords" onChange={(e) => handleChangeInput(e)}>
                    <option value="lostAndFound">Lost and Found</option>
                    <option value="music">Music</option>
                    <option value="food">Food</option>
                    <option value="clubsAndOrganizations">Clubs and Organizations</option>
                    <option value="jobsAndServices">Jobs and Services</option>
                    <option value="garageOrYardSales">Garage or Yard Sale</option>
                    <option value="conventions">Conventions</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div>
                <label htmlFor="reccuring">Recurring? </label>
                <input type="checkbox" name="reccuring" id="reccuring" onChange={(e) => handleChangeCheckbox(e)} />
            </div>

            {inputs.reccuring && <div>
                <div>
                    <label htmlFor="reccuringDays">Recurring Days </label>
                    <select id="reccuringDays" name="reccuringDays" onChange={(e) => handleChangeInput(e)}>
                        <option value="sunday">Sunday</option>
                        <option value="monday">Monday</option>
                        <option value="tuesday">Tuesday</option>
                        <option value="wednesday">Wednesday</option>
                        <option value="thursday">Thursday</option>
                        <option value="friday">Friday</option>
                        <option value="saturday">Saturday</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="reccuringTime">Recurring Time </label>
                    <input type="time" name="reccuringTime" id="reccuringTime" onChange={(e) => handleChangeInput(e)} />
                </div>

            </div>}

            {!inputs.reccuring && <div>

                <label htmlFor='expiration'>Expiration Date </label>
                <input type="date" name="expiration" id="expiration" onChange={(e) => handleChangeInput(e)} />
            
                
            </div>}



        <button> Submit Form </button>
        </form>
        
    </div>

}
export default Poster;