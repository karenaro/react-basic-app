import React from 'react';
import './ProductTable.css';
import ProductCategoryRow from '../Product-Category-Row/ProductCategoryRow';
import ProductRow from '../Product-Row/ProductRow';


const ProductTable = () => {
    return (
        <div className="Product-Table">
            <label className="name" >Name</label>
            <label className="price" >Price</label>   
            <div>
                <ProductCategoryRow/>
            </div>    
            
            <div>
                <ProductRow/>
            </div> 
        </div>
        
        



    );
}


export default ProductTable;