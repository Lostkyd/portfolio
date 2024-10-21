import React from 'react'
import './About.css'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
        </div>
        <div className="about-sections">
            <div className="about-left">
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I am seeking an opportunity to apply my skills and 
                        passion for the IT field in a professional and dynamic 
                        environment. I have developed a solid foundation in data analysis, 
                        problem-solving, and technical proficiency, which I am eager to apply 
                        and further develop.
                    </p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width: "50%"}} />100%</div>
                    <div className="about-skill"><p>ReactJs</p><hr style={{width: "10%"}}/>40%</div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width: "15%"}}/>45%</div>
                    <div className="about-skill"><p>Python</p><hr style={{width: "40%"}}/>80%</div>
                    <div className="about-skill"><p>Machine Learning</p><hr style={{width: "30%"}}/>60%</div>
                    <div className="about-skill"><p>Data Analysis</p><hr style={{width: "25%"}}/>50%</div>
                    <div className="about-skill"><p>Tableau</p><hr style={{width: "25%"}}/>50%</div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>3 MONTHS</h1>
                <p>INTERNSHIP EXPERIENCE</p>
                <h2>Data Analyst Intern</h2>
                <p>Land Registration Systems, Inc.</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>3 MONTHS</h1>
                <p>INTERNSHIP EXPERIENCE</p>
                <h2>Technical Support Intern</h2>
                <p>SM Investments Corporation</p>
            </div>
        </div>
    </div>
  )
}

export default About