import React from 'react';
import Image from 'next/image'
import tack from '../../../public/icons/brass_tack.png'
import Poster from './poster/Poster';



type TackBoardProps = {
    
};

const TackBoard:React.FC<TackBoardProps> = () => {
    
    return <div className='flex flex-col items-center justify-center w-full p-[1rem]'>

        <div className='w-full max-w-2xl bg-white shadow-lg border-2 border-black'>
            <div className='flex justify-between items-center'>
                <Image className='p-[0.5rem]' alt="Telepole logo" src={tack} width={50} />
                <p className='text-xl font-bold'> TACK YOUR POSTER </p>
                <Image className='p-[0.5rem]' alt="Telepole logo" src={tack} width={50} />
            </div>
            <Poster />
        </div>


    </div>
}
export default TackBoard;