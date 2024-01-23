import React from 'react';
import CityHandler from '../../cityModal/CityHandler';
import Link from 'next/link';

type NoDataProps = {

    city: string
    
};

const NoData:React.FC<NoDataProps> = ({city}) => {


    return <div className='p-10'>


        <div className='flex justify-center'>
            <div className='p-5 inline-block bg-spgreen rounded-xl text-white text-lg items-center justify-center overflow-hidden' > 


                Error: There was no data for this keyword. Please search another. 

                
                <div className='p-3 rounded-md flex justify-center'>
                    <Link href={`/search/?city=${city}`}>
                    <div className=' p-2 rounded-md bg-white inline-block text-black '>
                        Back to Search
                    </div>
                    </Link>
                </div> 
            </div>
        </div>
        
        
        
    </div>
}
export default NoData;