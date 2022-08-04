import React from 'react';
import './DishItem.css';
import { Link } from 'react-router-dom';


const DishItem = ({ dish: {_id, name, image, description, price } }) => {
  return (
    <React.Fragment>
      <Link className='dish-card' to={`/restaurants/dish/${_id}`}>
        <img className='image-dishes' src={image} alt={image} />
        <div className='dish-info-card'>
          <div className='dish-name'>{name}</div>
          <div className='dish-desc'>{description}</div>
          <div className='dish-price'>
            <div className='dish-line2-price'></div>
            <div className='price-form'>
              <div className='price'>₪{price}</div>
            </div>
            <div className='dish-line1-price'></div>
          </div>
        </div>
      </Link>
    </React.Fragment>
  )
};

export default DishItem;