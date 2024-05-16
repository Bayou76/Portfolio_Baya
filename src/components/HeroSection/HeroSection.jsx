import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './heroSection.scss'; 

const HeroSection = () => {
    const textRef = useRef(null);
  
    useEffect(() => {
      const text = "Salut, moi c'est Baya et je suis développeuse web.";
      let index = 0;
      let timer;
  
      const animateText = () => {
        textRef.current.textContent = text.slice(0, index);
  
        index++;
  
        if (index > text.length) {
          index = 0;
        }
  
        timer = setTimeout(animateText, 100); // Vitesse de dactylographie
      };
  
      animateText();
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div className="hero-container">
        <p className="intro-text" ref={textRef}></p>
        <h1>Bienvenue sur mon Portfolio</h1>
        <p>Découvrez mes projets et mon parcours professionnel.</p>
        <button>
          <NavLink to='/projets' className='nav_link'>
            En savoir plus
          </NavLink>
        </button>
        <div className="social-links">
          <a href="https://github.com/Bayou76" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/baya-sebia/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </div>
      </div>
    );
}

export default HeroSection;
