import React, { useContext, useEffect } from 'react';
import "./checkout_page.styles.scss";
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

import { CartContext } from '../../Contexts/Cart';
import CheckoutStepper from "../../components/CheckoutStepper/CheckoutStepper.component"

import TagManager from "react-gtm-module";


const CheckoutPage = () => {
    
    const { cart, setCart } = useContext(CartContext);


    const checkoutStepListener = (activeStep) => {

    const checkoutStepName =  activeStep === 0 ? "billing" : activeStep === 1 ? "payment" : activeStep === 2 ? "confirmation" : "";
    

        TagManager.dataLayer({
            dataLayer: {
                event: "pageview",
                page: {
                    path:"/checkout_" + checkoutStepName,
                    pageType: "checkout"
                },  
            }
        })

    }

    return (
        <div className="page_section checkout_page_container">
            <CheckoutStepper checkoutStepListener={checkoutStepListener} cart={cart} />
        </div>
    )
}

export default CheckoutPage;