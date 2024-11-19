import React from 'react'
import './Footer.css'
import logo from '../../assets/f-logo.png'

const Footer = () => {
  return (
    <section className="f-container">
        <div className='foot'>
        <div className='log'>
            <img src={logo} alt="" />
            <ul>
                <li>Support</li>
                <li>Term of service</li>
                <li>License</li>
            </ul>
        </div>
        <div className='footcenter'>
            <ul>
                <li>Auctions</li>
                <li>Roadmap</li>
                <li>Discover</li>
                <li>Community</li>
            </ul>
            <span>
                <button>My account</button>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-github"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
            </span>
        </div>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur, <br />adipisicing elit. Aspernatur doloribus nemo fugiat <br /> accusamus? Debitis,
                 a necessitatibus? Voluptatibus, .</p>
                 <span>
                 <input type="text" name='sign in' placeholder='newsletter'/>
                 <h5>Sign in</h5>
                 </span>
                 
        </div>
        </div>
    </section>
  )
}

export default Footer