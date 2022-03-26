import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward, FaUsers, FaFolder} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About Me' />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            
            <article className='about__card'>
              <FaUsers className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            
            <article className='about__card'>
              <FaFolder className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Complete</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta, quis asperiores laudantium deserunt totam perspiciatis assumenda quibusdam esse numquam! Rerum quisquam ea quas optio a veniam corporis, tenetur modi perspiciatis?
          </p>

          <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About