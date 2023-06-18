import React from 'react'

function TextInput({name}) {
    return (
        <div>
            <h1 className='text-[64px] text-black border-r-4'>
                {name}
            </h1>
        </div>
    )
}

export default TextInput;