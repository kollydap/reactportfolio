import React,{useEffect,useState} from 'react'
import '../styles/Blog.css'
import {useParams} from "react-router-dom"
import Links from './Links';


function Blogs() {
  let id = useParams().id;
  
  const [blog,setBlog]=useState([])
  const [blogComments, setBlogComments]=useState([])

  useEffect(()=>{
    fetch(`https://kolakolly.herokuapp.com/${id}`)
    .then (response => response.json())
    .then(data => setBlog(data))   
},[])

useEffect(()=>{
  fetch(`https://kolakolly.herokuapp.com/commentlist/${id}`)
  .then (response => response.json())
  .then(data => setBlogComments(data))   
},[])

const initialFormData = Object.freeze({
  "name":"",
  "comment":""

});

const [formData, setFormData] = useState(initialFormData);
const handleChange = (e)=>{
  setFormData({
    ...formData,
    // Trimming any whitespace
    [e.target.name]:e.target.value.trim(),
  })
}
const handleSubmit=(e)=>{
  e.preventDefault();
  fetch(`https://kolakolly.herokuapp.com/createcomment/`,
  {
    method: 'POST',
    headers:{
      'Content-Type':'application/json',
    },
    mode: 'cors',
    body:JSON.stringify({"name":formData.name,"blog":blog.id, "comment":formData.comment})
  },
  )
  // .then(setFormData(e.target.value = ""))
}

console.log(blogComments)
  return (
    <div className="blogs">
   
    <div className='blog__main'>
    <h3 className='blog__title'>{blog.title}</h3>
    <p className='blog__timeStamp'>{blog.published_date}</p>
    <img className='blog__image' src={blog.photo}/>
    <p className='blog__body'>{blog.description}</p>
    
    </div>
    <div className='comment'>
      <h3>Comments</h3>
      <form>
      <input placeholder='Your Name' required onChange={handleChange} name='name'></input>
      
      <input className='msgbody'  required onChange={handleChange} placeholder='Your Comment' name='comment'></input>
      <button type='submit'onClick={handleSubmit} >Submit</button>
      </form>
      <div>{
      blogComments.map(blogComment =>{

                 const {id,name,comment,time} = blogComment
                 return(
                    <div key={id} className="comment-card">
                      {name}
                     <p> {comment}</p>
                     <br />
                    <p>{time}</p>
                 
                 </div>
                 
                 )
               })
             }

      </div>
    </div>

   
    </div>
  )
}

export default Blogs;