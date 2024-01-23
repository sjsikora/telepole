import React, { useEffect } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { storage } from '@/app/js/firebase/firebase';
import { getDownloadURL, ref } from 'firebase/storage';

type PosterComponentProps = {
    city: string,
    created: Date,
    description: string,
    expriation: string,
    imageREF: string,
    keyword: string
    neighborhood: string,
    owner: string,
    reccuring: Date,
    title: string
};

const PosterComponent:React.FC<PosterComponentProps> = ({ city, created, description, expriation, imageREF, keyword, neighborhood, owner, reccuring, title}) => {

    const [url, setURL] = useState('');

    useEffect(() => {
        
        const fetchData = async () => {
            const reference = ref(storage, `/images/${city}/${imageREF}`);
            await getDownloadURL(reference).then((x) => {
                setURL(x);
            })
            
        };

        fetchData();
    }, [storage, city, imageREF]);
    
    return <div>
        <div>Title: {title}</div>
        <div>Description: {description}</div>
        <div>Neighborhood: {neighborhood}</div>
        <div>Keyword: {keyword}</div>
        <Image src={url} width={500} height={500} alt={"t"} />
        <div>{reccuring instanceof Date ? reccuring.toISOString() : ''}</div>
        <div>{owner}</div>
        <div>{imageREF}</div>
    </div>
}
export default PosterComponent;

function useRequestState<T>(): { setData: any; setError: any; setLoading: any; state: any; } {
        throw new Error('Function not implemented.');
    }
