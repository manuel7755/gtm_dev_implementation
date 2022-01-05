import React from "react";
import "./CartSliderProduct.styles.scss";

import * as ReactAiIcons from 'react-icons/ai';
import * as ReactGiIcons from 'react-icons/gi';
import * as ReactBsIcons from 'react-icons/bs';

const CartSliderProduct = ({ image, title, price, quantity, id, removeProduct, updateQuantity }) => {

    return (
        <div key={id} className="cartSliderProduct_container">
            <div className="cartSliderProduct_content">
                <div className="cartSliderProduct_image">
                    <img src={image} alt="" />
                </div>
                <div className="product_name_container">
                    <h2 className="product_name">{title}</h2>
                </div>
                <div className="product_price">
                    <div onClick={() => updateQuantity(id, "decrease")} className="product_btn_quantity_decrease">
                        <ReactBsIcons.BsFillArrowDownCircleFill />
                    </div>
                    {price} X {quantity}
                    <div onClick={() => updateQuantity(id, "increase")} className="product_btn_quantity_increase">
                        <ReactBsIcons.BsFillArrowUpCircleFill />
                    </div>
                </div>
                <div onClick={() => removeProduct(id)} className="product_btn_remove">
                    <p>remove</p>
                </div>
            </div>
        </div>
    )
}


export default CartSliderProduct;