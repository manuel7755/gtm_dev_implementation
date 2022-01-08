import React from 'react';
import './Button.styles.scss';

import {
    Link
} from 'react-router-dom';


const Button = (props) => (

    <Link to={props.link} className="button_container">
        <button disabled={props.disabled} onClick={props.clickAction} className="cta_button">
            {props.children}
        </button>
    </Link>
)

export default Button;