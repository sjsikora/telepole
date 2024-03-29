import React, { MouseEventHandler } from 'react';

type SearchBoxProps = {
    iconName: string;
    name: string;
    selected: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
};

const SearchBox:React.FC<SearchBoxProps> = ({iconName, name, selected, onClick}) => {

    // selected #094d12
    // unslected #35AA44
    
    return <button onClick={onClick} className='max-w-1/3'>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        <span className={"material-symbols-outlined p-5 rounded-full fill-white " + (selected ? "bg-[#39ba4b]" : "")} style={{fontSize: '3rem'}}>{iconName}</span>

        <div>
            Search by {name}
        </div>
        
    </button>
}
export default SearchBox;