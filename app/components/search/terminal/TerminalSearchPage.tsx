import React, { useEffect, useState } from 'react';
import { QueryDocumentSnapshot, QuerySnapshot, collection, doc, query as firestoreQuery, getDocs } from "firebase/firestore";
import { firestore } from '@/app/js/firebase/firebase';
import PosterComponent from '../poster/PosterComponent';

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

                const query = firestoreQuery(collection(firestore, `cities/${city}/neighborhood/${searchKeyword}/posters`));
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

    if (docArray.length == 0) return <div>No data for this keyword, please search another.</div>;

    return <div>

        {docArray.map((doc) => {
            
            const data = doc.data();

            return <PosterComponent
                key={doc.id}
                city={city}
                created={data.created}
                description={data.description}
                expriation={data.expiration}
                imageREF={data.imageRef}
                keyword={data.keywords}
                neighborhood={data.neighborhood}
                owner={data.owner}
                reccuring={data.reccuring}
                title={data.title}
            />
        })}

    </div>
}
export default TerminalSearchPage;