import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Link
} from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import { CartContext } from './Contexts/Cart';

import Homepage from './pages/home_page/home_page.container';
import Cartpage from './pages/cart_page/cart_page.container';
import Searchpage from './pages/search_page/search_page.container';
import Listingpage from './pages/listing_page/listing_page.container';
import Productpage from './pages/product_page/product_page.container';



import NavBar from './components/NavBar/Navbar.component';

import { apiGetProduct, getQueryParam, addToCart, getCartInfo } from './utility/Utility.component';


// TODO

//2 cart page
// add to cart slider 
// when someone clicks the cart icon the same slider appears with all the products

import './App.scss';

function App() {

  const [cart, setCart] = useState({});

  // app initialization function
 

  useEffect(() => {

    let cartInfo = getCartInfo();

    setCart(cartInfo)

}, []);


  return (
    <div className="App">
      <CartContext.Provider value={{ cart, setCart }}>
        <NavBar />
        <Switch>
          <Route path="/cart" component={Cartpage} />
          <Route path="/search_results" component={Searchpage} />
          <Route path="/catalogue" component={Listingpage} />
          <Route path="/product" component={Productpage} />
          <Route exact path="/" component={Homepage} />
        </Switch>
      </CartContext.Provider>

    </div>
  );
}

export default withRouter(App);
