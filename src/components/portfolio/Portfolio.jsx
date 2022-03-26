import React from 'react'
import './portfolio.css'

import { initialData } from '../portfolio/dataPortfolioProjects'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {initialData.dataPortfolioProjects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className='btn'
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className='btn btn-primary'
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Portfolio
