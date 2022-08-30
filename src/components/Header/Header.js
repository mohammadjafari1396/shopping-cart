import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <nav>
        <Link to="/" className='link-header'>صفحه اصلی</Link>
        <Link to='/shoppingcart' className='link-header'>سبد خرید</Link>
      </nav>
    </div>
  )
}

export default Header