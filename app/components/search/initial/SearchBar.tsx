"use client";
import React from 'react';

type SearchBarProps = {
   searchableUnits: Array<string>;
};

// searchableUnits : Array<String>;

const SearchBar:React.FC<SearchBarProps> = ({searchableUnits}) => {
    
    return <div>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />


        <form action="/search" method="get">
            <label htmlFor="header-search">
                <span className="material-symbols-outlined">{"search"}</span>

            </label>
            <input
                type="text"
                id="header-search"
                placeholder="Search"
                name="s" 
            />
            <button type="submit">Search</button>
        </form>

    </div>
}
export default SearchBar;