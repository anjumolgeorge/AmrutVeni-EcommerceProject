import React from 'react';
import Navbar from '../components/Navbar';import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import ProductDetails from "../pages/ProductDetails";
import './Home.css'


const Home = () => {
  return (
    <div>
      <Navbar/>
         {/* Hero */}
      <div className="hero">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{
            delay: 3000,
          }}
        >
          <SwiperSlide>
            <div className="hero-wrap">
              <div className="hero-content">
                <h2>
                  <b>
                    Bio-technology for vibrant <br />
                    and resilient hair
                  </b>
                </h2>
                <div className="btnstyle">
                <a href="#" className="btn">
                  Shop Now
                </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-wrap">
              <div className="hero-content">
                <h2>
                  <b>
                   Experience stronger, fuller<br/> hair for a radiant you.
                  </b>
                </h2>
                 <div className="btnstyle">
                <a href="#" className="btn">
                  Shop Now
                </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-wrap">
              <div className="hero-content">
                <h2>
                  <b>
                  Hair issues? Explore our <br/> tailored gender- <br/>specific solutions.
                  </b>
                </h2>
                <div className="btnstyle">
                <a href="#" className="btn">
                  Shop Now
                </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Products */}
      <div className="product-container">
        <div className="inline-div">
           <h2><b>Best Sellers</b></h2>
        </div>
      </div>

        <ProductDetails/>

    </div>
  );
}

export default Home;
