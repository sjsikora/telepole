'use client';
import AuthModel from '@/app/components/auth/AuthModel';
import { auth } from '@/app/js/firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';

type pageProps = {

};

const Page: React.FC<pageProps> = () => {

    const [inputs, setInputs] = React.useState({ email: '', password: '' })
    const [errorMessage, setErrorMessage] = React.useState('');

    const setCityHandler = (city: string) => {}

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
        setCityHandler={setCityHandler}
    />

}
export default Page;