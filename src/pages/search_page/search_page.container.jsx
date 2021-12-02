import React, { Component, useEffect } from 'react';
import { apiCallProducts } from '../../utility/Utility.component';
import Product from '../../components/Product/Product.component';

class SearchPage extends Component {

    constructor() {
        super()

        this.state = {

            pageType: "SearchPage",
            products: []

        }
    }
  
    static getDerivedStateFromProps(props, state) {

        const sortedProducts = props.location.state.products;
    
            return { products: sortedProducts }
   
    
        return null;
      }
    



    render() {

        const { pageType, products } = this.state;


        return (

            <div className="page_section listing_page_container">

                <div className="listing_products_container">
                    {products.map(product => <Product {...product} />)}
                </div>
            </div>

        )
    }
}



export default SearchPage;