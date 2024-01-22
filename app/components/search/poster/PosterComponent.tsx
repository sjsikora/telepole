import React, { useEffect } from 'react';
import { useState } from 'react';

type PosterComponentProps = {
    city: string,
    created: string,
    description: string,
    expriation: string,
    imageREF: string,
    keyword: string
    neighborhood: string,
    owner: string,
    reccuring: boolean,
    title: string
};

const PosterComponent:React.FC<PosterComponentProps> = ({ city, created, description, expriation, imageREF, keyword, neighborhood, owner, reccuring, title}) => {

    const [poster, setPoster] = useState();

    useEffect(() => {
        
        const fetchData = async () => {
            
        };

        fetchData();
    }, []);
    
    return <div>
        <div>{title}</div>
        <div>{description}</div>
        <div>{neighborhood}</div>
        <div>{keyword}</div>
        <div>{reccuring}</div>
        <div>{owner}</div>
        <div>{imageREF}</div>
    </div>
}
export default PosterComponent;