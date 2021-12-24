import React, { useState, useContext, useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { CartContext } from '../../Contexts/Cart';


import './Navbar.styles.scss';

import NavLink from '../NavLinks/NavLinks.component';
import HomeLogo from '../Logo/Logo.component';
import * as ReactAiIcons from 'react-icons/ai';
import * as ReactGiIcons from 'react-icons/gi';
import * as ReactBsIcons from 'react-icons/bs';


import { BrowserView, MobileView } from 'react-device-detect'; // uninstall
import { apiCallProducts, apiUserLogin } from '../../utility/Utility.component';
import { useCheckMobileScreen } from '../../utility/Utility.component';

import CartSlider from "../CartSlider/CartSlider.component";

import { TransitionsModal }  from '../../components/Modal/Modal.component';




const Navbar = (props) => {
    // const [inputValue, setInputValue] = useState(0);
    // const [pressedEnter,setPressedEnter] = useState(false)

    const isMobile = useCheckMobileScreen();
    const [navigationMenuToggle, setNavigationMenuToggle] = useState(false);
    const { cart, setCart } = useContext(CartContext);

    const [cartSlider, setCartSlider ] = useState(false);
    
    
    useEffect(() => {

    }, [useCheckMobileScreen]);

    const inputListener = (e) => {

        if (e.key === 'Enter') {

            const searchTerm = e.target.value;


            apiCallProducts((products) => {


                const sortedProducts = products.filter(product => {

                    const productTitle = product.title.toLowerCase();

                    if (productTitle.indexOf(searchTerm) > -1) {

                        return product
                    }
                })

                props.history.push({
                    pathname: '/search_results',
                    search: `?q=${searchTerm}`,
                    state: { products: sortedProducts }

                })
            });
        }
        
    }


    const userLogin = () => {

        apiUserLogin((response) => {

            console.log("login", response);

        })
        
    }


    const activateCartSlider = () => {

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


                <div style={{ position: "fixed", top: "8rem", width: "100%", height: "auto", background: "black", padding: "1rem" }}>
                    <ul>
                        <NavLink link='/contact'>Contact Us</NavLink>
                        <NavLink link='/catalogue'>Catalogue</NavLink>
                        <NavLink link='/'>Login</NavLink>
                    </ul>
                </div>

                : null}
            <div className='navbar_links_container'>
                <ul>

                    {!isMobile ?

                        <>

                            <NavLink link='/contact'>Contact Us</NavLink>
                            <NavLink link='/catalogue'>Catalogue</NavLink>
                            {/* <button onClick={() => TransitionsModal()} className="login_btn">Login</button> */}
                            <button  className="login_btn">
                            <TransitionsModal login={userLogin} name="Login"/>

                            </button>


                        </>

                        : <ReactGiIcons.GiHamburgerMenu onClick={() => setNavigationMenuToggle(!navigationMenuToggle)} />

                    }
                </ul>
            </div>
            {/* <NavLink link='/cart'> */}
                <ReactBsIcons.BsFillCartPlusFill onClick={() => setCartSlider(!cartSlider)} />
                <div className="cart_quantity">
                    <h5>{cart.cartInfo && cart.cartInfo.totalItems || 0}</h5>
                </div>
                <CartSlider activeStatus={cartSlider}/>
        </div>

    )
}

export default withRouter(Navbar);

