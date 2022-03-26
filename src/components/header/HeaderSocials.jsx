import React from 'react'
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
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
  )
}

export default HeaderSocials