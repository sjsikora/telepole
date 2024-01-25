import React, { useEffect, useState } from 'react';
import { QueryDocumentSnapshot,collection, where, query as firestoreQuery, getDocs, setDoc } from "firebase/firestore";
import { firestore, storage } from '@/app/js/firebase/firebase';
import { getDownloadURL, ref } from 'firebase/storage';
import PosterComponent from '../poster/PosterComponent';
import { PosterFirebaseData } from '@/app/js/setting';
import NoData from './NoData';
import Loading from '../../loading/Loading';

type TerminalSearchPageProps = {
    searchKeyword: string;
    city: string;
};

const TerminalSearchPage:React.FC<TerminalSearchPageProps> = ({searchKeyword , city}) => {

    const [docArray, setDocArray] = useState<Array<PosterFirebaseData>>();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true);
            
            try {

                const query = firestoreQuery(collection(firestore, `cities/${city}/posters`), where("neighborhood", "==", searchKeyword));
                const querySnapshot = await getDocs(query);
                
                const data = await Promise.all(querySnapshot.docs.map(async (doc) => {
                    const docData = doc.data() as PosterFirebaseData;
                    const reference = ref(storage, `/images/${city}/${docData.imageRef}`);
                    const url = await getDownloadURL(reference);
                    docData.url = url;
                    return { ...docData};
                }));

                setDocArray(data);

            } catch (error) {
                console.log(error);
            }

            setIsLoading(false);
        };
        
        fetchData();

    }, [city, searchKeyword]);


    if (isLoading || docArray == null) return <Loading />

    if (docArray.length == 0) return < NoData city={city} />;

    return <div className='flex'>

        {docArray.map((doc) => {
            
            return <div className='flex content-start'>

                <PosterComponent
                key={doc.id}
                city={city}
                created={doc.created}
                description={doc.description}
                expriation={doc.expiration}
                imageREF={doc.imageRef}
                keyword={doc.keyword}
                neighborhood={doc.neighborhood}
                owner={doc.owner}
                reccuring={doc.reccuring}
                title={doc.title}
                url={doc.url}
                />

            </div>
        })}

    </div>
}
export default TerminalSearchPage;