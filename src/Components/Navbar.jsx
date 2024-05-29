import React from 'react'
import { Link } from 'react-router-dom'
import  '../Styles/Navbar.css';
import { useState } from 'react';
import Home from '../Pages/Home';
import { FaAlignJustify } from "react-icons/fa";
// import './images/pic 3.jpg'




function Navbar() {
  const [openLinks,setOpenLinks]= useState(false);
  const toggleNavbar=()=>{
    setOpenLinks (! openLinks);
  };
  return (
    <div>
     <section className='navbar-sec'>
      <nav className='port-sec' id={openLinks | "open" | "close"}>
        <h6>Portfolio</h6>
      </nav>
      <nav className='hidden-links'>
       <Link to="/" ><a>Home</a></Link> 
           <Link to="about"><a>About </a></Link> 
           <Link to="skills"><a>Skills</a></Link>
           <Link to="portfolio"><a>Portfolio</a></Link>
           <Link to="contact" ><a>Contact</a></Link>
      </nav>
      <nav className='home-sec'>
           <Link to="/"  className='home'><a>Home</a></Link> 
           <Link to="about" className='about'><a>About </a></Link> 
           <Link to="skills" className='skills'><a>Skills</a></Link>
           <Link to="portfolio" className='portfolio'><a>Portfolio</a></Link>
           <Link to="contact"  className='contact'><a>Contact</a></Link>
        </nav>
        <nav>
          <button className='ham-sec' ><FaAlignJustify/></button>
        </nav>
        <nav onClick={{toggleNavbar}}>
        {/* <ReorderIcon/> */}
        </nav>
 </section>


    </div>
  )
}

export default Navbar