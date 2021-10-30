import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter, 
  Link
} from 'react-router-dom';

import Homepage from './pages/home_page/home_page.container';
import Cartpage from './pages/cart_page/cart_page.container';
import Searchpage from './pages/search_page/search_page.container';
import Listingpage from './pages/listing_page/listing_page.container';


import NavBar from './components/NavBar/Navbar.component';




import './App.scss';

function App() {

  return (
    <div className="App">
      <NavBar/>
        <Switch>
          <Route  path="/cart" component={Cartpage} />
          <Route  path="/search_results" component={Searchpage} />
          <Route  path="/catalogue" component={Listingpage} />
          <Route exact path="/" component={Homepage} />
        </Switch>
    </div>
  );
}

export default withRouter(App);
