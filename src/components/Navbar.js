import React from 'react'
import "../styles/Navbar.css"
import {Link} from 'react-router-dom'

function MyNavbar() {
  return (
    <div className='NavBar' >
        <Link to='/'>
        <h1>Kollydap</h1>
        </Link>
        <Link to='/blogs'>
        <h2 style={{border:"2px solid #fe4b68", padding:"5px 15px",borderRadius:"10px"}}>Blog</h2>
        </Link>
    </div>
  )
}

export default MyNavbar