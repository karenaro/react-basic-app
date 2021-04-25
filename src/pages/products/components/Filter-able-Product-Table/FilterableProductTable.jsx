import React from 'react';
import './FilterableProductTable.css';
import SearchBar from '../search-bar/SearchBar';
import ProductTable from '../Product-Table/ProductTable';


const FilterableProductTable = () => {
    return (
        <div className="filterable-product-table-container">
            <SearchBar/>
            <ProductTable/>
        </div>

    );
}


export default FilterableProductTable;