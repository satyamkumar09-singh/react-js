import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav>
        <div className="logo">Logo</div>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><a href="">Services</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Gallery</a></li>
        </ul>
    </nav>
    
    </>
    
  )
}

export default Nav