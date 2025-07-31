import React from 'react';
import Navbar from '../components/Navbar';import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import './Home.css'
import { Link } from 'react-router-dom';

const allProducts = [
  {
    id: 1,
    category: "LiceQit",
    image:
      "https://amrutveni.com/_next/image?url=https%3A%2F%2Famrutveni.sgp1.cdn.digitaloceanspaces.com%2Famrutveni_production%2Fmedia%2FLiceQit__Necar_Junior_copy_035c69ab.jpg&w=1080&q=75",
    Productname: "LiceQit + Hair Cleansing Nectar Junior",
    price: "Rs:325.00",
    tag: "The Perfect Duo for Lice-Free Hair",
  },
  {
    id: 2,
    category: "LiceQit",
    image:
      "https://amrutveni.com/_next/image?url=https%3A%2F%2Famrutveni.sgp1.cdn.digitaloceanspaces.com%2Famrutveni_production%2Fmedia%2FLiceQit_50ml_71eaef54.jpg&w=1080&q=75",
    Productname: "LiceQit",
    price: "Rs:145.00",
    tag: "Healthy, itch-Free Scalp",
  },
  {
    id: 3,
    category: "Women",
    image:
      "https://amrutveni.com/_next/image?url=https%3A%2F%2Famrutveni.sgp1.cdn.digitaloceanspaces.com%2Famrutveni_production%2Fmedia%2FWOMEN_100ml_24b65119.jpg&w=1080&q=75",
    Productname: "Hair Elixir Women",
    price: "Rs:880.00",
    tag: "Control Hair fall - Exclusively for women",
  },
  {
    id: 4,
    category: "LiceQit",
    image:
      "https://amrutveni.com/_next/image?url=https%3A%2F%2Famrutveni.sgp1.cdn.digitaloceanspaces.com%2Famrutveni_production%2Fmedia%2FNectar_junior_50ml_414f2178.jpg&w=1080&q=75",
    Productname: "Hair Cleansing Nectar Junior",
    price: "Rs:180.00",
    tag: "Gentle care for tender scalps",
  },
  {
    id: 5,
    category: "LiceQit",
    image:
      "https://amrutveni.com/_next/image?url=https%3A%2F%2Famrutveni.sgp1.cdn.digitaloceanspaces.com%2Famrutveni_production%2Fmedia%2FDandroQit_-_04_40378c44.jpg&w=640&q=75",
    Productname: "Amrutveni DandroQit",
    price: "Rs:210.00",
    tag: "Dandruff control oil for healthy hair",
  },
  {
    id: 6,
    category: "Men",
    image:
      "https://amrutveni.com/_next/image?url=https%3A%2F%2Famrutveni.sgp1.cdn.digitaloceanspaces.com%2Famrutveni_production%2Fmedia%2FMEN_50ml_3ef562c5.jpg&w=640&q=75",
    Productname: "Amrutveni Hair Elixir Men 50 ML",
    price: "Rs:460.00",
    tag: "Control Hair fall - Exclusively for men",
  },
];


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
        <div className="product-list">
    {allProducts.map((product) => (
      <div key={product.id} className="product-card">
        <img src={product.image} alt={product.Productname} />
        <h3>{product.Productname}</h3>
        <p>{product.price}</p>
        <Link to={`/product/${product.id}`} className="details-btn">
          View Details
        </Link>
      </div>
    ))}
  </div>
      </div>


    </div>
  );
}

export default Home;
