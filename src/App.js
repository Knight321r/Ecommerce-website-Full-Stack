import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useEffect } from 'react';
import {auth} from './firebase'
import { useStateValue } from './StateProvider';
import Payment from './Payment'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders'

const promise = loadStripe('pk_test_51NpWshSCeCxhNj7csq1we7PI6vuYMNEQNw2fSN43HmnC1y6pOJfadocOmbRAewkcEbt3VoJgRHpQtvkx9prw55mD00ydUYuqVl')

function App() {

    const [{}, dispatch] = useStateValue()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>> ', authUser)
      if(authUser){

        dispatch({
          type : 'SET_USER',
          user : authUser
        })
      } else{
        dispatch({
          type : 'SET_USER',
          user : null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path = "/" element = {<div><Header /><Home /></div>} />
          <Route path = "/checkout" element = {<div><Header /><Checkout /></div>} />
          <Route path = "/login" element = {<div><Login /></div>} />
          <Route path = "/payment" element = {<div><Header /><Elements stripe = {promise}><Payment /></Elements></div>}/>
          <Route path = "/orders" element = {<div><Header /><Orders /></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
