import React from 'react'
import TextInput from './TextInput.jsx'

export const Hero = () => {
    return (
        <div className='w-full flex flex-col items-center'>
            <TextInput name={"Email"} />
        </div>
    )
}

export default Hero;