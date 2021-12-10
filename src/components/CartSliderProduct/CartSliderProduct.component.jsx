import React from "react";
import "./CartSliderProduct.styles.scss"





const CartSliderProduct = ({ image, title, price, quantity, id, removeProduct}) => {


    return (
        <div className="cartSliderProduct_container">

            <div className="cartSliderProduct_image">

                <img src={image} alt="" />

            </div>

            <div className="cartSliderProduct_content">

                <div className="product_name_container">
                    <h1 className="product_name">{title}</h1>
                    
                </div>

                <div className="product_price">

                    {price} X {quantity}

                </div>

                <div onClick={() => removeProduct(id)} className="product_btn_remove">

                    <p>remove</p>

                </div>

            </div>
        </div>
    )
}


export default CartSliderProduct;