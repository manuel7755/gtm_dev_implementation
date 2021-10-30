import React from 'react';
import './Product.styles.scss';
import Button from '../../components/Button/Button.component';





//const Product = ({ category, description, id, image, price, title}) => {

    const Product = ({image , title, description, price}) =>  {


       return ( <div className="product_container">
            <div className="product_content product_image">
                <img src={image} alt="product image" />

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





