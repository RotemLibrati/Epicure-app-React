import React from 'react';
import './PersonalDetails.css';

const PersonalDetails = () => {
  return (
    <div className='personal-details-container'>
        <div className='delivery-details'>
            <text className='delivery-details-title'>Delivery Details</text>
            <div className='delivery-details-input'>
                <text className='full-name-title'>Full Name</text>
                <input className='input-full-name' />
                <text className='address-title'>Address</text>
                <input className='input-address' />
                <text className='phone-title'>Phone</text>
                <input className='input-phone' />
            </div>
        </div>
    </div>
  )
};

export default PersonalDetails;