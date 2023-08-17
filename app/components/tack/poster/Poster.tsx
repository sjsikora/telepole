'use client';
import React from 'react';
import { storage, database } from '@/app/js/firebase/firebase';
import { ref, uploadBytes } from "firebase/storage";
import { auth } from '@/app/js/firebase/firebase'
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import Navbar from '@/app/components/navbar/Navbar';

type PosterProps = {
    



    
};

const Poster:React.FC<PosterProps> = () => {

    //If user is not signed in, redirect to login page:
    const router = useRouter();
    onAuthStateChanged(auth, (user) => {
        if (!user) router.push('/auth/login');
    });


    const [imageUpload, setImageUpload] = React.useState<any>(null);

    const uploadImage = async () => {
        
        const imageRef = ref(storage, `images/${imageUpload.name + Date.now()}`);
        uploadBytes(imageRef, imageUpload)
            .then(() => {
                alert('Image uploaded successfully');
            })


        // TODO: Need to "vet" the image before allowing it to be uploaded.

    };
    
    return <div>

        <input type="file" onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if(!e.target.files) return; 
            setImageUpload(e.target.files[0])
        }} />

        <button onClick={uploadImage}> Upload Image</button>
        
    </div>

}
export default Poster;