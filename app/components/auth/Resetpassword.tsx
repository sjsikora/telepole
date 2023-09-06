import Link from 'next/link';
import React from 'react';

type ResetpasswordProps = {
    
};

const Resetpassword:React.FC<ResetpasswordProps> = () => {
    
    return <form className='space-y-6 px-6 pb-4 flex flex-col justify-between'>
        <div />
        <h1 className='text-4xl flex justify-center font-bold'> Reset Pasword </h1>

        <div className='space-y-2 '>

            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" 
                    className='border-2 border-gray-300 rounded-md p-2 w-full'
                    placeholder='Email' />
            </div>
        </div>
        <div className='flex justify-center'>
            <button className='bg-spgreen text-white rounded-full text-2xl p-5 px-20'>
                Reset Password
            </button>
        </div>

        <div> 
            <div className='flex justify-center p-2'>
                    <div> New to Telepole? </div>
                    <div className='px-2'/>
                    <Link className="text-spgreen underline" href="./auth/signup">Sign up</Link>
            </div>
        </div>


        <div />
    </form>
}
export default Resetpassword;