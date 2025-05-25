import React from 'react';
import './ProductCard.css';

/**
 * ProductCard component displays product information.
 * To customize the card, you can change the props passed to it.
 *
 * @param {object} props - The properties for the product card.
 * @param {string} props.image - URL of the product image.
 *                                To change the image, pass a different URL string here.
 * @param {string} props.name - Name of the product.
 *                              To change the product name, pass a different string here.
 * @param {string} props.price - Price of the product.
 *                               To change the price, pass a different string (e.g., "$29.99") here.
 * @param {string} props.description - A short description of the product.
 *                                     To change the description, pass a different string here.
 */
const ProductCard = ({ image, name, price, description }) => {
  return (
    <div className="product-card">
      {/* To change the image, modify the 'image' prop passed to this component. */}
      <img src={image} alt={name} className="product-image" />

      {/* To change the product name, modify the 'name' prop. */}
      <h2 className="product-name">{name}</h2>

      {/* To change the product price, modify the 'price' prop. */}
      <p className="product-price">{price}</p>

      {/* To change the product description, modify the 'description' prop. */}
      <p className="product-description">{description}</p>
    </div>
  );
};

export default ProductCard;
