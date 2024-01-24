import React, { useEffect } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { storage } from '@/app/js/firebase/firebase';
import { getDownloadURL, ref } from 'firebase/storage';
import { set } from 'firebase/database';
import PosterModal from './PosterModal';

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
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        
        const fetchData = async () => {
            const reference = ref(storage, `/images/${city}/${imageREF}`);
            await getDownloadURL(reference).then((x) => {
                setURL(x);
            })
            
        };

        fetchData();
    }, [storage, city, imageREF]);

    const imageSyle = {
        display: 'flex'
    }


    const onError = () => {
        setURL('https://firebasestorage.googleapis.com/v0/b/telepole-d461a.appspot.com/o/Asset%203.svg?alt=media&token=b3e30018-2e33-4b96-826c-a13559dae22b');
    }

    return <div>
        <Image src={url} width={200} height={150} onClick={() => setModalOpen(true)} style={imageSyle} alt={"Image of Poster"} />
        <PosterModal 
            isOpen={modalOpen} 
            onClose={() => setModalOpen(false)} 
            city={city} created={created} 
            description={description} 
            expriation={expriation} 
            imageREF={imageREF} 
            keyword={keyword} 
            neighborhood={neighborhood} 
            owner={owner} reccuring={reccuring} 
            title={title} 
            url={url} />
    </div>
}

export default PosterComponent;
