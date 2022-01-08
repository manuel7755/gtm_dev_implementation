import React from 'react';
import './Product.styles.scss';
import {
    Link
} from 'react-router-dom';

import Button from '../../components/Button/Button.component';
import ReviewStars from "../ReviewStars/ReviewStars.component";


const Product = ({ id, image, title, price, addToCart, quantity, ommit, rating: { rate } }) => {
    return (

        <div className="product_container">
            <div className="product_content">
                <div className="product_image">
                    <Link to={`/product?pCode=${id}`}>
                        <img src={image} alt="product image" />
                    </Link>
                </div>
                <h2 className="product_title">{title}</h2>
                <div className="product_price">
                    {ommit !== "addToCart" ?
                        "$ " + price
                        : "$" + price + " X " + quantity}
                </div>
                <div className="product_rating">
                    <ReviewStars rate={rate} />
                </div>
            </div>
            {ommit !== "addToCart" ?
                <Button link={window.location.pathname + window.location.search} clickAction={() => addToCart(id)}> Add To Cart</Button>
                : null}
        </div>
    )
}

export default Product;





