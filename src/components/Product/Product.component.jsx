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

const Product = ({ id, image, title, description, price, addToCart, quantity, ommit }) => {


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

            </div>

            {ommit !== "addToCart" ?

                <Button link={window.location.pathname + window.location.search} clickAction={() => addToCart(id)}> Add To Cart</Button>

                : null}

        </div>
    )

}

export default Product;





