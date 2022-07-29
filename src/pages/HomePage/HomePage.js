import React, { useEffect } from 'react';
import './HomePage.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Redux
import { getTopRestaurants } from '../../actions/restaurant.';
import { getTopDishes } from '../../actions/dish';

//Component
import Box from '../../components/Box/Box';
import RestaurantItem from '../../components/Restaurants/RestaurantItem';
import DishItem from '../../components/Dishes/DishItem';
import Spinner from '../../components/layout/Spinner';
import Icons from '../../components/Icons/Icons';


const HomePage = ({ getTopRestaurants, getTopDishes, restaurant: { top_restaurants, loading }, dish: { top_dishes, loading_d } }) => {
  useEffect(() => {
    getTopRestaurants();
    getTopDishes();
  }, [getTopRestaurants, getTopDishes]);
  return (
    <div>
      <img className='hero-picture' src={require('../../assert/images/hero-picture 1.png')} alt='logo-search' />
      <Box />
      <div className='frame-146'>
        <div className='popular-rest'>
          <div className='title-pop-rest'>Popular restaurant in epicure:</div>
          <div className='pop-rest-form'>
            <div className='pop-rest'>
              {loading ? (<div className='spinner'>
                <Spinner />
              </div>
              ) : (
                top_restaurants.map(restaurant => (
                  <RestaurantItem key={restaurant._id} restaurant={restaurant} />
                ))
              )}

            </div>
            <div className='all-rest'>
              <div className='all-rest-btn' onClick={() => { }}>All Restaurants </div>
              <div className='arrow'>
                {/* <img className='arrow-logo' src={require('../../assert/images/Arrow.png')} alt="arrow logo" /> */}
              </div>
            </div>
          </div>
        </div>
        <div className='dishes'>
          <div className='dishes-title'> Signature dish of: </div>
          <div className='form-dishes'>
              {loading_d ? (<div className='spinner'>
                <Spinner />
              </div>
              ) : (
                top_dishes.map(dish => (
                  <DishItem key={dish._id} dish={dish} />
                ))
              )}
          </div>
        </div>
        <div className='icons'>
          <Icons />
        </div>
      </div>

    </div>
  );
};

HomePage.propTypes = {
  getTopRestaurants: PropTypes.func.isRequired,
  getTopDishes: PropTypes.func.isRequired,
  restaurant: PropTypes.object.isRequired,
  dish: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  restaurant: state.restaurant,
  dish: state.dish
});

export default connect(mapStateToProps, { getTopRestaurants, getTopDishes })(HomePage);