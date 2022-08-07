import React, { useContext, useState } from 'react';
import './SetNewOrder.css';
import { SetOrder } from '../../context/SetToggleCart';

//Redux
import { connect } from 'react-redux';
import { deleteDishFromState } from '../../actions/dish';
import { finishOrder } from '../../actions/order';
import PropTypes from 'prop-types';

//Component
import Spinner from '../layout/Spinner';

const SetNewOrder = ({ dish, deleteDishFromState, finishOrder }) => {
    const { createOrder, changeCreateOrder } = useContext(SetOrder);
    const exitOrder = () => {
        changeCreateOrder(!createOrder);
        deleteDishFromState();
    };
    const [amount, setAmount] = useState(1);
    const amountClicked = e => setAmount(e);
    const addToBagClicked = () => {
        changeCreateOrder(!createOrder);
        finishOrder(dish);
    }
    return (
        <React.Fragment>
            <div className='exit-icon' onClick={exitOrder}>
                <img className='exit-icon-place' src={require('../../assert/images/Exit.png')} alt="exit" />
            </div>
            <div className='popup-container'>

                {!dish ? <div className='order-spinner'>
                    <Spinner />
                </div> :
                    (<div>
                        <img className='order-img' src={dish.image} alt={dish.image} />
                        <div className='order-info'>
                            <div className='order-details'>
                                <div className='order-details-name'>{dish.name}</div>
                                <div className='order-details-desc'>{dish.description}</div>
                                <div className='order-details-display-price'>
                                    <img src={require('../../assert/images/LineForPrice.png')} alt={dish.price} />
                                    <div className='order-display-price'>₪ {dish.price}</div>
                                    <img src={require('../../assert/images/LineForPrice.png')} alt={dish.price} />
                                </div>
                            </div>
                            <div className='choose-side-1'>
                                <div className='choose-side-1-frame'>
                                    <div className='choose-side-1-text'>Choose a side</div>
                                    <img className='choose-side-1-img' src={require('../../assert/images/line-choose-side.png')} alt="line-choose-side" />
                                </div>
                                <div className='side-1'>
                                    <div className='white-bread'>
                                        <input type="radio" name="White-bread" /> White bread
                                    </div>
                                    <div className='sticky-rice'>
                                        <input type="radio" name="Sticky-rice" /> Sticky rice
                                    </div>
                                </div>
                            </div>
                            <div className='choose-side-1'>
                                <div className='choose-side-1-frame'>
                                    <div className='choose-side-1-text'>Changes</div>
                                    <img className='choose-side-2-img' src={require('../../assert/images/line-choose-side.png')} alt="line-choose-side" />
                                </div>
                                <div className='side-1'>
                                    <div className='white-bread'>
                                        <input type="checkbox" name="White-bread" /> Without peanuts
                                    </div>
                                    <div className='sticky-rice'>
                                        <input type="checkbox" name="Sticky-rice" /> Sticky Less spacy
                                    </div>
                                </div>
                            </div>
                            <div className='choose-side-1'>
                                <div className='choose-side-1-frame'>
                                    <div className='choose-side-1-text'>Quantity</div>
                                    <img className='choose-side-2-img' src={require('../../assert/images/line-choose-side.png')} alt="line-choose-side" />
                                </div>
                                <div className='amount'>
                                    <img style={{ 'cursor': 'pointer' }} src={require('../../assert/images/plus 2.png')} alt="minus" onClick={() => amountClicked(amount - 1)} />
                                    <div className='amount-text'>{amount}</div>
                                    <img style={{ 'cursor': 'pointer' }} src={require('../../assert/images/plus 1.png')} alt="plus" onClick={() => amountClicked(amount + 1)} />
                                </div>
                            </div>
                        </div>
                        <button className='order-button' onClick={addToBagClicked}>Add to bag</button>
                    </div>)}
            </div>
        </React.Fragment>
    )
};

SetNewOrder.propTypes = ({
    deleteDishFromState: PropTypes.func.isRequired,
    finishOrder: PropTypes.func.isRequired,
    dish: PropTypes.object.isRequired,
})

const mapStateToProps = state => ({
    dish: state.dish.dish
});

export default connect(mapStateToProps, { deleteDishFromState, finishOrder })(SetNewOrder);