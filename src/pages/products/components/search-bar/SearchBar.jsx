import React from 'react';
import './SearchBar.css';


const SearchBar = () => {
    return (
        <div className="Search-Bar">
            <input type="txt" placeholder="Search..." className="Search"/><br></br>
            <input type="checkbox" className="checkbox"/> Only show products in stock
        </div>

    );
}


export default SearchBar;