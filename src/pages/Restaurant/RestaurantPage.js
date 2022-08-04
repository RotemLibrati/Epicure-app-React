import React, { useEffect, useState } from 'react';
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
    const [params, setParams] = useState({
        breakfast: true,
        lanch: false,
        dinner: false
    });
    const onClickParams = e => setParams({
        breakfast: e.target.name === 'breakfast' ? true : false,
        lanch: e.target.name === 'lanch' ? true : false,
        dinner: e.target.name === 'dinner' ? true : false,
    });
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
                            <button name='breakfast' className='breakfast-category' onClick={e => onClickParams(e)}>Breakfast</button>
                            <button name='lanch' className='lanch-category' onClick={e => onClickParams(e)}>Lanch</button>
                            <button name='dinner' className='dinner-category' onClick={e => onClickParams(e)}>Dinner</button>
                        </div>
                        {params.breakfast === true ? (<div className='line' style={{ 'marginLeft': '10px' }}></div>) : params.lanch === true ? (
                            <div className='line' style={{ 'marginLeft': '150px' }}></div>
                        ) : (
                            <div className='line' style={{ 'marginLeft': '270px' }}></div>
                        )}
                    </div>
                    <div className='display-dishes'>
                        {params.breakfast === true ? dish.dishes.filter(dish => dish.restaurant === id && dish.type.includes("breakfast")).map(dish => (
                            <DishItemSmall key={dish._id} dish={dish} />
                            // console.log(dish)
                        )) : params.lanch === true ? dish.dishes.filter(dish => dish.restaurant === id && dish.type.includes("lanch")).map(dish => (
                            <DishItemSmall key={dish._id} dish={dish} />)) : (
                            dish.dishes.filter(dish => dish.restaurant === id && dish.type.includes("dinner")).map(dish => (
                                <DishItemSmall key={dish._id} dish={dish} />
                            )))}
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