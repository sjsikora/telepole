import React from 'react';
import SearchBar from './SearchBar';

type InitalSearchPageProps = {
    
};

const InitalSearchPage:React.FC<InitalSearchPageProps> = () => {


    const [searchbyEvents, setSearchbyEvents] = React.useState(true);
    
    return <div>
        <SearchBar searchableUnits={["kdf"]} />




    </div>
}
export default InitalSearchPage;