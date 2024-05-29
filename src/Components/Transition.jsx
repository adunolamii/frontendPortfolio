import React from 'react'
import Transtion from '../Styles/Transition.css'
import { TransAnimation } from './Animation'
import {motion} from "framer-motion";

const Transition=()=> {
  return (
    <motion.div 
    className='transition' 
    variants ={TransAnimation}
    inital='hidden'
    animate='show'
    exit='hide'
    transition={{duration:1.8}}
    >Transition</motion.div>
  )
}

export default Transition