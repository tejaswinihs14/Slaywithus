import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import './App.css';
import Aboutus from './Aboutus';
import Products from './Products';
import Login from './Login';
import Order from './Order';
import Orders from './Orders';
import Payment from './Payment';
import Contactus from './Contactus';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51HYdqlFhBzxwYoEq8GHEvGrS1Uynf41PEF7I8mhrHrDPfLpYKlaVfsnpP59VZsT08WM7Ed2vS1rYtZYH38qAIL4j006ValTnUF");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(()=>{

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {

        dispatch({
          type: "SET_USER",
          user: authUser,
        });

      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }

    })

  },[])
  return (
    <Router>
    <div className="app">
    <Header />
      <Switch>

      <Route path="/orders">
            <Orders />
          </Route>

      <Route path="/login">
            <Login />
          </Route>

      <Route path='/aboutus'>
         <Aboutus />
        </Route>
        <Route path="/payment">
           <Elements stripe={promise}>
           <Payment />
           </Elements>
            
          </Route>

        <Route path='/products'>
         <Products />
        </Route>

        <Route path="/order">
            <Order />
          </Route>
       
        <Route path="/contactus">
            <Contactus/>
          </Route>

        <Route path='/checkout'>     
          <Checkout />
        </Route>
        
        <Route path='/'>
          <Home />
        </Route>

      </Switch>

    </div>
    </Router>
  );
}

export default App;
