"use client";
import React from 'react';
import AuthModel from '@/app/components/auth/AuthModel';
import { Telepole_User } from '@/app/js/types';
import { FirebaseError } from 'firebase/app';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/app/js/firebase/firebase';
import { useRouter } from 'next/navigation';


type pageProps = {
    
};

const page:React.FC<pageProps> = () => {

    const router = useRouter();
    const [inputs, setInputs] = React.useState({displayName:'', email: '', password: ''});
    const [errorMessage, setErrorMessage] = React.useState('');
    const [loading, setLoading] = React.useState(true);

    console.log(inputs);

    //Check if user is already signed in:
    onAuthStateChanged(auth, (user) => {
        if (user) router.push('/');
        if (loading && !user) setLoading(false);
    });

    if(loading) return <div className='h-screen flex items-center justify-center'> Loading... </div> 

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (inputs.displayName === '' || inputs.email === '' || inputs.password === '') return alert('Please fill in all fields.');


        setLoading(true);

        const user = new Telepole_User('seattle');
        try {
            await user.uploadUser(inputs.email, inputs.password, inputs.displayName);
        } catch (error: unknown) {
            
            if(error instanceof FirebaseError) {
                if(error.code === 'auth/email-already-in-use') setErrorMessage("Email already in use. Log in or use a different email.");
                if(error.code === 'auth/weak-password') setErrorMessage("Password must be at least 6 characters long.");
            } else {
                alert(error);
            }

            
        } finally {
            setLoading(false);
        }
        
    }
    
    return <AuthModel
        typeAuth='Sign up'
        errorMessage={errorMessage}
        inputs={{displayName: 'Display Name', email: 'Email', password: 'Password'}}
        handleRegister={handleRegister}
        handleChangeInput={handleChangeInput}
    />
}
export default page;