import React from 'react';
import './ChefOfTheWeek.css';

import ChefRestaurantItem from '../Restaurants/ChefRestaurantItem';

const ChefOfTheWeek = ({ chef: { _id, name, image, description }, restaurants }) => {
  return (
    <React.Fragment>
      <div className='chef-of-the-week'>
        <div className='chef-title'>Chef of the week:</div>
        <div className='chef-frame'>
          <div className='chef-desc'>{description}</div>
          <div className='chef-info'>
            <div className='chef-details'>
              <div className='chef-name'>{name}</div>
              <img className='chef-image' src={image} alt={image} />
            </div>
          </div>
        </div>
      </div>
      <div className='chef-of-the-week-rest'>
        <div className='belong-rest'>{name.split(' ')[0]}'s Restaurants</div>
        <div className='chef-restaurants'>
          {restaurants.filter(restaurant => _id === restaurant.chef._id).slice(0, 3).map(
            restaurant => _id === restaurant.chef._id && (
              <ChefRestaurantItem restaurant={restaurant} />
            ))}
        </div>
      </div>
    </React.Fragment>
  )
};
export default ChefOfTheWeek;
