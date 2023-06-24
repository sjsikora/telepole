'use client'

import { useState } from 'react';

function ErrorMessage({message, show}) {
    return <div className='p-3'> 
    <h3 className= 'text-[20px] p-3 font-bold text-red-500 bg-gray-300'>{message}
    </h3>
    </div>
}


function vaildateEmail(email) {
    var filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(email)) {return true;}
    return false;
}

function vaildatePassword(password)  { 
    var passw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,50}$/;
    if(passw.test(password)) {return true;}
    else {return false;}
}


export function Form() {

    const [inputs, setInputs] = useState({email: '', password: ''});


    const handleChange = (event) => {
        setInputs(values => ({...values, [event.target.name]: event.target.value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    }


    return (
        <form onSubmit={handleSubmit} className='bg-lightblue p-3'>
            <div className='text-black p-10'>            
                <label className=' text-black bg-lightblue text-[45px]'>
                    <input className='bg-lightblue border-b-4 border-white placeholder-white text-white text-[64px]'
                        placeholder="Email"
                        name='email'
                        value = {inputs.email}
                        onChange={handleChange}
                        />
                </label>
                <ErrorMessage message={"Must be a vaild email."} show={vaildateEmail(inputs.email)} />
            </div>
            <div className='bg-lightblue text-black p-10'>            
                <label className=' text-black bg-lightblue text-[45px]'>
                    <input className='bg-lightblue border-b-4 border-white placeholder-white text-white text-[64px]'
                        type='password'
                        placeholder="Password"
                        name = "password" 
                        value = {inputs.password}
                        onChange={handleChange}/>
                </label>
                <ErrorMessage message={"Password must be at least 6 charaters long and have one number and special character"} show={vaildatePassword(inputs.password)}/>
            </div>
            <button className='w-full p-8' type='submit'>
                <div className=' flex justify-center'>
                    <h1 className=' px-20 bg-spblack text-white text-[50px] border-x-40'>Sign Up</h1>
                </div>
            </button>
            <button className='w-full p-8' type='submit'>
                <div className='flex justify-center'>
                    <h1 className='px-20 bg-spblack text-white text-[50px]'>Login</h1>
                </div>
            </button>
        </form>
    )
}

export default Form;