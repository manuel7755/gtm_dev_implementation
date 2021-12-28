import "./ContactForm.styles.scss";

import * as React from 'react';

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


const ContactForm = () => {

    const [age, setAge] = React.useState('');
    const [value, setValue] = React.useState('');

    const handleChange = (event, set) => {
      set(event.target.value);
    };

    const handleSubmit = (e) => {

        console.log("submit")
        e.preventDefault();


    }



    return (
        <div className="contactForm_container">
            <h1>Contact Us</h1>
            <form onSubmit={() => handleSubmit()}>
                <TextField id="filled-basic" label="name" variant="filled" />
                <TextField id="filled-basic" label="email" variant="filled" />
                <br />

                <Box sx={{ minWidth: 120 }}>

                    <FormControl fullWidth>

                        <InputLabel id="demo-simple-select-label">Subject</InputLabel>

                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            label="Age"
                            onChange={(e) => handleChange(e,setAge)}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>

                </Box>

                <TextField
                    id="filled-multiline-flexible"
                    label="Message"
                    multiline
                    maxRows={4}
                    value={value}
                    onChange={(e) => handleChange(e,setValue)}
                    variant="filled"
                />

                <div style={{ width: "35%", marginTop: "2rem" }}>
                    <FormLabel component="legend">Department</FormLabel>
                    <RadioGroup
                        aria-label="gender"
                        defaultValue="customer service"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="customer service" control={<Radio />} label="Order" />
                        <FormControlLabel value="male" control={<Radio />} label="Technical" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </div>
                <Button type="submit" variant="contained">Send</Button>
            </form>
        </div>
    )
}



export default ContactForm;