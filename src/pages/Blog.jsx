import React from 'react';
import Navbar from '../components/Navbar';
import './Blog.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";


const Blog = () => {
  return (
    <div>
      <Navbar/>
      <div>
         <Swiper
        slidesPerView={1}
        spaceBetween={0}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide>
          <div className="blog-wrap">
            <h1><b>Explore the Latest <br/>Insights: Hair Care Tips, <br/>Trends & Solutions</b></h1>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
}

export default Blog;
