import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import './Navbar.styles.scss';

import NavLink from '../NavLinks/NavLinks.component';
import HomeLogo from '../Logo/Logo.component';
import * as ReactAiIcons from 'react-icons/ai';
import * as ReactGiIcons from 'react-icons/gi';

import { BrowserView, MobileView } from 'react-device-detect'; // uninstall

import { useCheckMobileScreen } from '../../utility/Utility.component';



const Navbar = (props) => {
    // const [inputValue, setInputValue] = useState(0);
    // const [pressedEnter,setPressedEnter] = useState(false)

    const [navigationMenuToggle, setNavigationMenuToggle] = useState(false);
    const isMobile = useCheckMobileScreen();

    useEffect(() => {

    }, [useCheckMobileScreen]);

    const inputListener = (e) => {

        if (e.key === 'Enter') {
            props.history.push(`/search_results?q=${e.target.value}`)
        }
    }

    return (
        <div className='navbar'>
            <div className='navbar_logo_container'>
                <a href='/'>
                    <ReactAiIcons.AiTwotoneHome />
                </a>
            </div>
            <div className='navbar_search_bar_container'>
                <input
                    type='text'
                    className='search_input'
                    placeholder='search'
                    onKeyDown={inputListener}
                />
            </div>
            {navigationMenuToggle ?

                <div style={{ position: "absolute", top: "8rem", width: "100vw", height: "auto", background: "grey", padding: "1rem" }}>
                    <ul>
                        <NavLink link='/cart'>Cart</NavLink>
                        <NavLink link='/contact'>Contact Us</NavLink>
                        <NavLink link='/catalogue'>Catalogue</NavLink>
                    </ul>
                </div> 
                
                : null}
            <div className='navbar_links_container'>

                {isMobile ?
                    <ul>

                        <NavLink link='/cart'>Cart</NavLink>
                        <NavLink link='/contact'>Contact Us</NavLink>
                        <NavLink link='/catalogue'>Catalogue</NavLink>
                    </ul>
                    : <ReactGiIcons.GiHamburgerMenu
                        onClick={() => setNavigationMenuToggle(!navigationMenuToggle)}/>

                }

            </div>
        </div>

    )
}

export default withRouter(Navbar);

