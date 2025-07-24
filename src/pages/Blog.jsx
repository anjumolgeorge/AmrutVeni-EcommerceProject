import React from 'react';
import Navbar from '../components/Navbar';
import './Blog.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const blogs = [
  {
    id: 1,
    name: "After childbirth took a toll on her hair, Amruthveni brought bhuvanesvari hope.",
    description: "After postpartum hair loss, Amrutveni gave her hope and hair health...",
    vedio:"https://amrutveni.sgp1.cdn.digitaloceanspaces.com/amrutveni_production/blog/Bhuvana_Thumbnail_a8c3b729.webm",
  },
  {
    id: 1,
    name: "After childbirth took a toll on her hair, Amruthveni brought bhuvanesvari hope.",
    description: "After postpartum hair loss, Amrutveni gave her hope and hair health...",
    vedio:"https://amrutveni.sgp1.cdn.digitaloceanspaces.com/amrutveni_production/blog/Hamsa_Thumb_6e6b56b8.webm",
  },
  {
    id: 1,
    name: "After childbirth took a toll on her hair, Amruthveni brought bhuvanesvari hope.",
    description: "After postpartum hair loss, Amrutveni gave her hope and hair health...",
    vedio:"https://amrutveni.sgp1.cdn.digitaloceanspaces.com/amrutveni_production/blog/Hemalatha_G_Thumbnail_999686a4.webm",
  },
]


const Blog = () => {
  const handleMouseEnter = (e) => {
    e.target.play();
  };

  const handleMouseLeave = (e) => {
    e.target.pause();
    e.target.currentTime = 0; 
  };

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
  
      <div className='healthy-hair'>
        <h2>Your Ultimate Guide to Healthy Hair: Expert Advice & Innovations</h2>
      </div>
      <div className="blog-cards">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <video
              className="blog-video"
              src={blog.vedio}
              muted
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Your browser does not support the video tag.
            </video>
            <div className="blog-content">
              <h2 className="blog-heading">{blog.name}</h2>
              <p className="blog-description">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
