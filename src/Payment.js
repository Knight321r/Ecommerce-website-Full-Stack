import React, { useEffect, useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import {Link, useNavigate} from 'react-router-dom'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { getbaskettotal } from './reducer'
import axios from './axios'
import instance from './axios'
import { ConnectingAirportsOutlined } from '@mui/icons-material'
import {db} from './firebase'
import Orders from './Orders'

function Payment() {

    const navigate = useNavigate();

    const [{basket, user}, dispatch] = useStateValue()

    const [error, setError] = useState(null)
    const [disabled, setDisabled] = useState(true)

    const [processing, setProcessing] = useState("")
    const [succeeded, setSucceeded] = useState(false)
 
    const [clientSecret, setClientSecret] = useState(true)

    useEffect(() => {
        const getClientSecret = async () => {
            try{
                await instance({
                    method : 'post',
                    url : `/payments/create?total=${getbaskettotal(basket) * 100}`,
                }).then((response) => {
                    setClientSecret(response.data.clientSecret)
                })
               }catch(e){
                    console.log(e)
                }
            
            // setClientSecret(response.data.clientSecret)
        }
  
        getClientSecret()
    }, [basket])

    console.log('The secret is >>>>', clientSecret)

    const stripe = useStripe()
    const elements = useElements()

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method : {
                card : elements.getElement(CardElement)
            }
        }).then(({paymentIntent}) => {

            db
              .collection('users')
              .doc(user?.uid)
              .collection('orders')
              .doc(paymentIntent.id)
              .set({
                basket : basket,
                amount : paymentIntent.amount,
                created : paymentIntent.created
              })  


            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            navigate('/Orders')
        })

    }

    const handleChange = event => {
        setDisabled(event.empty)
        setError(event.error ? event.error.message : "")
    }

    let value = getbaskettotal(basket);

  return (
    <div className = "payment">
        <div className = "payment__container">

            <h1>Checkout (<Link to = "../checkout"> {basket?.length} items </Link>)</h1>

            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delievery Address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>123 React Lane</p>
                    <p>Los Angeles, CA</p>
                </div>
            </div>


            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment__items'>
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


            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>

                        <form onSubmit = {handleSubmit}>
                            <CardElement onChange = {handleChange}/>
                        <div className='payment__priceContainer'>
                            <h3>Order Total: ₹{value}</h3>
                            <button disabled = {processing || disabled || succeeded}>
                                <span>{processing ? <p> Processing </p> : "Buy Now"}</span>
                            </button>
                        </div>
                        {error && <div>{error}</div>}
                        </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment
  