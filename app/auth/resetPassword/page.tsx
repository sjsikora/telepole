'use client';
import React from 'react';
import AuthModel from '@/app/components/auth/AuthModel';

type pageProps = {
    
};

const page:React.FC<pageProps> = () => {

    const [inputs, setInputs] = React.useState({email: ''})
    const [errorMessage, setErrorMessage] = React.useState('');

    console.log(inputs);

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // TODO: Send email to user to reset password
    }

    return <AuthModel 
        typeAuth='Reset Password'
        errorMessage=''
        inputs={{email: 'Email'}}
        handleRegister={handleRegister}
        handleChangeInput={handleChangeInput}
    />
}
export default page;