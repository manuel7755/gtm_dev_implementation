import React, { Component } from 'react';
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
    componentDidMount() {

        const searchTerm = window.location.search.split('=')[1].toLowerCase();

        console.log(searchTerm)

        apiCallProducts((products) => {


            this.search(searchTerm, products)

        });
    }

    search(searchTerm, products) {

        console.log(products)
        if (products.length) {

            const sortedProducts = products.filter(product => {

                const productTitle = product.title.toLowerCase();

                if (productTitle.indexOf(searchTerm) > -1) {

                    return product
                }
            })

            console.log(sortedProducts)


            this.setState({ products: sortedProducts })

        }
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