import React from 'react';
import './ProductRow.css';

const ProductRow = () => {
    return (
        <div className="Product-Row">
            <div className="rojo">
                <label className="football" >Football</label> 
                <label className="price" >$49.99</label>
            </div> 
            <div className="rojo">
                <label className="baseball">Baseball</label> 
                <label className="price" >$9.99</label>
            </div>
            <div className="rojo">
                <label className="basketball" >Basketball</label> 
                <label className="price" >$29.99</label>
            </div>
            <div className="rojo">
                <label className="ipod" >Ipod Touch</label> 
                <label className="price" >$99.99</label>
            </div>
            <div className="rojo">
                <label className="iphone" >Iphone 5</label> 
                <label className="price" >$399.99</label>
            </div>
            <div className="rojo">
                <label className="nxus" >Nexus 7</label> 
                <label className="price" >$199.99</label>
            </div>
        </div>
        
        



    );
}


export default ProductRow;