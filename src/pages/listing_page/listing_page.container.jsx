import React, { Component, useEffect } from 'react';
import Product from '../../components/Product/Product.component';

import './listing_page.styles.scss';

class ListingPage extends Component {


    constructor() {
        super();

        this.state = {
            page : 'listing page',
            products : []

        }


    }


componentDidMount() {

// products API
if (this.state.products && !this.state.products.length) {
fetch('https://fakestoreapi.com/products')
.then(res=>res.json())
.then(products => this.setState({products : products }))
        
    }
}

    render() {

        const { page, products } = this.state;

        return (

            <div className="page_section listing_page_container">
        
              <div className="listing_products_container">
              {products.map(product =>  <Product {...product}/>)}
              </div>
           
                
            </div>
        )
    }
}


export default ListingPage;