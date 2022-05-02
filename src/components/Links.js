import { Link } from "react-router-dom";
import "../styles/Links.css"
import React from 'react'

function Links() {
  return (
    <div className="links">
        <h3><Link to = '/'>Home</Link></h3>
        <h3><Link to='blogs'>Blog</Link></h3>
    </div>
  )
}

export default Links