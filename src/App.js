import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shop from "./components/shop/Shop";
import Header from "./components/Header";
import ProductItem from "./components/shop/ProductItem";
import Cart from "./components/cart/Cart";
import Profile from "./components/Profile/Profile";
import ContextProvider from "./components/Context/ContextProvider";
import "./tailwind.output.css";
import Order from "./components/Profile/Order";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Auth/Login";
import AuthProvider from "./components/Context/AuthProvider";
import SignUp from "./components/Auth/SignUp";

function App() {
  return (
    <Router>
      <div className='App'>
        <AuthProvider>
          <ContextProvider>
            <Header />
            <Cart />
            <Switch>
              <Route exact path='/' component={Shop} />{" "}
              <Route exact path='/shop/:item' component={ProductItem} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={SignUp} />
              <PrivateRoute exact path='/profile' component={Profile} />
              <PrivateRoute exact path='/profile/order' component={Order} />
            </Switch>
          </ContextProvider>
        </AuthProvider>
      </div>
    </Router>
  );
}

export default App;
