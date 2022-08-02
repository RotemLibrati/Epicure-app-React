import React, { useState } from 'react';
import './Restaurants.css';

//Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Component
import RestaurantItem from '../../components/Restaurants/RestaurantItem';
const Restaurants = ({ restaurant: { restaurants } }) => {
    const [params, setParams] = useState({
        all: true,
        new: false,
        mostPopular: false,
        openNow: false,
        mapView: false
    });
    const [toggle, setToggle] = useState({
        rating: false,
        distance: false,
        price: false,
    });
    const [checkbox, setCheckbox ] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false
    });
    const onChange = e => setParams({
        all: false,
        new: false,
        mostPopular: false,
        openNow: false,
        mapView: false,
        [e.target.name]: true
    });
    const getDifferenceInDays = (date) => {
        return ((new Date() - new Date(date)) / (1000 * 60 * 60 * 24));
    }
    const onChangeToggle = (e) => setToggle({
        rating: false,
        distance: false,
        price: false,
        [e.target.name]: !toggle[e.target.name]
    });
    // const [toggleRating, setToggleRating] = useState(false);
    const onChangeCheckbox = e => setCheckbox({
        1: e.target.name === '1' ? !checkbox[1] : checkbox[1] ,
        2: e.target.name === '2' ? !checkbox[2] : checkbox[2] ,
        3: e.target.name === '3' ? !checkbox[3] : checkbox[3] ,
        4: e.target.name === '4' ? !checkbox[4] : checkbox[4] ,
        5: e.target.name === '5' ? !checkbox[5] : checkbox[5] 
    });
    return (
        <React.Fragment>
            <div className='frame-147'>
                <div className='links'>
                    <div className='links-content'>
                        <button style={{ 'fontWeight': params.all === true ? 'bold' : 'normal' }} name='all' className='link-all' onClick={e => onChange(e)}>All</button>
                        <button style={{ 'fontWeight': params.new === true ? 'bold' : 'normal' }} name='new' className='link-new' onClick={e => onChange(e)}>New</button>
                        <button style={{ 'fontWeight': params.mostPopular === true ? 'bold' : 'normal' }} name='mostPopular' className='link-most-popular' onClick={e => onChange(e)}>Most Popular</button>
                        <button style={{ 'fontWeight': params.openNow === true ? 'bold' : 'normal' }} name='openNow' className='link-open-now' onClick={e => onChange(e)}>Open Now</button>
                        <button style={{ 'fontWeight': params.mapView === true ? 'bold' : 'normal' }} name='mapView' className='link-map-view' onClick={e => onChange(e)}>Map View</button>
                    </div>
                </div>
                <div className='frame-218'>
                    <div className='group-181'>
                        <div className='params'>
                            <div className='rat-param'>
                                <div className='rat'>
                                    <text className='rat-text'>Rating</text>
                                    <div className='rat-icon'>
                                        <img name="rating" onClick={e => onChangeToggle(e)} className='icon-arrow' src={require('../../assert/images/Vector.png')} alt="icon-arrow" />
                                        {toggle.rating && (<div className='display-rating'>
                                            <div className='group-190'>
                                                <div>Rating</div>
                                                <div className='group-185'>
                                                    <input name='1' type="checkbox" className='rating-btn' onClick={e => onChangeCheckbox(e)}/>
                                                    <div className='group-184'>
                                                        <img src={require('../../assert/images/Star.png')} alt="star" />
                                                        <img src={require('../../assert/images/Star2.png')} alt="star" />
                                                        <img src={require('../../assert/images/Star2.png')} alt="star" />
                                                        <img src={require('../../assert/images/Star2.png')} alt="star" />
                                                        <img src={require('../../assert/images/Star2.png')} alt="star" />
                                                    </div>
                                                </div>
                                                <div className='group-185'>
                                                    <input name='2' type="checkbox" className='rating-btn' onClick={e => onChangeCheckbox(e)}/>
                                                    <div className='group-184'>
                                                        <img src={require('../../assert/images/Star.png')} alt="star" />
                                                        <img src={require('../../assert/images/Star.png')} alt="star" />
                                                        <img src={require('../../assert/images/Star2.png')} alt="star" />
                                                        <img src={require('../../assert/images/Star2.png')} alt="star" />
                                                        <img src={require('../../assert/images/Star2.png')} alt="star" />
                                                    </div>
                                                </div>
                                                <div className='group-185'>
                                                    <input name='3' type="checkbox" className='rating-btn' onClick={e => onChangeCheckbox(e)}/>
                                                    <div className='group-184'>
                                                        <img src={require('../../assert/images/Star.png')} alt="star" />
                                                        <img src={require('../../assert/images/Star.png')} alt="star" />
                                                        <img src={require('../../assert/images/Star.png')} alt="star" />
                                                        <img src={require('../../assert/images/Star2.png')} alt="star" />
                                                        <img src={require('../../assert/images/Star2.png')} alt="star" />
                                                    </div>
                                                </div>
                                                <div className='group-185'>
                                                    <input name='4' type="checkbox" className='rating-btn' onClick={e => onChangeCheckbox(e)}/>
                                                    <div className='group-184'>
                                                        <img src={require('../../assert/images/Star.png')} alt="star" />
                                                        <img src={require('../../assert/images/Star.png')} alt="star" />
                                                        <img src={require('../../assert/images/Star.png')} alt="star" />
                                                        <img src={require('../../assert/images/Star.png')} alt="star" />
                                                        <img src={require('../../assert/images/Star2.png')} alt="star" />
                                                    </div>
                                                </div>
                                                <div className='group-185'>
                                                    <input name='5' type="checkbox" className='rating-btn' onClick={e => onChangeCheckbox(e)}/>
                                                    <div className='group-184'>
                                                        <img src={require('../../assert/images/Star.png')} alt="star" />
                                                        <img src={require('../../assert/images/Star.png')} alt="star" />
                                                        <img src={require('../../assert/images/Star.png')} alt="star" />
                                                        <img src={require('../../assert/images/Star.png')} alt="star" />
                                                        <img src={require('../../assert/images/Star.png')} alt="star" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className='dis-param'>
                                <div className='dis'>
                                    <text className='dis-text'>Distance</text>
                                    <div className='dis-icon'>
                                        <img name="distance" src={require('../../assert/images/Vector.png')} alt="icon-arrow" />
                                    </div>
                                </div>
                            </div>
                            <div className='price-param'>
                                <div className='price'>
                                    <text className='price-text'>Price Range</text>
                                    <div className='price-icon'>
                                        <img name="price" src={require('../../assert/images/Vector.png')} alt="icon-arrow" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='display-rest'>
                    {params.all && restaurants.map(restaurant => (
                        <RestaurantItem key={restaurant._id} restaurant={restaurant} />
                    ))}
                    {params.new && restaurants.filter(restaurant => getDifferenceInDays(restaurant.opendate) < 1825).map(restaurant => (
                        <RestaurantItem key={restaurant._id} restaurant={restaurant} />
                    ))}
                    
                    {/* <RestaurantItem /> */}
                </div>
            </div>

        </React.Fragment>
    )
};

Restaurants.propsTypes = {
    restaurant: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    restaurant: state.restaurant
});

export default connect(mapStateToProps)(Restaurants);