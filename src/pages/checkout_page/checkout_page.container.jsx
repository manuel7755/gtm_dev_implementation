import "./checkout_page.styles.scss";
import { CartContext } from '../../Contexts/Cart';
import CheckoutStepper from "../../components/CheckoutStepper/CheckoutStepper.component"

import React, { Component, useEffect, useState , useContext} from 'react';

import {
    Select,
    MenuItem,
    FormControl,
    TextField,
    RadioGroup,
    FormLabel,
    Radio,
    FormControlLabel,
    InputLabel,
    Box,
    Button

} from '@mui/material';





const CheckoutPage = () => {

    const [age, setAge] = React.useState('');
    const [value, setValue] = React.useState('');

    const { cart, setCart } = useContext(CartContext);

    const handleChange = (event, set) => {
      set(event.target.value);
    };

    const handleSubmit = (e) => {

        console.log("submit")
        e.preventDefault();


    }


    useEffect(() => { 


        console.log("cart ", cart)

    })



    return (
        <div className="page_section checkout_page_container">
            <CheckoutStepper cart={cart} />
        </div>
    )
}

export default CheckoutPage;