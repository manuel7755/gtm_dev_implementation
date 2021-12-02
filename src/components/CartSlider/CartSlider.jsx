import React, {useEffect, useState, useContext} from "react";

import "./CartSlider.scss";
import { CartContext } from '../../Contexts/Cart';



const CartSlider = () => {

    const { cart, setCart } = useContext(CartContext);

    useEffect(() => {





    },[])


    return (
        <div className="addToCartSlider_container">
            <div className="addToCartSlider_content">

                <h1 className="slider">
                    slider
                </h1>

            </div>
        </div>
    )
}


export default CartSlider;