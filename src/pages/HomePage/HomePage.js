import React, { useEffect, useContext } from 'react';
import './HomePage.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Redux
import { getTopRestaurants, getAllRestaurants } from '../../actions/restaurant';
import { getTopDishes } from '../../actions/dish';
import { getAllChefs } from '../../actions/chef';

//Context
import { SetOrder } from '../../context/SetToggleCart';

//Component
import Box from '../../components/Box/Box';
import RestaurantItem from '../../components/Restaurants/RestaurantItem';
import DishItem from '../../components/Dishes/DishItem';
import Spinner from '../../components/layout/Spinner';
import Icons from '../../components/Icons/Icons';
import ChefOfTheWeek from '../../components/ChefOfTheWeek/ChefOfTheWeek';
import Orders from '../../components/Orders/Orders';


const HomePage = ({ getTopRestaurants, getTopDishes, getAllRestaurants,
  getAllChefs, restaurant: { restaurants, top_restaurants, loading_r }, dish: { top_dishes, loading_d }, chef: { chefs, loading_c } }) => {
    const { toggleOrder } = useContext(SetOrder);
  useEffect(() => {
    getTopRestaurants();
    getTopDishes();
    getAllChefs();
    getAllRestaurants();
  }, [getTopRestaurants, getTopDishes, getAllChefs, getAllRestaurants]);
  return (
    <div>
      {toggleOrder && <Orders />}
      <img className='hero-picture' src={require('../../assert/images/hero-picture 1.png')} alt='logo-search' />
      <Box />
      <div className='frame-146'>
        <div className='popular-rest'>
          <div className='title-pop-rest'>Popular restaurant in epicure:</div>
          <div className='pop-rest-form'>
            <div className='pop-rest'>
              {loading_r ? (<div className='spinner'>
                <Spinner />
              </div>
              ) : (
                top_restaurants.map(restaurant => (
                  <RestaurantItem key={restaurant._id} restaurant={restaurant} />
                ))
              )}

            </div>
            <div className='all-rest'>
              <div className='all-rest-btn' onClick={() => { window.location.href = '/restaurants' }}>All Restaurants </div>
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
        <div className='frame-145'>
          {loading_c ? (<div className='spinner'>
            <Spinner />
          </div>
          ) : (
            <ChefOfTheWeek key={chefs[0]._id} chef={chefs[0]} restaurants={restaurants} />
          )}
        </div>
        <div className='frame-1'>
          <div className='about'>
            <img className='about-img' src={require('../../assert/images/about-logo@3x 2.png')} alt="about-img" />
            <div className='about-content'>
              <div className='about-content-title'>About us:</div>
              <div className='about-content-body'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros, eget blandit turpis suscipit at. Vestibulum sed massa in magna sodales porta. Vivamus elit urna, dignissim a vestibulum.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no eu ipsum. Cras porta malesuada eros.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

HomePage.propTypes = {
  getTopRestaurants: PropTypes.func.isRequired,
  getTopDishes: PropTypes.func.isRequired,
  getAllChefs: PropTypes.func.isRequired,
  getAllRestaurants: PropTypes.func.isRequired,
  restaurant: PropTypes.object.isRequired,
  dish: PropTypes.object.isRequired,
  chef: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  restaurant: state.restaurant,
  dish: state.dish,
  chef: state.chef
});

export default connect(mapStateToProps, { getTopRestaurants, getTopDishes, getAllChefs, getAllRestaurants })(HomePage);