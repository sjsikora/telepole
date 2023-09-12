'use client'
import { auth } from '@/app/js/firebase/firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Telepole_User } from '@/app/js/types';
import { FirebaseError } from 'firebase/app';

type SignupProps = {
    
};

const Signup:React.FC<SignupProps> = () => {

    const router = useRouter();
    const [inputs, setInputs] = React.useState({displayName:'', email: '', password: ''});
    const [errorMessage, setErrorMessage] = React.useState('');
    const [loading, setLoading] = React.useState(true);

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

        const user = new Telepole_User(
            'seattle',
            undefined,
            inputs.email,
            inputs.displayName,
            [],
            inputs.password);



        try {
            await user.uploadUser()
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
    
    return <form className='space-y-6 px-6 pb-4 flex flex-col justify-between' 
                onSubmit={handleRegister}>
        <div />
        <h1 className='text-4xl flex justify-center font-bold'> Register </h1>

        <div className='space-y-2 '>

            <div>
                <label htmlFor="displayName"> Display Name</label>
                <input type="displayName" name="displayName" id="displayName" 
                    className='border-2 border-gray-300 rounded-md p-2 w-full'
                    placeholder='Display Name'
                    onChange={handleChangeInput} />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" 
                    className='border-2 border-gray-300 rounded-md p-2 w-full'
                    placeholder='Email' 
                    onChange={handleChangeInput}/>
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password"
                    className='border-2 border-gray-300 rounded-md p-2 w-full'
                    placeholder='Password'
                    onChange={handleChangeInput} />
            </div>
        </div>

        <p className='text-red-600'>{errorMessage}</p>

        <div className='flex justify-center'>
            <button className='bg-spgreen text-white rounded-full text-2xl p-5 px-20'>
                Sign Up
            </button>
        </div>

        <div> 
            <div className='flex justify-center p-2'>
                    <div> Already have an account? </div>
                    <div className='px-2'/>
                    <Link className="text-spgreen underline" href="./auth/login">Log in</Link>
            </div>
        </div>


        <div />
    </form>
}
export default Signup;