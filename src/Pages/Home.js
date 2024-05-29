import React from 'react'
import "../Styles/Home.css";
import Typewriter from "typewriter-effect";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import AnimatedPage from '../Components/AnimatedPage'
// import {FacebookShareButton, FacebookIcon} from "react-share";


function Home() {
  const [transition, setTransition] = useState(false);
  const [showproduct, setShowproduct] = useState(false);
  return (
    <div className='header-home'>
      {showproduct ?(
       < product
        showproduct={showproduct}
        setShowproduct={ setShowproduct}
        setTransition={setTransition}
        />
      ):

      (
      
        <section className='main-home'>
          <nav className='text-sec-home'>
                <section className='text-box-home'>
                <AnimatedPage>
                  <h4 className='hello'>Hello, its Me.</h4>
                  <h3>Adunola Adenike T</h3>
                  <h2 className='writer-home'>
                    <Typewriter
                    options={{
                      autoStart: true,
                      loop:true,
                      delay:20,
                      strings: ['And I am a Frontend Developer!']
                    }}
                    />
                  </h2>
                  <h1 className='official'>This is my official Portfolio Website to showcase all my works related to Frontend Development. </h1>
                  <button className='cv'>Resume</button>

                  <nav className='social'>
                    <button className='git-btn'><h2><FaGithub/></h2></button>
                    <button className='fb-btn'><h2><FaFacebookF/></h2> </button>
                      <button className='lkd-btn'><h2><FaLinkedin/></h2> </button>
                  </nav>
                  {/* <section className='social2'>
                    <h2>hii, I hope you get it well</h2>
                    <FacebookShareButton url={shareUrl}>

                    <FacebookIcon/>
                    </FacebookShareButton>

                  </section> */}
                  </AnimatedPage>
                  </section>
                 
          </nav>

          <nav className='pic-sec-home'>
                <section className='pic-box-home'>
                  <img className='my-pic-home' src='1000042474.jpg'/>
                </section>
          </nav>
                      {/* <button onClick={()=>{setTransition(!transition);
                      setTimeout(()=>setShowproduct(!setShowproduct),500)
                      }}>click</button> */}
        </section>
      )}
<AnimatePresence mode='wait'>{transition && <transition />}</AnimatePresence>

    </div>
  )
}

export default Home