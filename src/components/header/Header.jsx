import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className='title'>
          <h5>Hello I'm</h5>
          <h1>Huynh Hai Hung</h1>
          <h5 className="text-light typing">Front-end Web Developer</h5>
        </div>

        <CTA />
        
        <HeaderSocials />
        
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
