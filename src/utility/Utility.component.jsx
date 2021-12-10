
import React, { useState, useEffect } from 'react';


export const useCheckMobileScreen = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (width <= 1200);
}


export const apiCallProducts = (call) => {

    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(products => call(products))

}

export const apiGetProduct = (pCode, call) => {


    fetch(`https://fakestoreapi.com/products/${pCode}`)
        .then(res => res.json())
        .then(product => call(product))

}

export const getQueryParam = (paramName) => {
    const params = new URLSearchParams(window.location.search);
    const paramValue = params.get(paramName);

    if (!!paramValue) {

        return paramValue;

    }
}


export const addToCart = (product) => {


    return new Promise((resolve, reject) => {

        setTimeout(() => {

            try {
                console.log('add to cart hit ', product)
                // get current cart products if there are any
                let cart = typeof sessionStorage.cart != 'undefined' ? JSON.parse(sessionStorage.cart) : [];

                console.log("add to cart ", cart)
                const isProductInCart = cart.find(cartProduct => {

                    if (cartProduct.id === product.id) {

                        cartProduct.quantity = +cartProduct.quantity + +product.quantity;

                        return cartProduct

                    } else {
                        return false
                    }
                })


                console.log('returned', isProductInCart)

                if (typeof isProductInCart === 'undefined') {

                    cart.push(product)

                }

                const cartQuantity = cart.reduce((acc, product) => {

                    return acc + +product.quantity

                }, 0)

                sessionStorage.setItem('cart', JSON.stringify(cart))

                console.log('cartQuantity', cartQuantity)

                // send back total cart quantity

                resolve({ cartQuantity })

            } catch (error) {
                console.log('Add to cart error ' + error)
                reject(error)
            }

        }, 1000)

    })

}

export const getCartInfo = () => {


    let cartProducts = typeof sessionStorage.cart != 'undefined' ? JSON.parse(sessionStorage.cart) : [];

  

    if (cartProducts.length > 0) {

        const cartQuantity = cartProducts.reduce((acc, product) => {

            return acc + +product.quantity
    
        }, 0)
    

        const cartInfo = {cartProducts, cartInfo : { totalItems : cartQuantity}  }

            return cartInfo;
    } else {
        
            return {cartProducts , cartInfo: {totalItems : 0 }};
    }
}

export const updateCart = (cart) => {

    sessionStorage.setItem("cart", JSON.stringify(cart))


}


export const removeProduct = (id,cart,call) => {


    console.log("remove cart ", cart, id)

    // fix format 

    let cartProducts = cart.cartProducts

    console.log("cart product ", cartProducts)
    const filteredCart = cartProducts.filter(product => product.id !== id);

    cartProducts = [{cartProducts: filteredCart}]

    console.log("cart products filtered " , cartProducts)
    updateCart(cartProducts[0].cartProducts)
  
    call(cartProducts)

}
