import React from 'react' 
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, image, title, price, rating, hideButton}) {

    const [{basket}, dispatch] = useStateValue();
    const removefrombasket = () => {
        dispatch({
            type : 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

  return (
    <div className='checkoutproduct'>
      <img className = 'checkoutproduct__image' src = {image} ></img>
      <div className='checkoutproduct__info'>
            <p className='checkoutproduct__title'> {title} </p>
            <p><small>₹</small><strong>{price}</strong></p>
            <div className='checkoutproduct__rating'>
                {Array(rating).fill().map(()=><p>⭐</p>)}
            </div>
            {!hideButton && (<button onClick = {removefrombasket}>Remove from Basket</button>)}
      </div>
    </div>
  )
}

export default CheckoutProduct
