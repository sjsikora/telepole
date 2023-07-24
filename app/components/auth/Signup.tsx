import Link from 'next/link';
import React from 'react';

type SignupProps = {
    
};

const Signup:React.FC<SignupProps> = () => {
    
    return <form className='space-y-6 px-6 pb-4 h-screen flex flex-col justify-between'>
        <div></div>
        <h1 className='text-4xl flex justify-center font-bold'> Register </h1>

        <div className='space-y-2 '>

            <div>
                <label htmlFor="displayName"> Display Name</label>
                <input type="displayName" name="displayName" id="displayName" 
                    className='border-2 border-gray-300 rounded-md p-2 w-full'
                    placeholder='Display Name' />
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" 
                    className='border-2 border-gray-300 rounded-md p-2 w-full'
                    placeholder='Email' />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password"
                    className='border-2 border-gray-300 rounded-md p-2 w-full'
                    placeholder='Password' />
            </div>
        </div>
        <div className='flex justify-center'>
            <button className='bg-spgreen text-white rounded-full text-4xl p-5 px-20'>
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