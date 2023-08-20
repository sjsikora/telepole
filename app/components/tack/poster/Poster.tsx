'use client';
import React, { useEffect } from 'react';
import { storage, firestore } from '@/app/js/firebase/firebase';
import { ref, uploadBytes } from "firebase/storage";
import { auth } from '@/app/js/firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { addDoc, collection } from 'firebase/firestore';

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


    function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>): void {
        setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    function handleChangeSelect(e: React.ChangeEvent<HTMLSelectElement>): void {
        console.log(e.target.value);
        setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let city = 'seattle';

        if (inputs.title === '' || 
        inputs.description === '' || 
        inputs.neighborhood === '' || 
        inputs.imageRef === '' || 
        inputs.keywords === '' || 
        inputs.created === '' || 
        inputs.expiration === '' ||
        inputs.reccuringDays === '') return alert('Please fill in all fields.');

        let imageName = city + "_" + imageUpload.name + Date.now();
        await uploadImage(imageName);

        const posterRef = collection(firestore, `cities/${city}/posters`);
        
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
    
    return <div>
        <form onSubmit={handleRegister}>


            <div>
                <label htmlFor="title"> Title</label>
                <input type="title" name="title" id="title"
                    className='border-2 border-gray-300 rounded-md p-2 w-full'
                    placeholder='Title'
                    onChange={handleChangeInput} />
            </div>

            <div>
                <label htmlFor="description">Description</label>
                <input type="description" name="description" id="description" 
                    className='border-2 border-gray-300 rounded-md p-2 w-full'
                    placeholder='Description' 
                    onChange={handleChangeInput}/>
            </div>

            <div>
                <label htmlFor="keywords"> Neighborhood </label>
                <select id="neighborhood" name="neighborhood" onChange={handleChangeSelect} >
                    <option value="queenAnne"> Queen Anne </option>
                    <option value="universityDistrict"> University District</option>
                </select>
            </div>

            <div>
                <label htmlFor="keywords"> Keywords </label>
                <select id="keywords" name="keywords" onChange={handleChangeSelect} >
                    <option value="lostAndFound">Lost and Found</option>
                    <option value="food">Food</option>
                    <option value="liveMusic">Live Music</option>
                    <option value="theater">Theater</option>
                    <option value="festivals">Festivals</option>
                    <option value="clubsAndOrganizations">Clubs and Organizations</option>
                    <option value="services">Services</option>
                    <option value="garageOrYardSales">Garage or Yard Sale</option>
                    <option value="housing">Housing</option>
                    <option value="jobs">Jobs</option>
                    <option value="education">Education</option>
                    <option value="healthAndWellness">Health and Wellness</option>
                    <option value="helpWanted">Help Wanted</option>
                    <option value="other">Other</option>
                </select>
            </div>


        <input type="file" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if(!e.target.files) return; 
            setImageUpload(e.target.files[0])
        }} />

        <button> Submit Form </button>
        </form>
        
    </div>

}
export default Poster;