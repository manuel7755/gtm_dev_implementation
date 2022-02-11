import React, { useEffect } from 'react';
import "./CheckoutStepper.styles.scss";
import {
    FormControl,
    TextField,
    FormLabel,
    Button

} from '@mui/material';

import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Typography from '@mui/material/Typography';

import Product from "../Product/Product.component";
import OrderConfirmation from "../OrderConfirmation/OrderConfirmation.component";
import { generateRandomOrderNumber } from "../../utility/Utility.component";


const steps = ['Billing', 'Payment', 'Order Confirmation'];

export default function HorizontalNonLinearStepper({ cart, checkoutStepListener, setCart }) {

    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const [creditCard, setCreditCard] = React.useState(0);
    const [address, setAddress] = React.useState("");
    const [postalCode, setPostalCode] = React.useState("");
    const [creditCardExpiryDate, setCreditCardExpiryDate] = React.useState(0);
    const [creditCardCode, setCreditCardCode] = React.useState(0);
    const [coupon, setCoupon] = React.useState(0);
    const [city, setCity] = React.useState("");
    const [orderNumber, setOrderNumber] = React.useState("");
    const [orderCart, setOrderCart] = React.useState({});


    useEffect(() => {

        checkoutStepListener(activeStep)

        if (allStepsCompleted()) {

            setOrderCart({...cart})

            // clear cart
            setCart({ cartProducts: [], cartInfo: { totalItems: 0, totalPrice: 0 } })

            sessionStorage.removeItem("cart") 
        }
    },[activeStep])

    useEffect(() => {

        checkoutStepListener(activeStep)

    },[activeStep])

 
    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ?
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStep = (step) => () => {
        setActiveStep(step);
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();

        generateOrderNumber()
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };


    const handleInputChange = (e, setAction) => {

        setAction(e.target.value)
    }

    const generateOrderNumber = () => {

        setOrderNumber(generateRandomOrderNumber())
    }
    return (
        <div className="checkoutstep_container">
            <Box sx={{ width: '100%' }}>
                <Stepper nonLinear activeStep={activeStep}>
                    {steps.map((label, index) => (
                        <Step key={label} completed={completed[index]}>
                            <StepButton color="inherit" onClick={handleStep(index)}>
                                {label}
                            </StepButton>
                        </Step>
                    ))}
                </Stepper>
                <div>
                    {allStepsCompleted() && orderCart.cartProducts && orderCart.cartProducts.length > 0 ? (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                <h2> All steps are completed, thank you for your order! </h2>
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <OrderConfirmation
                                    cart={orderCart}
                                    orderId={orderNumber}
                                    address={address}
                                    creditCard={creditCard}
                                    postalCode={postalCode}
                                    city={city}
                                />
                                {/* <Button onClick={handleReset}>Reset</Button> */}
                            </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
                                {activeStep + 1 === 1 ?
                                    <FormControl style={{ width: "100%" }}>
                                        <FormLabel component="legend">Billing Address</FormLabel>
                                        <TextField fullWidth={true}
                                            value={address}
                                            onChange={(e) => handleInputChange(e, setAddress)}

                                        />
                                        <FormLabel component="legend">City</FormLabel>
                                        <TextField fullWidth={true}
                                            value={city}
                                            onChange={(e) => handleInputChange(e, setCity)}
                                        />
                                        <FormLabel component="legend">Postal Code</FormLabel>
                                        <TextField fullWidth={true}
                                            value={postalCode}
                                            onChange={(e) => handleInputChange(e, setPostalCode)}
                                        />
                                    </FormControl>
                                    :
                                    activeStep + 1 === 2 ?
                                        <FormControl style={{ width: "100%" }}>
                                            <FormLabel
                                                component="legend"
                                            >Credit Card</FormLabel>
                                            <TextField
                                                name="creditCard"
                                                value={creditCard}
                                                onChange={(e) => handleInputChange(e, setCreditCard)}
                                                fullWidth={true} />
                                            <FormLabel component="legend">Expiry</FormLabel>

                                            <TextField 
                                            fullWidth={true} 
                                            value={creditCardExpiryDate}
                                            onChange={(e) => handleInputChange(e, setCreditCardExpiryDate)}
                                            />
                                            <FormLabel component="legend">Code</FormLabel>
                                            <TextField
                                             fullWidth={true} 
                                             value={creditCardCode}
                                             onChange={(e) => handleInputChange(e, setCreditCardCode)}
                                             />

                                            <FormLabel component="legend">Coupon</FormLabel>
                                            <TextField    
                                            fullWidth={true}
                                            value={coupon}
                                            onChange={(e) => handleInputChange(e, setCoupon)} 
                                        />
                                        </FormControl>

                                        :
                                        activeStep + 1 === 3 ?

                                            <>
                                                <h1>Order Confirmation</h1>

                                                <div className="order_confirmation_container">

                                                    {cart && cart.cartProducts.length > 0 ?

                                                        cart.cartProducts.map(product => {

                                                            return (<Product key={product.id} ommit="addToCart" {...product} />)
                                                        })
                                                        : null}
                                                </div>
                                                <h2>Tax: {(cart.cartInfo.totalPrice * .13).toFixed(2)}</h2>
                                                <h2>Total Price: {cart.cartInfo.totalPrice}</h2>
                                                   
                                            </>

                                            : null}

                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Button
                                    color="inherit"
                                    disabled={activeStep === 0}
                                    onClick={handleBack}
                                    sx={{ mr: 1 }}
                                >
                                    Back
                                </Button>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleNext} sx={{ mr: 1 }}>
                                    Next
                                </Button>
                                {activeStep !== steps.length &&
                                    (completed[activeStep] ? (
                                        <Typography variant="caption" sx={{ display: 'inline-block' }}>
                                            Step {activeStep + 1} already completed
                                        </Typography>
                                    ) : (
                                        <Button onClick={handleComplete}>
                                            {completedSteps() === totalSteps() - 1
                                                ? 'Process Order'
                                                : 'Complete Step'}
                                        </Button>
                                    ))}
                            </Box>
                        </React.Fragment>
                    )}
                </div>
            </Box>
        </div>
    );
}