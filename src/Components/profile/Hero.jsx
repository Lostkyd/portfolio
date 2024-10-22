import React from 'react'
import './Hero.css'
import profile_img from '../../assets/Image-Logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import resume from '../../assets/CV - Ronn Kevin Rubio.pdf'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt='' />
      <h1>
        <span>I'm Ronn Kevin Rubio,</span> a Computer Science graduate.
      </h1>
      {/* <p>
        I studied at National University, Manila with specialization in Machine Learning.
      </p> */}
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
  )
}

export default Hero

