import React from 'react'
import "../Styles/About.css"
import Typewriter from "typewriter-effect"
import AnimatedPage from '../Components/AnimatedPage'
import { useNavigate } from 'react-router-dom'


function About() {
  const navigate =useNavigate();
    return (
    <div className='header-about'>
      <section className='main-about'>
        <nav className='pic-sec-about'>
          <section className='pic-box-about'>
          <img className='my-pic-about' src='1000042474.jpg'/>
          </section>
        </nav>
        <nav className='text-sec-about'>
          <section className='text-box-about'>
          <AnimatedPage>
                  <h4 className='about-me'>About Me</h4>
                  <h3 className='writer-about'>
                    <Typewriter
                    options={{
                      autoStart:true,
                      loop:true,
                      delay:20,
                      strings:["A Frontend Developer!"]
                    }}
                    />
                  </h3>
                  <h1 className='expert'>I am expert in Frontend Development. I design, create and deploy a complete application from scratch to finish with the use of varios tools.</h1>
                    <button onClick={()=>{navigate('/contact')}} className='contact-btn'>Contact Me</button>
                 
                  </AnimatedPage>
          </section>
          </nav>  
      </section>




    </div>
  )
}

export default About