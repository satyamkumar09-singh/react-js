import React from 'react'
import '../mycss/style.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
    <nav>
        <div className="logo">Logo</div>
        <ul>
            <li><Link to={"/page1"}>page1</Link></li>
            <li><Link to={"/page2"}>page2</Link></li>
            <li><Link to={"/product"}>product</Link></li>
            
            <li><a href="">Contact</a></li>
            <li><a href="">Gallery</a></li>
        </ul>
    </nav>
    
    </>
    
  )
}

export default Nav