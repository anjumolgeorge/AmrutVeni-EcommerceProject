import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Navbar from '../components/Navbar'
import "swiper/css";
import "swiper/css/effect-fade";
import "./About.css";

const About = () => {
  return (
    
    <div className="about">
        <Navbar/>

      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        autoplay={{ delay: 3000 }}
      >
        
        <SwiperSlide>
          <div className="about-wrap">
            <h2>
              <b>
                Who we are
                <br />
                As pioneers of biotechnologically developed
                <br />
                organic hair care and skin care solutions,
              </b>
            </h2>
            <p>
              <b>
                We are set to significantly raise the beauty industry standards!
              </b>
            </p>
            <p>
              We are Sahyadri Bio Lab's Hair Care line, AmrutVeni.
              <br />
              Our motto is very simple-
            </p>
            <h2>
              <b>Lush Beautiful & Healthy Hair</b>
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
        <div>
          <div className="intro" style={{background:'red',position:"relative"}}>
            <h1>hi</h1>
          </div>
          </div>      
              
    </div>
  );
};

export default About;
