import React from 'react'

function Form() {
    return (
        <form className='bg-lightblue p-3'>
            <div className=' text-black p-10'>            
                <label className=' text-black bg-lightblue text-[64px]'>
                    <input className='bg-lightblue border-b-4 border-white placeholder-white text-white text-[64px]'
                        placeholder="Email"
                        id = "email"
                        ></input>
                </label>
            </div>
            <div className='bg-lightblue text-black p-10'>            
                <label className=' text-black bg-lightblue text-[64px]'>
                    <input className='bg-lightblue border-b-4 border-white placeholder-white text-white text-[64px]'
                        type='password'
                        placeholder="Password"
                        id = "password"></input>
                </label>
            </div>
            <button className='w-full p-10' type='submit'>
                <div className='bg-spblack flex justify-center'>
                    <h1 className=' text-white text-[64px] border-x-40'> Login </h1>
                </div>
            </button>
            <button className='w-full p-10' type='submit'>
                <div className='bg-spblack flex justify-center'>
                    <h1 className='text-white text-[64px]'>Sign Up</h1>
                </div>
            </button>
        </form>
    )
}

export default Form;