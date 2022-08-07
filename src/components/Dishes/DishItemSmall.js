import React, { useContext } from 'react';
import './DishItemSmall.css';

//Context
import { SetOrder } from '../../context/SetToggleCart';

//Redux
import { connect } from 'react-redux';
import { getDishById } from '../../actions/dish';

const DishItemSmall = ({ dish: { _id, name, image, description, price }, getDishById }) => {
    const { createOrder, changeCreateOrder } = useContext(SetOrder);
    const clickOnItem = () => {
        changeCreateOrder(!createOrder);
        console.log(createOrder);
        getDishById(_id);
    };
    return (
        <div className='dish-card-small' onClick={clickOnItem}>
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

export default connect(null, { getDishById })(DishItemSmall);