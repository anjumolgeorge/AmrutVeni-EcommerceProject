import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Navbar from "../components/Navbar";
import "swiper/css";
import "swiper/css/effect-fade";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <Navbar />

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
            <h2 style={{ fontWeight: "bold" }}>
              Who we are
              <br />
              <br />
              As pioneers of biotechnologically developed
              <br />
              organic hair care and skin care solutions,
            </h2>
            <h6>
              <b>
                We are set to significantly raise the beauty industry standards!
              </b>
            </h6>
            <br />
            <br />
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
       <div className="about-container">
        <div className="image-container">
         <img className="ceo" src="/assets/ceo.webp" alt="" />
        </div>
      <div>
        <div className="intro">
          <h1>Our Vision</h1>
        </div>
          <br/>
<div className="description">
  <p>
    Our Visionary, Mr. MP Ramachandran is a successful entrepreneur with
    exceptional<br/> business acumen in FMCG for over 40 years. If you are an
    Indian - you must know Jyothy<br/> Lab's - '4 boondon wala', Ujala. Yes,
    you guessed it right - Mr. MP Ramachandran is the <br/>founder of the
    venture.
  </p>

  <p>
    One day, years ago Mr. MPR (as fondly known) had a brilliant
    epiphany. This was during one<br/> of his regular meetings with groups
    and communities that explored personal care. He <br/>realised Hair and
    Skin conscience (and concerns) in everyone has only multiplied over
    the <br/>years, no matter the age range. Yes, everyone wants to look good
    more so than ever!
  </p>

  <p>
    Since then Mr. MPR went on a mission to find innovative and
    effective results-based <br/>solutions. For this, he deployed one of the
    best Research teams to incorporate Science with<br/> Nature resulting in
    the most effective natural concoctions for personal care.
  </p>

  <p>Who doesn't love products backed by science!</p>

  <p>
    That is how the Universe of Sahyadri Bio Labs birthed our
    biotechnology based
    <b>
      Hair care <br/>Star - Amrutveni and please note on our Skin care Star -
      The D Wave - initiated by Ms. Deepthi MPR!
    </b>
  </p>
  <br/><br/>
</div>
      </div>
      </div>
    </div>
  );
};

export default About;
