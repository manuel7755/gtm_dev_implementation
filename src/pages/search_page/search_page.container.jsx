import React, { Component, useEffect, useState, useContext } from 'react';
import { apiCallProducts } from '../../utility/Utility.component';
import Product from '../../components/Product/Product.component';
import { useHistory } from 'react-router-dom';


import { addToCart } from "../../utility/Utility.component"

import { CartContext } from '../../Contexts/Cart';
import { SearchProductsContext } from '../../Contexts/SearchProducts';





const SearchPage = function() {

    const history = useHistory()


  
    const {searchProducts, setSearchProducts} = useContext(SearchProductsContext)
    const { cart, setCart } = useContext(CartContext);

   

    useEffect(() => {
        const products = history.location.state.products;

        setSearchProducts(searchProducts)
      }, [searchProducts]);


      function nativeAddToCart(productId) {

        let products =  [ ...searchProducts ];
        
        if (products.length > 0) {
        const addedToCartProduct = products.find(product => {
            if (product.id === productId) {
                        product.quantity = 1;
                        return product
                }  
            });
        
   
           addToCart(cart,addedToCartProduct).then((updatedCart) => { 
               
               console.log('product has been added to cart', updatedCart);
   
            //    setSuccessAddToCart(true)

               setCart({...updatedCart})
   
           
           })
        }
   
           setTimeout(() => {
   
            //    setSuccessAddToCart(false)
   
           },3500)
       }


        return (

            <div className="page_section listing_page_container">

                <div className="listing_products_container">
                    {searchProducts.map(product => <Product addToCart={nativeAddToCart} {...product} />)}
                </div>
            </div>

        )
}



export default SearchPage;