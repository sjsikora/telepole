"use client";
import React from 'react';

type SearchBarProps = {
    searchableUnits: {
        [key: string]: string;
    }
};

// searchableUnits : Array<String>;

const SearchBar: React.FC<SearchBarProps> = ({ searchableUnits }) => {

    return <div>

        <form action="/search/" method="get">

            <label htmlFor="search-keyword">
                <span className="visually-hidden">Search </span>
            </label>

            <select name="search-keyword" id="search-keyword">
                {Object.keys(searchableUnits).map((key) => {
                    return <option key={key} value={key}>{searchableUnits[key]}</option>
                })}
            </select>

            <button type='submit'>Search</button>
        </form>


    </div>
}
export default SearchBar;