import React from 'react';

type SearchBoxProps = {
    iconName: string;
    name: string;
};

const SearchBox:React.FC<SearchBoxProps> = ({iconName, name}) => {
    
    return <div className='w-full h-auto'>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <span className="material-symbols-outlined bg-spgreen p-5 text-lg">{iconName}</span>
        
    </div>
}
export default SearchBox;