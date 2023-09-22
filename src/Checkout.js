import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct';
import p4 from './p4.png'

function Checkout() {

  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className='checkout'>
       <div className = 'checkout__left'>
            <div className='checkout__main'>
             <h3>Hello, {user?.email}</h3>
                <h1 className='checkout__title'>Your shopping Basket</h1>

                {basket.map(item => (
                  <CheckoutProduct 
                    id = {item.id}
                    image = {item.image}
                    rating = {item.rating}
                    title = {item.title}
                    price = {item.price}
                  />
                ))}
            </div>
       </div>
       <div className = 'checkout__right'>
            <div className='checkout__right__subtotal'>
                <Subtotal />
            </div>
       </div>
    </div>
  )
}

export default Checkout
