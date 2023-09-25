import React from 'react';

type SubmitButtonProps = {
    name: string;
    
};

const SubmitButton:React.FC<SubmitButtonProps> = ({name}) => {
    
    return <div className='flex justify-center'>
        <button className='bg-spgreen text-white rounded-full text-2xl p-5 px-20'>
            {name}
        </button>
    </div>
}
export default SubmitButton;