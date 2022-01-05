import React, { useEffect, useState, useContext } from 'react';
import { addToCart } from "../../utility/Utility.component"

import { CartContext } from '../../Contexts/Cart';
import { SearchProductsContext } from '../../Contexts/SearchProducts';
import { LoadingSpinnerContext } from '../../Contexts/LoadingSpinner';

import Spinner from "../../components/Spinner/Spinner.component";
import Product from '../../components/Product/Product.component';


const SearchPage = function () {

    const { searchProducts, setSearchProducts } = useContext(SearchProductsContext)
    const { cart, setCart } = useContext(CartContext);
    const { LoadingSpinner, setLoadingSpinner } = useContext(LoadingSpinnerContext);

    useEffect(() => {

        setSearchProducts(searchProducts)
    }, [searchProducts]);


    function nativeAddToCart(productId) {

        let products = [...searchProducts];

        if (products.length > 0) {
            const addedToCartProduct = products.find(product => {
                if (product.id === productId) {
                    product.quantity = 1;
                    return product
                }
            });


            addToCart(cart, addedToCartProduct).then((updatedCart) => {

                setCart({ ...updatedCart })
            })
        }
    }


    return (

        <div className="page_section listing_page_container">

            <div className="listing_products_container">
                {searchProducts.length > 0 || LoadingSpinner ?

                    searchProducts.map(product => <Product addToCart={nativeAddToCart} {...product} />)

                    : <Spinner />}
            </div>
        </div>

    )
}

export default SearchPage;