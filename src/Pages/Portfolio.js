import React from 'react'
import "../Styles/Portfolio.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectFade } from 'swiper/modules';

import { Navigation, Pagination, Scrollbar, A11y,  EffectFlip } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaGithub } from "react-icons/fa"



function Portfolio() {
  return (
    <div className='header-portfolio'>
      <section className='main-portfolio'>
    <Swiper 
    modules={[Navigation, Pagination, Scrollbar, A11y, EffectFlip]}
    effect='flip'
    EffectFade='fade'
    
    // spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
   
  >
    <SwiperSlide> <img style={{width:"400px", height:"400px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNlSafe0aDy8VjtbTEUkyJgWhkbGr9tW2fjQ&usqp=CAU' alt='' /> </SwiperSlide>
    <SwiperSlide> <img style={{width:"400px", height:"400px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWhrEKW_bQ0YqOKR6opy9wp6g8pFgD3RwMBA&usqp=CAU' alt=''/></SwiperSlide>
    <SwiperSlide> <img style={{width:"400px", height:"400px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrqwINOe2sId1dqyXPooGRQqmPZz7XI5d0yA&usqp=CAU' alt=''/></SwiperSlide>
    <SwiperSlide> <img style={{width:"400px", height:"400px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa8z1BezkZ7h0HyT7QvbP-d3znRrUFdydgAw&usqp=CAU' alt=''/></SwiperSlide>
    <SwiperSlide> <img  style={{width:"400px", height:"400px"}}src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa8z1BezkZ7h0HyT7QvbP-d3znRrUFdydgAw&usqp=CAU' alt=''/></SwiperSlide>
    <SwiperSlide> <img  style={{width:"400px", height:"400px"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7VzTYmlI-rroMTLICFt41NCVuq-iVLfu1A&usqp=CAU' alt=''/></SwiperSlide>
    
  </Swiper>
  </section>
  <h1 style={{color:"purple", width:"900px"}}><FaGithub/></h1>
   </div>
  )
}

export default Portfolio