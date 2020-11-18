import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from "./components/shop/Shop";
import Header from "./components/Header";
import ProductItem from "./components/shop/ProductItem";
import Cart from "./components/cart/Cart";
import Profile from "./components/Profile/Profile";
import ContextProvider from "./components/Context/ContextProvider";

function App() {
  return (
    <Router>
      <div className='App'>
        <ContextProvider>
          <Header />
          <Cart />
          <Switch>
            <Route exact path='/' component={Shop} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/:item' component={ProductItem} />
          </Switch>
        </ContextProvider>
      </div>
    </Router>
  );
}

export default App;
