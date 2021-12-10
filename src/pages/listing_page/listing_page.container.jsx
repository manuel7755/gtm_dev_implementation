import React, { Component, useEffect, useState , useContext} from 'react';
import Product from '../../components/Product/Product.component';
import { apiCallProducts } from '../../utility/Utility.component';

import { apiGetProduct, getQueryParam, addToCart, getCartInfo } from '../../utility/Utility.component';
import { CartContext } from '../../Contexts/Cart';
import { ListingProductsContext } from '../../Contexts/ListingProducts';
import './listing_page.styles.scss';




// add cart method, enable context to have the set cart method
// do a find method based on product id
const ListingPage = () => {

    const {products, setProducts} = useContext(ListingProductsContext);
    const { cart, setCart } = useContext(CartContext);

    useEffect(() => {

        if (products && !products.length) {

            apiCallProducts((products) => {

                setProducts(products)

                sessionStorage.setItem('listingProducts', products)

            });
        }
    }, []);

    function nativeAddToCart(productId) {

        let listingProducts =  [ ...products ];
        
        if (listingProducts.length > 0) {
        const addedToCartProduct = listingProducts.find(product => {
            if (product.id === productId) {
                        product.quantity = 1;
                        return product
                }  
            });
        
   
           addToCart(addedToCartProduct).then((response) => { 
               
               console.log('product has been added to cart', response);
   
            //    setSuccessAddToCart(true)
   
               let cart = getCartInfo();
   
               setCart({...cart})
   
               console.log('cartInfo ' , cart.cartInfo)
   
           
           })
        }
   
           setTimeout(() => {
   
            //    setSuccessAddToCart(false)
   
           },3500)
       }


    return (

        <div className="page_section listing_page_container">

            <div className="listing_products_container">
                {products.map(product => <div key={product.id}> <Product addToCart={nativeAddToCart} {...product} /> </div>)}
            </div>


        </div>
    )

}


export default ListingPage;