import React from 'react'
import './Subtotal.css'
import { useStateValue } from './StateProvider';
import { getbaskettotal } from './reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {

  const [{basket}, dispatch] = useStateValue();
    let val = 0;

    const nav = useNavigate();

  return (
    <div className='subtotal'>
        <p>Subtotal ({basket.length} items): <strong>{`${getbaskettotal(basket)}`}</strong></p>
        <small className='subtotal__gift'>
            <input type = 'checkbox' /> This order contains a gift 
        </small>
        <button onClick = {e => nav('/payment')} >Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
