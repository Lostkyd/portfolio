import React from 'react';
import './Hero.css';
import profile_img from '../../assets/Image-Logo.png';
import git_logo from '../../assets/github-mark-white.png';
import linkedin_logo from '../../assets/LI-In-Bug.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../../assets/CV - Ronn Kevin Rubio.pdf';

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt='' />
      <h1>
        <span>I'm Ronn Kevin Rubio,</span> a Computer Science graduate.
      </h1>
      <div className="hero-logos">
        <a href="https://github.com/Lostkyd" target="_blank" rel="noopener noreferrer">
          <img src={git_logo} alt="GitHub" />
        </a>
        <a href="https://linkedin.com/in/ronnkevs/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin_logo} alt="LinkedIn" className='hero-linkedin'/>
        </a>
      </div>
      <div className='hero-action'>
        <div className='hero-connect'>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with me
          </AnchorLink>
        </div>
        <div className='hero-resume'>
          <a href={resume} className='anchor-link' download>
            My resume
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;