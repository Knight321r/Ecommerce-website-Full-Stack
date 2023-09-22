import React, { useState } from 'react'
import './Login.css'
import {Link , useNavigate } from 'react-router-dom'
import alogo from './alogo.png'
import { auth } from './firebase';


function Login() {

    const navigate = useNavigate();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const signin = (e) => {
        e.preventDefault()
        
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                navigate('/')
            })
            .catch((error) => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth)
            if(auth){
                navigate('/')
            }
        })
        .catch(error => alert(error.message))
    }

  return (
    <div className = 'login'>
        <Link to = '/'>
            <img className = 'login__logo' src = {alogo}/>
        </Link>
        <div className='login__container'>
            <h1>Sign-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type = 'text' value = {email} onChange = {e => setemail(e.target.value)}/>
                <h5>Password</h5>
                <input type = 'password' value = {password} onChange = {e => setpassword(e.target.value)}/>
                <button type = 'submit' onClick = {signin} className='login__signinbutton'>Sign In</button>
            </form>

            <p>
                By signing-in you agree to the Amazon fake clone Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice. 
            </p>
            <button onClick = {register} className='login__registerbutton'>Create your Amazon account</button>
        </div>
    </div>
  )
}

export default Login
