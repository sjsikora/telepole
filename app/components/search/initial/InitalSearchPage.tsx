import React, { MouseEventHandler } from 'react';
import SearchBar from './SearchBar';
import SearchBox from './SearchBox';

type InitalSearchPageProps = {
    
};

const InitalSearchPage:React.FC<InitalSearchPageProps> = () => {


    const [searchbyEvents, setSearchbyEvents] = React.useState(true);

    const neighborhoodButtonPress:MouseEventHandler<HTMLButtonElement> = (event) => {
        setSearchbyEvents(false);
    }

    const eventButtonPress:MouseEventHandler<HTMLButtonElement> = (event) => {
        setSearchbyEvents(true);
    }
    
    return <div>
        
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        <SearchBar searchableUnits={["kdf"]} />

        <div>
            <SearchBox iconName='pin_drop' name='Neighborhood' selected = {!searchbyEvents} onClick={neighborhoodButtonPress} />
            <SearchBox iconName='groups' name='Event' selected = {searchbyEvents} onClick={eventButtonPress} />
        </div>




    </div>
}
export default InitalSearchPage;