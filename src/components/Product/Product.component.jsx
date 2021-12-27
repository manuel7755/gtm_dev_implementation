import React from 'react';
import './Product.styles.scss';
import Button from '../../components/Button/Button.component';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter, 
    Link
  } from 'react-router-dom';



//const Product = ({ category, description, id, image, price, title}) => {

const Product = ({ id, image, title, description, price, addToCart }) => {


    return (

        <div className="product_container">
            <div className="product_content product_image">
                <Link to={`/product?pCode=${id}`}>
                <img src={image} alt="product image" />
                </Link>

            </div>
            <div className="product_content">
                <h1 className="product_title">{title}</h1>
           

            </div>

            <div className="product_content product_price">

                ${price}

            </div>

            <Button link={window.location.pathname + window.location.search} clickAction={() => addToCart(id)}> Add To Cart</Button>
        </div>
        )

}

export default Product;





