import React from 'react'
import { PROJECTS } from '../data/projects';
import '../styles/Projects.css'
import Carousel from 'react-elastic-carousel';

const Project = (props) =>{
		
  const {title, image, description, link,github}=props.Project;
  const breakPoints = [
    {width:1, itemsToShow:1},
    {width:550, itemsToShow:3},
    {width:768, itemsToShow:3},
    {width:1200, itemsToShow:4},
  ]
  
  return(

    
    // <div className='grow' style={{boxShadow: "0px 0px 1.8rem 0px rgb(0 0 0 / 10%)",maxWidth: "350px",margin: "10px 15px", padding:"10px"}} >
    <div className='grow'>
      <h2>{title}</h2>
      <img src = {image} alt=' ' />
      <p className='description'>{description}</p>
      <br />
      <a href = {link}>{link}</a>
      <a href = {github}>{github}</a>
    </div>
    
    )
}

function Projects() {
  return (
    
			<div className='project'>
     
        <h2>Projects</h2>
      
        <Carousel >
        
      
				{
					PROJECTS.map(PROJECT => {
						return ( 
            
							<Project  key={PROJECT.id} Project={PROJECT}/>
              
						);
					})
				}
      </Carousel>
				</div>
      
			
  )
}

export default Projects