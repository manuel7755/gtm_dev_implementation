
import React, { useState, useEffect } from 'react';


//global variables

let cart = typeof sessionStorage.cart != 'undefined' ? JSON.parse(sessionStorage.getItem("cart")) : {cartProducts: [] , cartInfo: { totalItems: 0 , totalPrice: 0}};


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

export const apiUserLogin = (call) => {

    console.log("user login being called")

    fetch('https://fakestoreapi.com/auth/login',{
        method:'POST',
        body:JSON.stringify({
            username:'johnd',
            password:'m38rmF$'
        }),
  
        headers: {
            'content-type' : "application/json" ,
            "accept":'application/json'
          },

    }).then(res=>res.json())
    .then(json=>console.log(json))
}

export const getQueryParam = (paramName) => {
    const params = new URLSearchParams(window.location.search);
    const paramValue = params.get(paramName);

    if (!!paramValue) {

        return paramValue;

    }
}


export const addToCart = (cart,product) => {


    return new Promise((resolve, reject) => {

        setTimeout(() => {

            try {
                console.log('add to cart hit ', product)
                // get current cart products if there are any


                console.log("add to cart ", cart)

                    let isProductInCart = null;

                    if (cart && cart.cartProducts && cart.cartProducts.length > 0) {


                        isProductInCart = cart.cartProducts.find(cartProduct => {

                            if (cartProduct.id === product.id) {

                                cartProduct.quantity = +cartProduct.quantity + +product.quantity;

                                return cartProduct

                            } else {
                                return false
                            }
                        })

                    }



                    if (!isProductInCart) {

                        console.log("test ",cart)
                      
                        cart.cartProducts.push(product)

                    }

                    let cartQuantity = calculateCart(cart, "total quantity");
                    let cartTotalPrice = calculateCart(cart, "total price");


                    console.log('cartQuantity', cartQuantity)

                    console.log("cart total price", cartTotalPrice)

                    updateCart({ cartProducts: cart.cartProducts, cartInfo: { totalItems: cartQuantity, totalPrice: cartTotalPrice } })

                    // send back total cart quantity

                    resolve({ cartProducts: cart.cartProducts, cartInfo: { totalItems: cartQuantity, totalPrice: cartTotalPrice } })

                } catch (error) {
                    console.log('Add to cart error ' + error)
                    reject(error)
                }

            }, 1000)
    })
}

export const getCartInfo = () => {


    let cartQuantity = calculateCart(cart, "total quantity");
    let cartTotalPrice = calculateCart(cart, "total price");

    if (cart && cart.cartProducts && cart.cartProducts.length > 0) {

      //  const cartInfo = { cartProducts: cart.cartProducts, cartInfo: { totalItems: cartQuantity, totalPrice: cartTotalPrice } }

        return JSON.parse(sessionStorage.cart)
    } else {

        return cart
    }
}

export const updateCart = (cart) => {

    sessionStorage.setItem("cart", JSON.stringify(cart))


}

export const calculateCart = (cart, info) => {

    console.log("calculating cart ", cart)

    if (cart && cart.cartProducts && cart.cartProducts.length > 0) {

        console.log("through")

        if (info === "total quantity") {

            const cartQuantity = cart.cartProducts.reduce((acc, product) => {

                return acc + +product.quantity

            }, 0)


            return cartQuantity


        }

        if (info === "total price") {

            const cartTotalPrice = cart.cartProducts.reduce((acc, product) => {

                return acc + +product.quantity * +product.price

            }, 0)


            console.log("calculating total price ", cartTotalPrice)

            return cartTotalPrice
        }
    }
}


export const removeProduct = (id, cart, call) => {


    console.log("remove cart ", cart, id)

    // fix format 

    let filteredCart = cart.cartProducts.filter(product => product.id !== id);

    console.log("filtered cart " , filteredCart)
    let cartQuantity = calculateCart({cartProducts: filteredCart}, "total quantity");
    let cartTotalPrice = calculateCart({cartProducts:filteredCart}, "total price");

    console.log("cart quantity ", cartQuantity, "cart total price ", cartTotalPrice)

     cart = { cartProducts: filteredCart, cartInfo: { totalItems: cartQuantity, totalPrice: cartTotalPrice } }



    updateCart(cart)

    call(cart)

}

export const updateProductQuantity = (id, cart, action, call) => {



    let filteredCart =  cart.cartProducts.reduce((result, product) => {

        console.log(product)

        if (product.id === id && product.quantity && action === "increase") {


            result.push({

                ...product,
                quantity: +product.quantity + 1,
            })



        } else if (product.id === id && product.quantity === 1 && action === "decrease") {


        } else if (product.id === id && product.quantity >= 1 && action === "decrease") {


            result.push({

                ...product,
                quantity: +product.quantity - 1,
            })


        } else result.push(product)

        return result
    }, [])

    console.log("filtered cart", filteredCart)
    let cartQuantity = calculateCart({cartProducts: filteredCart}, "total quantity");
    let cartTotalPrice = calculateCart({cartProducts: filteredCart}, "total price");


    cart = { cartProducts: filteredCart, cartInfo: { totalItems: cartQuantity, totalPrice: cartTotalPrice } }

    updateCart(cart)

    call(cart)

}
