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

    const {listingProducts, setListingProducts} = useContext(ListingProductsContext);
    const { cart, setCart } = useContext(CartContext);

    useEffect(() => {

        if (listingProducts && !listingProducts.length) {

            apiCallProducts((products) => {

                console.log("listing products, products", products)

                setListingProducts([...products])

                sessionStorage.setItem('listingProducts', JSON.stringify(products))

            });
        }
    }, []);

    function nativeAddToCart(productId) {

        let products =  [ ...listingProducts ];
        
        if (products.length > 0) {
        const addedToCartProduct = products.find(product => {
            if (product.id === productId) {
                        product.quantity = 1;
                        return product
                }  
            });

            console.log("listing add to cart ", productId, "added product to cart", addedToCartProduct)
        
   
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
                {listingProducts.map(product => <div key={product.id}> <Product addToCart={nativeAddToCart} {...product} /> </div>)}
            </div>


        </div>
    )

}


export default ListingPage;