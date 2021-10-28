import React, { Component } from 'react';





class Cartpage extends Component {

    constructor(){
        super()

        this.state = {

            pageType : "cart"

        }
    }


    render(){

        const {pageType} = this.state;


        return (

            <h1>{pageType}</h1>

        )
    }
}



export default Cartpage;