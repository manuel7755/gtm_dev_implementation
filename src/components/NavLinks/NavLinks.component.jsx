import React from 'react';
import './NavLinks.styles.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';


const NavLink = (props) => (

  <li className='navLink'>
    <Link className='navLink_link' to={props.link}>{props.children}</Link>
  </li>

)

export default NavLink;