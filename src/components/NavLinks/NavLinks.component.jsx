import React from 'react';
import './NavLinks.styles.scss';

import {
  Link
} from 'react-router-dom';


const NavLink = (props) => (

  <li className='navLink'>
    <Link className='navLink_link' to={props.link}>{props.children}</Link>
  </li>

)

export default NavLink;