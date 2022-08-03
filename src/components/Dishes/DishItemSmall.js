import React from 'react';
import './DishItemSmall.css';
const DishItemSmall = ({ dish: { name, image, description, price } }) => {
    return (
        <div className='dish-card-small'>
            <img className='dish-small-img' src={image} alt={image} />
            <div className='dish-card-small-info'>
                <div className='dish-small-name'>{name}</div>
                <div className='dish-small-desc'>{description}</div>
                <div className='dish-small-price-card'>
                    <div className='line-left'/>
                    <div className='dish-small-price'>
                        <div className='dish-small-price-text'>₪{price}</div>
                    </div>
                    <div className='line-right' />
                </div>
            </div>
        </div>
    )
};

export default DishItemSmall;