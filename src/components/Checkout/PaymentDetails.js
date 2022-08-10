import React from 'react';
import './PaymentDetails.css';
const PaymentDetails = () => {
    return (
        <div className='payment-details-container'>
            <text className='payment-details-title'>Payment Details</text>
            <div className='payment-details-input'>
                <input className='input-payment' placeholder='Card Number'/>
                <input className='input-payment' placeholder='Name On Card'/>
                <input className='input-payment' placeholder='CVV'/>
                <input className='input-payment' placeholder='Expiry Date'/>
            </div>
        </div>
    )
};

export default PaymentDetails;