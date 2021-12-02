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

const Product = ({ id, image, title, description, price }) => {


    return (

        <div className="product_container">
            <div className="product_content product_image">
                <Link to={`/product?pCode=${id}`}>
                <img src={image} alt="product image" />
                </Link>

            </div>
            <div className="product_content product_description">
                <h1 className="product_title">{title}</h1>
                <p className="product_description">
                    {description}
                </p>

            </div>

            <div className="product_content product_price">

                ${price}

            </div>

            <Button> Add To Cart</Button>
        </div>)

}

export default Product;





