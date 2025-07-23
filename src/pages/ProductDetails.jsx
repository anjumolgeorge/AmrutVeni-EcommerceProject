import React from "react";
import "./ProductDetails.css";

const products = [
  {
    id: 1,
    image:
      "https://amrutveni.com/_next/image?url=https%3A%2F%2Famrutveni.sgp1.cdn.digitaloceanspaces.com%2Famrutveni_production%2Fmedia%2FLiceQit__Necar_Junior_copy_035c69ab.jpg&w=1080&q=75",
    Productname: "LiceQit + Hair Cleansing Nectar Junior",
    price: "Rs:325.00",
    tag: "The Perfect Duo for Lice-Free Hair",
  },
  {
    id: 2,
    image:
      "https://amrutveni.com/_next/image?url=https%3A%2F%2Famrutveni.sgp1.cdn.digitaloceanspaces.com%2Famrutveni_production%2Fmedia%2FLiceQit_50ml_71eaef54.jpg&w=1080&q=75",
    Productname: "LiceQit",
    price: "Rs:145.00",
    tag: "Healthy,itch-Free Scalp",
  },
  {
    id: 3,
    image:
      "https://amrutveni.com/_next/image?url=https%3A%2F%2Famrutveni.sgp1.cdn.digitaloceanspaces.com%2Famrutveni_production%2Fmedia%2FWOMEN_100ml_24b65119.jpg&w=1080&q=75",
    Productname: "Hair Elixir Women",
    price: "Rs:880.00",
    tag: "Control Hair fall-Exclusively for women",
  },
  {
    id: 4,
    image:
      "https://amrutveni.com/_next/image?url=https%3A%2F%2Famrutveni.sgp1.cdn.digitaloceanspaces.com%2Famrutveni_production%2Fmedia%2FNectar_junior_50ml_414f2178.jpg&w=1080&q=75",
    Productname: " Hair Cleansing Nectar Junior",
    price: "Rs:180.00",
    tag: "Gentle care for tender scalps",
  },
];

const ProductDetails = () => {
  return (
    <div className="product-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img className="product-image" src={product.image} alt={product.Productname} />
          <h3 className="product-name">{product.Productname}</h3>
          <p className="product-tag">{product.tag}</p>
          <p className="product-price">{product.price}</p>
          <button className="buy-btn">ADD TO CART</button>
        </div>
      ))}

      <div className="button">
        <button className="viewall">View All</button>
      </div>
    </div>
  );
};

export default ProductDetails;
