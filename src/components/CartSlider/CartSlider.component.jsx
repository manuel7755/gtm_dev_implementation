import React, { useEffect, useState, useContext } from "react";
import "./CartSlider.styles.scss";
import { apiGetProduct, getQueryParam, addToCart, getCartInfo, removeProduct, updateProductQuantity } from '../../utility/Utility.component';

import { CartContext } from '../../Contexts/Cart';
import { ListingProductsContext } from '../../Contexts/ListingProducts';

import CartSliderProduct from "../CartSliderProduct/CartSliderProduct.component";
import Button from "../Button/Button.component";


const CartSlider = ({ activeStatus }) => {

    const { cart, setCart } = useContext(CartContext);
    const { products, setProducts } = useContext(ListingProductsContext);

    useEffect(() => {

    }, [activeStatus])

    const removeProductNative = (productId) => {

        removeProduct(productId, cart, (updatedCart) => {

            setCart({ ...updatedCart })
        })
    }


    const updateQuantityNative = (productId, action) => {

        updateProductQuantity(productId, cart, action, (updatedCart) => {

            setCart({ ...updatedCart })

        })
    }

    return (
        <div className={`addToCartSlider_container addToCartSlider_container--${activeStatus}`} >
            <div className="addToCartSlider_content">
                {cart.cartProducts && cart.cartProducts.length > 0 ? cart.cartProducts.map(product => {
                    return (<CartSliderProduct
                        updateQuantity={updateQuantityNative}
                        removeProduct={removeProductNative}
                        {...product} />)
                }) : <h1 style={{ textAlign: "center" }}>There are no items on cart</h1>}
                <div className="cart_total_amount">
                    {cart.cartInfo && cart.cartInfo.totalPrice ? <h1 style={{ textAlign: "center" }}>Total Price: ${cart.cartInfo.totalPrice}</h1> : null}
                </div>
                <Button disabled={cart.cartProducts && cart.cartProducts.length > 0 ? false : true} link="/checkout">Checkout</Button>
            </div>
        </div>
    )
}

export default CartSlider;