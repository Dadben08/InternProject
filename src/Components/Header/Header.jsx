import React from 'react'
import './Header.css'
import logo from '../../assets/Logo.png'

const Header = () => {
  return (
    <section className='header-container'>
        <span>
            <img src={logo} alt="" />
        </span>
        <ul >
            <li>Auctions</li>
            <li>Roadmap</li>
            <li>Discover</li>
            <li>Community</li>
        </ul>
        <span>
            <button >Contact</button>
            <button className='account'>My account</button>
        </span>
    </section>
  )
}

export default Header