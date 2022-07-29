import React from 'react';
import './Icons.css';

const Icons = () => {
    return (
        <React.Fragment>
            <div className='icon-title'>
                The meaning of our icons
            </div>
            <div className='icons-form'>
                <div className='icon-form'>
                    <img className='icon-logo' src={require('../../assert/images/Spacy.png')} alt="Spacy"/>
                    <div className='icon-logo-name'>Spacy</div>
                </div>
                <div className='icon-form'>
                    <img className='icon-logo' src={require('../../assert/images/Vegitarian.png')} alt="Vegitarian"/>
                    <div className='icon-logo-name'>Vegitarian</div>
                </div>
                <div className='icon-form'>
                    <img className='icon-logo' src={require('../../assert/images/Vegen.png')} alt="Vegan"/>
                    <div className='icon-logo-name'>Vegan</div>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Icons;