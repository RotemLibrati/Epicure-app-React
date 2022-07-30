import React from 'react';
import './ChefRestaurantItem.css';

const ChefRestaurantItem = ({ restaurant: { name, image }}) => {
  return (
      <div className='chef-rest-display'>
        <img className='chef-rest-image' src={image} alt={image} />
        <div className='chef-rest-info'>
          <div className='chef-rest-name'>{name}</div>
        </div>
      </div>
  )
};

export default ChefRestaurantItem;