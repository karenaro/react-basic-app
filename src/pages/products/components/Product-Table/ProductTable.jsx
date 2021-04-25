import React from 'react';
import './ProductTable.css';
import { Sporting } from '../Product-Category-Row/ProductCategoryRow';
import { Electronics } from '../Product-Category-Row/ProductCategoryRow';
import { Sport } from '../Product-Row/ProductRow';
import { Phone } from '../Product-Row/ProductRow';


const ProductTable = () => {
    return (
        <div className="Product-Table">
        <br></br>
            <label className="name" >Name       </label>
            <label className="priceT">  Price</label>   
            <div>
        <br></br>
               
            </div>    
            <Sporting/>
            <Sport/>
            <div>
                <Electronics/>
                <Phone/>
            </div> 
        </div>
        
    );
}


export default ProductTable;