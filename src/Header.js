import React from 'react'
import headerlogo from './headerlogo.png'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const [{basket, user}, dispatch] = useStateValue();

    const handleauthentication = () => {
        if(user){
            auth.signOut();
        }
    }

  return (
    <div className='header'>
        <div className = 'header__logo'> 
            <Link to = '/'>
                <img className = 'logo' src = {headerlogo} />  
            </Link>
        </div>
        <div className = 'header__search'>
            <input className = 'header__search__input' type = "text" />
            <SearchIcon className = 'header__searchicon'/>
        </div>
        <div className='header__nav'>
        <Link to = {!user && '/login'}>
            <div onClick = {handleauthentication} className = 'header__nav__option'>
                <span className = 'header__nav__option1'>Hello Guest</span>
                <span className='header__nav__option2'>{user ? "Sign Out" : "Sign In"}</span>
            </div>
        </Link>
        <Link to = '/Orders'>
            <div className='header__nav__option'>
                <span className = 'header__nav__option1'>Returns& </span>
                <span className = 'header__nav__option2'>Orders</span>
            </div>
        </Link>
            <div className='header__nav__option'>
                <span className = 'header__nav__option1'>Your</span>
                <span className = 'header__nav__option2'>Prime</span>
            </div>
            <Link to = '/checkout'>
                <div className='header__basketicon'>
                    <ShoppingBasketIcon className='header__basket'/>
                    <span className='header__basketcount header__nav__option2'>{basket.length}</span>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Header
