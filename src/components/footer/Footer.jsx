import React from 'react'
import './footer.css'

import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs"

const Footer = () => {
  return (
    <footer>
      <a href="/" className="footer__logo">Home</a>
      <ul className='permalinks'>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <BsLinkedin />
        </a>
        <a href="https://github.com/yanfan-hw" rel="noopener noreferrer" target="_blank">
            <BsGithub />
        </a>
        <a href="https://facebook.com/hwng.huynhhai" rel="noopener noreferrer" target="_blank">
            <BsFacebook />
        </a>
      </div>
      <div className="footer__copyright">
        <strong>&copy; YanFan Hw. Make with love!</strong>
      </div>
    </footer>
  )
}

export default Footer