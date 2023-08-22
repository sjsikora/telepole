'use client'
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/app/js/firebase/firebase';
import { signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';

type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {

    const router = useRouter();
    const [inputs, setInputs] = React.useState({email: '', password: ''})
    const [errorMessage, setErrorMessage] = React.useState('');

    //Check if user is already signed in:
    onAuthStateChanged(auth, (user) => {
        if (user) router.push('/');
    });

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({...prev, [e.target.name]: e.target.value}));
    }

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (inputs.email === '' || inputs.password === '') return alert('Please fill in all fields.');

        const user = signInWithEmailAndPassword(auth, inputs.email, inputs.password)
            .then((userCredential) => {
                return userCredential.user;
            })
            .catch((error) => {

                if(error.code === 'auth/user-not-found') setErrorMessage("User not found. Please check your email and password and try again.");
                else if(error.code === 'auth/invalid-email') setErrorMessage("Invalid email. Please check your email and try again.");

            });

    }

    return <form className='space-y-6 px-6 pb-4 h-screen flex flex-col justify-around'
                onSubmit={handleRegister}>
        <div />
        <h1 className='text-4xl flex justify-center font-bold'> Log in </h1>

        <div className='space-y-2 '>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" 
                    className='border-2 border-gray-300 rounded-md p-2 w-full'
                    placeholder='Email'
                    onChange={handleChangeInput} />
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
                Log in
            </button>
        </div>

        <div> 
            <div className='flex justify-center'>
                <Link className="text-spgreen underline" href="./auth/resetPassword">I forgot my password</Link>
            </div>
            <div className='flex justify-center p-2'>
                <div> New to Telepole? </div>
                <div className='px-2'/>
                <Link className="text-spgreen underline" href="./auth/signup">Sign up</Link>
            </div>
        </div>


        <div />
    </form>
}
export default Login;