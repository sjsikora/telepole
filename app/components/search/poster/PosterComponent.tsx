import React, { useEffect } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import PosterModal from './PosterModal';

type PosterComponentProps = {
    city: string,
    created: Date,
    description: string,
    expriation: Date,
    imageREF: string,
    keyword: string
    neighborhood: string,
    owner: string,
    reccuring: Date,
    title: string,
    url: string
};

const PosterComponent:React.FC<PosterComponentProps> = ({ city, created, description, expriation, imageREF, keyword, neighborhood, owner, reccuring, title, url}) => {

    const [modalOpen, setModalOpen] = useState(false);

    const imageSyle = {
        display: 'flex'
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
