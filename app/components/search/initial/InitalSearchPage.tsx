import React, { MouseEventHandler } from 'react';
import SearchBar from './SearchBar';
import SearchBox from './SearchBox';
import { citiesNeighborhoods, keywords } from '@/app/js/setting';

type InitalSearchPageProps = {
    
};

const InitalSearchPage: React.FC<InitalSearchPageProps> = () => {
    
    const [searchbyEvents, setSearchbyEvents] = React.useState(false);
    const [searchableUnits, setSearchableUnits] = React.useState(citiesNeighborhoods['seattle']);
    
    const neighborhoodButtonPress: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        setSearchbyEvents(false);
        setSearchableUnits(citiesNeighborhoods['seattle']);
    }

    const eventButtonPress: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.preventDefault();
        setSearchbyEvents(true);
        setSearchableUnits(keywords);
    }


    // The spacer is a hacky solution, if a better solution is found, use it.

    return <div>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        
        <div className='flex justify-evenly md:justify-center p-5'>
            <SearchBox iconName='pin_drop' name='Neighborhood' selected={!searchbyEvents} onClick={neighborhoodButtonPress} />
            <div className='hidden md:block px-[78px]'/> {/* spacer */}
            <SearchBox iconName='groups' name='Event' selected={searchbyEvents} onClick={eventButtonPress} />
        </div>

        <div className='flex justify-center p-2'>
            <SearchBar searchableUnits={searchableUnits} />
        </div>


    </div>
}
export default InitalSearchPage;