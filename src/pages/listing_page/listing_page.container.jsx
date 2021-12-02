import React, { Component, useEffect, useState } from 'react';
import Product from '../../components/Product/Product.component';
import { apiCallProducts } from '../../utility/Utility.component';

import { apiGetProduct, getQueryParam, addToCart, getCartInfo } from '../../utility/Utility.component';

import './listing_page.styles.scss';

const ListingPage = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        if (products && !products.length) {

            apiCallProducts((products) => {

                setProducts(products)

                sessionStorage.setItem('listingProducts', products)

            });
        }
    }, []);

    function nativeAddToCart() {        
  
   
        
   
   
        //    setTimeout(() => {
   
        //        setSuccessAddToCart(false)
   
        //    },3500)
       }
   


    return (

        <div className="page_section listing_page_container">

            <div className="listing_products_container">
                {products.map(product => <div key={product.id}> <Product {...product} /> </div>)}
            </div>


        </div>
    )

}


export default ListingPage;