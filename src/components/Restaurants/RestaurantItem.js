import React from 'react';
import './RestaurantItem.css';
const RestaurantItem = ({ restaurant: { _id, name, image, chef, rating } }) => {
    return (
        <div className='restaurant-form'>
            <img className='rest-image' src={image} alt={image} />
            <div className='rest-info-card'>
                <div className='info'>
                    <div className='name-restaurant'>{name}</div>
                    <div className='name-chef'>{chef.name}</div>
                </div>
                <div className='rating-form'>
                    {/* <img className='rating' src={require('../../assert/images/Star.png')} alt="star" /> */}
                </div>
            </div>
        </div>
    )
};

export default RestaurantItem;