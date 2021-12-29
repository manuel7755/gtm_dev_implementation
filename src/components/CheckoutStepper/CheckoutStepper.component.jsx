import * as React from 'react';

import "./CheckoutStepper.styles.scss";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Typography from '@mui/material/Typography';

import Product from "../Product/Product.component";


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
    Button

} from '@mui/material';


import ContactForm from "../../components/ContactForm/ContactForm.component"
const steps = ['Billing', 'Payment', 'Order Confirmation'];

export default function HorizontalNonLinearStepper({ cart }) {
    const [activeStep, setActiveStep] = React.useState(0);
    const [completed, setCompleted] = React.useState({});
    const [creditCard, setCreditCard] = React.useState(0);
    const [address, setAddress] = React.useState("");
    const [postalCode, setPostalCode] = React.useState("");
    const [creditCardExpiryDate, setCreditCardExpiryDate] = React.useState(0);
    const [creditCardCode, setCreditCardCode] = React.useState(0);
    const [coupon, setCoupon] = React.useState(0);
    const [city, setCity] = React.useState("");


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
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
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
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };


    const handleInputChange = (e, setAction) => {

        console.log("value", e.target.value)

        setAction(e.target.value)
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
                    {allStepsCompleted() ? (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                <Box sx={{ flex: '1 1 auto' }} />
                                <Button onClick={handleReset}>Reset</Button>
                            </Box>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>

                            {/* <div style={{ width: "100%", height: "auto", minHeight: "20rem" }}> */}

                                {activeStep + 1 === 1 ?

                                    <FormControl style={{ width: "100%" }}>

                                        <inputLabel component="legend1">Billing Address</inputLabel>
                                        <TextField fullWidth={true}

                                            value={address}
                                            onChange={(e) => handleInputChange(e, setAddress)}

                                        />
                                        <inputLabel component="legend">City</inputLabel>

                                        <TextField fullWidth={true}
                                            value={city}
                                            onChange={(e) => handleInputChange(e, setCity)}

                                        />
                                        <inputLabel component="legend">Postal Code</inputLabel>
                                        <TextField fullWidth={true}

                                            value={postalCode}
                                            onChange={(e) => handleInputChange(e, setPostalCode)}



                                        />




                                    </FormControl>

                                    :


                                    activeStep + 1 === 2 ?

                                        <FormControl style={{ width: "100%" }}>

                                            <inputLabel
                                                component="legend"


                                            >Credit Card</inputLabel>
                                            <TextField
                                                name="creditCard"
                                                value={creditCard}
                                                onChange={(e) => handleInputChange(e, setCreditCard)}

                                                fullWidth={true} />


                                            <inputLabel component="legend">Expiry</inputLabel>

                                            <TextField 
                                            fullWidth={true} 
                                            value={creditCardExpiryDate}
                                            onChange={(e) => handleInputChange(e, setCreditCardExpiryDate)}
                                        
                                            
                                            />
                                            <inputLabel component="legend">Code</inputLabel>
                                            <TextField
                                             fullWidth={true} 
                                             value={creditCardCode}
                                             onChange={(e) => handleInputChange(e, setCreditCardCode)}
                                             
        
                                             />

                                            <inputLabel component="legend">Coupon</inputLabel>
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

                                                            return (<Product ommit="addToCart" {...product} />)
                                                        })


                                                        : null}

                                                    

                                                </div>
                                                <h2>Total Price: {cart.cartInfo.totalPrice}</h2>
                                                    <h2>Tax: {(cart.cartInfo.totalPrice * .13).toFixed(2)}</h2>
                                            </>

                                            : null}

                            {/* </div> */}





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
                                                ? 'Finish'
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