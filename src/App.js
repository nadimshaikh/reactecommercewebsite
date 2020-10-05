import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import ProductsContextProvider from "./Global/ProductsContext"
import CartContextProvider from "./Global/CartContext"
import Cart from "./components/Cart"
import NotFound from "./components/NotFound"
import './App.css';

const App = () => {
  return (

    <div>
      <ProductsContextProvider>
        <CartContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Products} />
            <Route  exact path="/cart" component={Cart}/>
            <Route component={NotFound}/>
          </Switch>
        </Router>
        </CartContextProvider>
      </ProductsContextProvider>


    </div>


  );
};

export default App;
