'use client'

import { useSearchParams } from 'next/navigation';
import React from 'react';

type PoleProps = {
};

const Pole:React.FC<PoleProps> = () => {
    
    const searchParams = useSearchParams();
    const id = searchParams.get('id');

    if(!searchParams.has('id')) return <div> No pole selected </div>



    return <div>
        
        <p>{id}</p>
    </div>
}
export default Pole;