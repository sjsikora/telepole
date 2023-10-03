import React, { useEffect, useState } from 'react';
import { collection, query as firestoreQuery, where, getDocs } from "firebase/firestore";
import { firestore } from '@/app/js/firebase/firebase';

type TerminalSearchPageProps = {
    searchKeyword: string;
    city: string;
};

const TerminalSearchPage:React.FC<TerminalSearchPageProps> = ({searchKeyword , city}) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {

        const fetchData = async () => {
            setIsLoading(true);
            try {
                const query = firestoreQuery(collection(firestore, `cities/${city}/neighborhood/${searchKeyword}/posters`));
                const querySnapshot = await getDocs(query);
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());
                });

            } catch (error) {
                console.error(error);
            }
            setIsLoading(false);
        };

        fetchData();

    }, [searchKeyword]);


    return <div>
        hello there
    </div>
}
export default TerminalSearchPage;