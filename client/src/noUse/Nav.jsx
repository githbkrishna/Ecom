import React from 'react'
import logo from '../assets/logo.png'
import '../App.css'

function Nav() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Education</a></li>
        <li><a href="">Projects</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Nav
