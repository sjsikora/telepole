"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { set } from 'firebase/database';

type SearchBarProps = {

    city : string;

    searchableUnits: {
        [key: string]: string;
    }
};

// searchableUnits : Array<String>;

const SearchBar: React.FC<SearchBarProps> = ({ city, searchableUnits }) => {

    const router = useRouter();
    const [searchKey, setSearchKey] = React.useState('');

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const key = event.currentTarget['key'].value;
        router.push(`/search/?city=${city}&key=${key}`)
    
    }

    return <div>

        <form onSubmit={handleFormSubmit} >

            <label htmlFor="search-keyword">
                <span className="visually-hidden">Search </span>
            </label>

            <select name="key" id="search-keyword">
                {Object.keys(searchableUnits).map((key) => {
                    return <option key={key} value={key}>{searchableUnits[key]}</option>
                })}
            </select>

            <button type='submit'>Search</button>
        </form>


    </div>
}
export default SearchBar;