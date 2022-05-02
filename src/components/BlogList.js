import React,{ useEffect,useState } from "react"
import '../styles/BlogList.css'
import {Link} from 'react-router-dom'


function BlogList() {
    const [blogLists, setBlogLists]=useState([])

    useEffect(()=>{
      fetch(`https://kolakolly.herokuapp.com/`)
      .then (response => response.json())
      .then(data => setBlogLists(data))   
  },[])
  console.log(blogLists)
  return (
    <div className='blogList'>
      {/* <div className="blogHeader"></div> */}
        {
      blogLists.map(blogList=>{
                 const {id,photo,description,published_date,title} = blogList
                 return(
                   <Link to={`/blogs/${id}`}  key={id}>
                    <div className="comment-card">
                      
                    <img src={photo}/>  
                    <div>
                      <h3>{title}</h3>
                      <p>{published_date}</p>                     
                     
                      </div>
                    </div>
                    </Link>
                 
                 )
               })
             }

    </div>
  )
}

export default BlogList