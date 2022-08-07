import React from 'react';
import './RestaurantItem.css';
import { Link } from 'react-router-dom';
const RestaurantItem = ({ restaurant: { _id, name, image, chef, rating } }) => {
    return (
        <Link className='restaurant-form' to={`/restaurants/${_id}`}>
            <img className='rest-image' src={require('../../assert/images/Chefs/asaf.png')} alt={image} />
            <div className='rest-info-card'>
                <div className='info'>
                    <div className='name-restaurant'>{name}</div>
                    <div className='rest-name-chef'>{chef.name}</div>
                </div>
                <div className='rating-form'>
                    {rating === 1 && (
                        <React.Fragment>
                            <img className='rating' src={require('../../assert/images/Star.png')} alt="star" />
                            <img className='rating' src={require('../../assert/images/Star2.png')} alt="star" />
                            <img className='rating' src={require('../../assert/images/Star2.png')} alt="star" />
                            <img className='rating' src={require('../../assert/images/Star2.png')} alt="star" />
                            <img className='rating' src={require('../../assert/images/Star2.png')} alt="star" />
                        </React.Fragment>
                    )}
                    {rating === 2 && (
                        <React.Fragment>
                            <img className='rating' src={require('../../assert/images/Star.png')} alt="star" />
                            <img className='rating' src={require('../../assert/images/Star.png')} alt="star" />
                            <img className='rating' src={require('../../assert/images/Star2.png')} alt="star" />
                            <img className='rating' src={require('../../assert/images/Star2.png')} alt="star" />
                            <img className='rating' src={require('../../assert/images/Star2.png')} alt="star" />
                        </React.Fragment>
                    )}
                    {rating === 3 && (
                        <React.Fragment>
                            <img className='rating' src={require('../../assert/images/Star.png')} alt="star" />
                            <img className='rating' src={require('../../assert/images/Star.png')} alt="star" />
                            <img className='rating' src={require('../../assert/images/Star.png')} alt="star" />
                            <img className='rating' src={require('../../assert/images/Star2.png')} alt="star" />
                            <img className='rating' src={require('../../assert/images/Star2.png')} alt="star" />
                        </React.Fragment>
                    )}
                    {rating === 4 && (
                        <React.Fragment>
                            <img className='rating' src={require('../../assert/images/Star.png')} alt="star" />
                            <img className='rating' src={require('../../assert/images/Star.png')} alt="star" />
                            <img className='rating' src={require('../../assert/images/Star.png')} alt="star" />
                            <img className='rating' src={require('../../assert/images/Star.png')} alt="star" />
                            <img className='rating' src={require('../../assert/images/Star2.png')} alt="star" />
                        </React.Fragment>
                    )}
                    {rating === 5 && (
                        <React.Fragment>
                            <img className='rating' src={require('../../assert/images/Star.png')} alt="star" />
                            <img className='rating' src={require('../../assert/images/Star.png')} alt="star" />
                            <img className='rating' src={require('../../assert/images/Star.png')} alt="star" />
                            <img className='rating' src={require('../../assert/images/Star.png')} alt="star" />
                            <img className='rating' src={require('../../assert/images/Star.png')} alt="star" />
                        </React.Fragment>
                    )}
                </div>
            </div>
        </Link>
    )
};

export default RestaurantItem;