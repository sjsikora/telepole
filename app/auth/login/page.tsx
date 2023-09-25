'use client';
import AuthModel from '@/app/components/auth/AuthModel';
import { auth } from '@/app/js/firebase/firebase';
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import React from 'react';



type pageProps = {

};

const page: React.FC<pageProps> = () => {

    const router = useRouter();
    const [inputs, setInputs] = React.useState({ email: '', password: '' })
    const [errorMessage, setErrorMessage] = React.useState('');

    console.log(inputs);

    //Check if user is already signed in:
    onAuthStateChanged(auth, (user) => {
        if (user) router.push('/');
    });

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (inputs.email === '' || inputs.password === '') return alert('Please fill in all fields.');

        const user = signInWithEmailAndPassword(auth, inputs.email, inputs.password)
            .then((userCredential) => {
                return userCredential.user;
            })
            .catch((error) => {

                if (error.code === 'auth/user-not-found') setErrorMessage("User not found. Please check your email and password and try again.");
                else if (error.code === 'auth/invalid-email') setErrorMessage("Invalid email. Please check your email and try again.");

            });

    }

    return <AuthModel
        typeAuth='Log in'
        errorMessage={errorMessage}
        inputs={{ email: 'Email', password: 'Password' }}
        handleRegister={handleRegister}
        handleChangeInput={handleChangeInput}
    />

}
export default page;