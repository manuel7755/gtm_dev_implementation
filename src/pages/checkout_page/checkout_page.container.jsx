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

    return (
        <div className="page_section checkout_page_container">
            <CheckoutStepper cart={cart} />
        </div>
    )
}

export default CheckoutPage;