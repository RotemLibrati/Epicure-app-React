import React from 'react';
import './ChefItem.css';

const ChefItem = ({ chef: {_id, name, image }}) => {
  return (
    <div className='chef-item-card'>
        <div className='chef-item-frame'>
            <div className='chef-item-name'>{name}</div>
        </div>
        <img className='chef-item-image' src={require('../../assert/images/Chefs/asaf.png')} alt={image}/>
        {/* <img className='chef-item-img' src={image} alt={image}/> */}
    </div>
  )
};

export default ChefItem;