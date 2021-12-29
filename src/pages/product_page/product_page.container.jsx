import React, { Component, useState, useContext, useEffect } from 'react';
import './product_page.styles.scss';

import { apiGetProduct, getQueryParam, addToCart, getCartInfo } from '../../utility/Utility.component';
import { Alert } from '@material-ui/lab';
import { CartContext } from '../../Contexts/Cart';


import Button from '../../components/Button/Button.component';

const ProductPage = () => {


    const [product , setProduct] = useState({})
    const [successAddToCart, setSuccessAddToCart] = useState(false);
    const { cart, setCart } = useContext(CartContext);



    useEffect(() =>  {
        const pCode = getQueryParam('pCode');

        apiGetProduct(pCode, (product) => {

            console.log(product)

            setProduct({ ...product, quantity : 1 })

        })

        //get product quantity
    },[])

    function updateProductQuantity (e) {

        let updatedProduct = { ...product, quantity :  +e.target.value };

        console.log('updated quantity', updatedProduct)


        setProduct(updatedProduct)
    }


    function nativeAddToCart() {

     let updatedProduct =  { ...product };

     console.log('product at addToCart ' , updatedProduct)
     

        addToCart(cart, updatedProduct).then((updatedCart) => { 
            
            console.log('product has been added to cart', updatedCart);

            setSuccessAddToCart(true)


            setCart({...updatedCart})

            console.log('cartInfo ' , updatedCart.cartInfo)

        
        })
        setTimeout(() => {

            setSuccessAddToCart(false)

        },3500)
    }


        return (

            <div className='page_section productPage_container'>
                <div className='productPage_container_product_container'>
                    <div className='product_image_container'>
                        <img src={product.image} alt='' className='product_image' />

                    </div>

                    <div className='product_information'>
                        <div className='product_name'>

                            <h1> {product.title} </h1>

                        </div>
                        <div className='product_reviews'>

                        </div>
                        <div className="product_description">
                            <p> {product.description}</p>

                        </div>

                        <div className='product_quantity'>
                            <div className="quantity_label">
                                <h2>QTY</h2>


                            </div>
                            <div className="quantity_container">
                                <input onChange={(e) => updateProductQuantity(e)} type='number' defaultValue='1' name='quantity' min='1' />
                            </div>


                        </div>

                        <div className='addTocartButton'>

                            <Button link={window.location.pathname + window.location.search} clickAction={() => nativeAddToCart()}>Add To Cart</Button>

                        </div>
                        <br/>

                        {successAddToCart ? 

                        <Alert variant="filled" severity="success">
                            Success You Have Added To Cart!
                        </Alert>

                        : null}
                    </div>
                </div>
            </div>
        )
}

export default ProductPage;