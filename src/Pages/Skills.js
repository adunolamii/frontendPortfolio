import React from 'react'
import '../Styles/Skills.css'
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { DiJavascript } from "react-icons/di";
import { DiReact } from "react-icons/di";


function Skills() {
  
  return (
    <div className='header-skill'>
       <section className='main-skill'>
          <nav className='main1-skill'>
           <section className='html-box'><h1 className='html'><AiOutlineHtml5/></h1></section>
           <section className='css-box'><h1 className='css'><DiCss3/></h1></section>
           
          </nav>

          
          <nav className='main2-skill'>
            <section className='js-box'></section>
            <section className='react-box'></section>

          </nav>

          


       </section>
       

     </div>
  )
}

export default Skills


{/* <h1><DiCss3/></h1> */}
{/* <h1><DiJavascript/></h1> */}
{/* <h1><DiReact/></h1> */}