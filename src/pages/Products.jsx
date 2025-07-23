// import React from 'react';
// import './Products.css'
// import Navbar from '../components/Navbar';
// import './ProductDetails.css'

// const product = [
//   {
//     id: 1,
//     image:
//       "https://amrutveni.com/_next/image?url=https%3A%2F%2Famrutveni.sgp1.cdn.digitaloceanspaces.com%2Famrutveni_production%2Fmedia%2FLiceQit__Necar_Junior_copy_035c69ab.jpg&w=1080&q=75",
//     Productname: "LiceQit + Hair Cleansing Nectar Junior",
//     price: "Rs:325.00",
//     tag: "The Perfect Duo for Lice-Free Hair",
//   },
//   {
//     id: 2,
//     image:
//       "https://amrutveni.com/_next/image?url=https%3A%2F%2Famrutveni.sgp1.cdn.digitaloceanspaces.com%2Famrutveni_production%2Fmedia%2FLiceQit_50ml_71eaef54.jpg&w=1080&q=75",
//     Productname: "LiceQit",
//     price: "Rs:145.00",
//     tag: "Healthy,itch-Free Scalp",
//   },
//   {
//     id: 3,
//     image:
//       "https://amrutveni.com/_next/image?url=https%3A%2F%2Famrutveni.sgp1.cdn.digitaloceanspaces.com%2Famrutveni_production%2Fmedia%2FWOMEN_100ml_24b65119.jpg&w=1080&q=75",
//     Productname: "Hair Elixir Women",
//     price: "Rs:880.00",
//     tag: "Control Hair fall-Exclusively for women",
//   },
//   {
//     id: 4,
//     image:
//       "https://amrutveni.com/_next/image?url=https%3A%2F%2Famrutveni.sgp1.cdn.digitaloceanspaces.com%2Famrutveni_production%2Fmedia%2FNectar_junior_50ml_414f2178.jpg&w=1080&q=75",
//     Productname: " Hair Cleansing Nectar Junior",
//     price: "Rs:180.00",
//     tag: "Gentle care for tender scalps",
//   },
//   {
//     id: 5,
//     image:
//       "https://amrutveni.com/_next/image?url=https%3A%2F%2Famrutveni.sgp1.cdn.digitaloceanspaces.com%2Famrutveni_production%2Fmedia%2FDandroQit_-_04_40378c44.jpg&w=640&q=75",
//     Productname: " Amrutveni DandroQit",
//     price: "Rs:210.00",
//     tag: "Dandruff control oil for healthy hair",
//   },
//   {
//     id: 6,
//     image:
//       "https://amrutveni.com/_next/image?url=https%3A%2F%2Famrutveni.sgp1.cdn.digitaloceanspaces.com%2Famrutveni_production%2Fmedia%2FMEN_50ml_3ef562c5.jpg&w=640&q=75",
//     Productname: " Amrutveni Hair Elixir Men 50 ML",
//     price: "Rs:460.00",
//     tag: "Control Hair fall - Exclusively for men",
//   },
// ];


// const Products = () => {
//   return (
//     <div>
//         <Navbar/>
//       <div className='categories'>
//         <ul>
//             <li>All</li>
//             <li>Men</li>
//             <li>Women</li>
//             <li>LiceQit</li>
//         </ul>
//       </div>
//  <div className="product-container">
//       {product.map((product) => (
//         <div className="product-card" key={product.id}>
//           <img className="product-image" src={product.image} alt={product.Productname} />
//           <h3 className="product-name">{product.Productname}</h3>
//           <p className="product-tag">{product.tag}</p>
//           <p className="product-price">{product.price}</p>
//           <button className="buy-btn">ADD TO CART</button>
//         </div>
//       ))}
//     </div>   
//      </div>
//   );
// }

// export default Products;
import React, { useState } from 'react';
import './Products.css';
import Navbar from '../components/Navbar';
import './ProductDetails.css';

const allProducts = [
  {
    id: 1,
    category: "LiceQit",
    image: "https://amrutveni.com/_next/image?url=https%3A%2F%2Famrutveni.sgp1.cdn.digitaloceanspaces.com%2Famrutveni_production%2Fmedia%2FLiceQit__Necar_Junior_copy_035c69ab.jpg&w=1080&q=75",
    Productname: "LiceQit + Hair Cleansing Nectar Junior",
    price: "Rs:325.00",
    tag: "The Perfect Duo for Lice-Free Hair",
  },
  {
    id: 2,
    category: "LiceQit",
    image: "https://amrutveni.com/_next/image?url=https%3A%2F%2Famrutveni.sgp1.cdn.digitaloceanspaces.com%2Famrutveni_production%2Fmedia%2FLiceQit_50ml_71eaef54.jpg&w=1080&q=75",
    Productname: "LiceQit",
    price: "Rs:145.00",
    tag: "Healthy, itch-Free Scalp",
  },
  {
    id: 3,
    category: "Women",
    image: "https://amrutveni.com/_next/image?url=https%3A%2F%2Famrutveni.sgp1.cdn.digitaloceanspaces.com%2Famrutveni_production%2Fmedia%2FWOMEN_100ml_24b65119.jpg&w=1080&q=75",
    Productname: "Hair Elixir Women",
    price: "Rs:880.00",
    tag: "Control Hair fall - Exclusively for women",
  },
  {
    id: 4,
    category: "LiceQit",
    image: "https://amrutveni.com/_next/image?url=https%3A%2F%2Famrutveni.sgp1.cdn.digitaloceanspaces.com%2Famrutveni_production%2Fmedia%2FNectar_junior_50ml_414f2178.jpg&w=1080&q=75",
    Productname: "Hair Cleansing Nectar Junior",
    price: "Rs:180.00",
    tag: "Gentle care for tender scalps",
  },
  {
    id: 5,
    category: "LiceQit",
    image: "https://amrutveni.com/_next/image?url=https%3A%2F%2Famrutveni.sgp1.cdn.digitaloceanspaces.com%2Famrutveni_production%2Fmedia%2FDandroQit_-_04_40378c44.jpg&w=640&q=75",
    Productname: "Amrutveni DandroQit",
    price: "Rs:210.00",
    tag: "Dandruff control oil for healthy hair",
  },
  {
    id: 6,
    category: "Men",
    image: "https://amrutveni.com/_next/image?url=https%3A%2F%2Famrutveni.sgp1.cdn.digitaloceanspaces.com%2Famrutveni_production%2Fmedia%2FMEN_50ml_3ef562c5.jpg&w=640&q=75",
    Productname: "Amrutveni Hair Elixir Men 50 ML",
    price: "Rs:460.00",
    tag: "Control Hair fall - Exclusively for men",
  },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  return (
    <div>
      <Navbar />
      <div className="categories">
        <ul>
          <li onClick={() => setSelectedCategory("All")}>All</li>
          <li onClick={() => setSelectedCategory("Men")}>Men</li>
          <li onClick={() => setSelectedCategory("Women")}>Women</li>
          <li onClick={() => setSelectedCategory("LiceQit")}>LiceQit</li>
        </ul>
      </div>

      <div className="product-container">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img className="product-image" src={product.image} alt={product.Productname} />
            <h3 className="product-name">{product.Productname}</h3>
            <p className="product-tag">{product.tag}</p>
            <p className="product-price">{product.price}</p>
            <button className="buy-btn">ADD TO CART</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
