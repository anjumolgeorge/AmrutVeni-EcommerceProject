import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useCart } from "../components/CartContext";

const allProducts = [
  {
    id: 1,
    image:
      "https://amrutveni.com/_next/image?url=https%3A%2F%2Famrutveni.sgp1.cdn.digitaloceanspaces.com%2Famrutveni_production%2Fmedia%2FLiceQit__Necar_Junior_copy_035c69ab.jpg&w=1080&q=75",
    Productname: "LiceQit + Hair Cleansing Nectar Junior",
    price: "Rs:325.00",
    tag: "The Perfect Duo for Lice-Free Hair",
    description:
      "This product gently cleanses and nourishes the scalp while eliminating lice effectively. Ideal for kids and sensitive scalps.",
  },
  {
    id: 2,
    image:
      "https://amrutveni.com/_next/image?url=https%3A%2F%2Famrutveni.sgp1.cdn.digitaloceanspaces.com%2Famrutveni_production%2Fmedia%2FLiceQit_50ml_71eaef54.jpg&w=1080&q=75",
    Productname: "LiceQit",
    price: "Rs:145.00",
    tag: "Healthy,itch-Free Scalp",
    description:
      "LiceQit is a herbal formula designed to remove lice and soothe itchy scalps without harsh chemicals.",
  },
  {
    id: 3,
    image:
      "https://amrutveni.com/_next/image?url=https%3A%2F%2Famrutveni.sgp1.cdn.digitaloceanspaces.com%2Famrutveni_production%2Fmedia%2FWOMEN_100ml_24b65119.jpg&w=1080&q=75",
    Productname: "Hair Elixir Women",
    price: "Rs:880.00",
    tag: "Control Hair fall-Exclusively for women",
    description:
      "Specifically formulated for women, this elixir strengthens roots, reduces hair fall, and promotes healthy growth.",
  },
  {
    id: 4,
    image:
      "https://amrutveni.com/_next/image?url=https%3A%2F%2Famrutveni.sgp1.cdn.digitaloceanspaces.com%2Famrutveni_production%2Fmedia%2FNectar_junior_50ml_414f2178.jpg&w=1080&q=75",
    Productname: "Hair Cleansing Nectar Junior",
    price: "Rs:180.00",
    tag: "Gentle care for tender scalps",
    description:
      "A mild herbal shampoo made for kids, ensuring gentle cleansing and healthy scalp maintenance.",
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

const ProductDetails = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  const [showAlert, setShowAlert] = useState(false); // 🔔 New

  const handleAddToCart = () => {
    addToCart(product);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000); // Auto hide after 2 seconds
  };

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="detail-container">
      <img
        className="detail-image"
        src={product.image}
        alt={product.Productname}
      />
      <div className="detail-info">
        <h2>{product.Productname}</h2>
        <p className="tagline">{product.tag}</p>
        <h3>{product.price}</h3>
        <p>{product.description}</p>

        {/* Show Alert */}
        {showAlert && (
          <div className="alert-message">✅ Item added to cart!</div>
        )}

        <button className="buy-btn" onClick={handleAddToCart}>
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
