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

    const styleSelected = {
        fontSize: '3rem',
        color: "black",
    }

    const styleUnselected = {
        fontSize: '3rem',
        color: "gray",
    }
    
    return <button onClick={onClick} className='max-w-1/3'>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        <span className={"material-symbols-outlined p-5 drop-shadow-2xl rounded-2xl fill-white " + (selected ? "bg-[#39ba4b]" : "border-2 border-stone-100")} style={(selected ? styleSelected : styleUnselected)}>{iconName}</span>

        <div className={selected ? "" : "text-gray-10i"}>
            Search by {name}
        </div>
        
    </button>
}
export default SearchBox;