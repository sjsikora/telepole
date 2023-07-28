'use client';
import React from 'react';
import { storage, database } from '@/app/firebase/firebase';
import { ref, uploadBytes } from "firebase/storage";


type pageProps = {
    
};

const page:React.FC<pageProps> = () => {

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
export default page;