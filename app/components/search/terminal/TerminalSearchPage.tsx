import React, { useEffect, useState } from 'react';
import { QueryDocumentSnapshot,collection, where, query as firestoreQuery, getDocs } from "firebase/firestore";
import { firestore } from '@/app/js/firebase/firebase';
import PosterComponent from '../poster/PosterComponent';
import NoData from './NoData';

type TerminalSearchPageProps = {
    searchKeyword: string;
    city: string;
};

const TerminalSearchPage:React.FC<TerminalSearchPageProps> = ({searchKeyword , city}) => {

    const [docArray, setDocArray] = useState<Array<QueryDocumentSnapshot>>();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true);
            
            try {

                const query = firestoreQuery(collection(firestore, `cities/${city}/posters`), where("neighborhood", "==", searchKeyword));
                const querySnapshot = await getDocs(query);
                
                setDocArray(querySnapshot.docs);

            } catch (error) {
                console.error(error);
            }
            setIsLoading(false);
        };

        fetchData();

    }, [city, searchKeyword]);


    if (isLoading || docArray == null) return <div>Loading...</div>;

    if (docArray.length == 0) return < NoData city={city} />;

    return <div className='flex'>

        {docArray.map((doc) => {
            
            const data = doc.data();

            return <div className='flex content-start'>

                <PosterComponent
                key={doc.id}
                city={city}
                created={data.created}
                description={data.description}
                expriation={data.expiration}
                imageREF={data.imageRef}
                keyword={data.keyword}
                neighborhood={data.neighborhood}
                owner={data.owner}
                reccuring={data.reccuring}
                title={data.title}
                />

            </div>
        })}

    </div>
}
export default TerminalSearchPage;