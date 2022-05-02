import React,{useState} from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import Carousel from 'react-elastic-carousel';

import '../styles/Contact.css'

function Contact() {
  const breakPoints = [
    {width:1, itemsToShow:1},
    {width:550, itemsToShow:3},
    {width:768, itemsToShow:3},
    {width:1200, itemsToShow:4},
  ]
  const initialFormData = Object.freeze({
    "name":"",
    "email":"",
    "message":""

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
    fetch(`https://kolakolly.herokuapp.com/customer/`,
    {
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
      },
      mode: 'cors',
      body:JSON.stringify({"name":formData.name,"email":formData.email, "message":formData.message})
    },
    )
    // .then(setFormData(e.target.value = ""))
    
    .then(alert("we'll get back to you shortly"))
    
  }

  return (
    <div>
    <div className='contact'>
        <h3>Leave A Message</h3>
        <form>
            <input placeholder='Your Name' required onChange={handleChange} name='name'></input>
            <input placeholder='Your Email'type="email" required onChange={handleChange} name='email'></input>
            <input className='msgbody'  required onChange={handleChange} placeholder='Your Message' name='message'></input>
            <button type='submit'onClick={handleSubmit} >Submit</button>
        </form>
    </div>
    
    <div className='touch tc'>
      <h3>Get In Touch</h3>
    
    <div>
    <LocationOnIcon style={{color:"#fe4b68"}}/>
      <h5>My Location</h5>
    <p>FUTA || Ayobo Lagos</p>
    </div>
    <div>
      <PhoneEnabledIcon style={{color:"#fe4b68"}}/>
      <h3>Phone Number</h3>
      <p>+2347083842098</p>
      {/* <p>+2347063406436</p> */}
    </div>
    <div>
      <EmailIcon style={{color:"#fe4b68"}} />
      <h3>Email Address</h3>
      <p><a href='http://dapkolly@gmail.com'>dapkolly@gmail.com</a></p>
    </div>
    
    </div>
  
    
    </div>
  )
}

export default Contact