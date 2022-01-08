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
import React, { useContext } from 'react';



const CheckoutPage = () => {
    
    const { cart, setCart } = useContext(CartContext);

    const checkoutStepListener = (activeStep) => {

        const checkoutStepName =  activeStep === 0 ? "billing" : activeStep === 1 ? "payment" : activeStep === 2 ? "confirmation" : "";
        
    }   
    

    return (
        <div className="page_section checkout_page_container">
            <CheckoutStepper checkoutStepListener={checkoutStepListener} cart={cart} setCart={setCart}/>
        </div>
    )
}

export default CheckoutPage;