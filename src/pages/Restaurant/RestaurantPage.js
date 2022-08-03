import React, { useEffect } from 'react';
import './RestaurantPage.css';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Redux
import { getRestaurantById } from '../../actions/restaurant';
import { getAllDishes } from '../../actions/dish';

//Component
import Spinner from '../../components/layout/Spinner';
// import DishItem from '../../components/Dishes/DishItem';
import DishItemSmall from '../../components/Dishes/DishItemSmall';

const RestaurantPage = ({ getRestaurantById, getAllDishes, restaurant, dish }) => {
    const { id } = useParams();
    useEffect(() => {
        getRestaurantById(id);
        getAllDishes();
    }, [getRestaurantById, getAllDishes, id]);
    return (
        <React.Fragment>
            {restaurant.restaurant === null || restaurant.loading ? (
                <div className='spinner'>
                    <Spinner />
                </div>) : (
                <div className='container-page'>
                    <img className='cover-photo' src={restaurant.restaurant.image} alt={restaurant.restaurant.image} />
                    <div className='rest-name'>{restaurant.restaurant.name}</div>
                    <div className='rest-chef-name'>{restaurant.restaurant.chef.name}</div>
                    <div className='open-now'>
                        <div>
                            <img className='open-now-icon' src={require('../../assert/images/Open.png')} alt="open-now-icon" />
                        </div>
                        <div className='open-now-text'>Open now</div>
                    </div>
                    <div className='category'>
                        <div className='category-content'>
                            <div className='breakfast-category'>Breakfast</div>
                            <div className='lanch-category'>Lanch</div>
                            <div className='dinner-category'>Dinner</div>
                        </div>
                        <div className='line'></div>
                        {/* <div className='line' style={{ 'marginLeft': '250px' }}></div> */}
                    </div>
                    <div className='display-dishes'>
                        {dish.dishes.filter(dish => dish.restaurant === id).map(dish => (
                            <DishItemSmall key={dish._id} dish={dish} />
                        ))}
                    </div>
                </div>
            )}

        </React.Fragment>

    )
};

RestaurantPage.propTypes = {
    getRestaurantById: PropTypes.func.isRequired,
    getAllDishes: PropTypes.func.isRequired,
    restaurant: PropTypes.object.isRequired,
    dish: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    restaurant: state.restaurant,
    dish: state.dish
})

export default connect(mapStateToProps, { getRestaurantById, getAllDishes })(RestaurantPage);