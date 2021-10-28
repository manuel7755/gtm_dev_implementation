import React, { Component } from 'react';


class SearchPage extends Component {

    constructor(){
        super()

        this.state = {

            pageType : "SearchPage"

        }
    }


    render(){

        const {pageType} = this.state;


        return (

            <h1>{pageType}</h1>

        )
    }
}



export default SearchPage;