import React from 'react'
import '../styles/Header.css'
import kollydap from  '../assets/kollydap.jpg'




function Header(){
  return (
  <div className='header'>


    <div className="header__text-box">
      <img src={kollydap} alt=' ' />
                <h1 className="heading-primary">
                    <span className="heading-primary--main"><h3>Oladapo Kolawole Osagie</h3></span>
                    <span className="heading-primary--sub">Fullstack WebDev</span>
                </h1>

                </div>
            </div>
  )
}

export default Header;