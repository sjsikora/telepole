import React from 'react';
import SearchBar from './SearchBar';
import SearchBox from './SearchBox';

type InitalSearchPageProps = {
    
};

const InitalSearchPage:React.FC<InitalSearchPageProps> = () => {


    const [searchbyEvents, setSearchbyEvents] = React.useState(true);
    
    return <div>
        
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        <SearchBar searchableUnits={["kdf"]} />
        <SearchBox iconName='pin_drop' name='Search' />




    </div>
}
export default InitalSearchPage;