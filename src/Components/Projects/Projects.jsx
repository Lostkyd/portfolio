import React from 'react'
import './Projects.css'
import arrow_icon from '../../assets/arrow_icon.svg'
import mywork_data from '../../assets/mywork_data'

const Projects = () => {
  return (
    <div id= 'project' className='projects'>
        <div className="projects-title">
            <h1>My Projects</h1> 
        </div>
        <div className="projects-container">
          {mywork_data.map((work,index)=>{
            return <img key={index} src={work.w_img} alt=""/>
          })}
        </div>
        <div className="projects-showmore">
          <p>Show more</p>
          <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default Projects