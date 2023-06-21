import React from 'react'
import Form from '../components/Form.jsx'

export const Hero = () => {
    return (
        <div className='w-full flex flex-col items-center'>
            <div className='p-10 text-[64px]'>Get Started with Telepole</div>
            <Form />
        </div>
    )
}

export default Hero;