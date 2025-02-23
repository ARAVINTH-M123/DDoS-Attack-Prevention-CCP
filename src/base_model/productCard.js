import React from 'react'
import './productCard.css';

const ProductCard = ({ imgSrc, name, desc }) => {
  return (
    <div className='product-card'>
        <div className='product-img' style={{ backgroundImage: `url(${imgSrc})` }}></div>
        <span className='product-name'>{name}</span>
        <span className='product-desc'>{desc}</span>
        <div className='btns'>
           <button className='buy-btn'>Buy</button>
           <button className='cart-btn'>Add to cart</button>
        </div>
    </div>
  );
}

export default ProductCard;