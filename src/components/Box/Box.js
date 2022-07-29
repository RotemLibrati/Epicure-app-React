import React from 'react';
import './Box.css';
import Search from '../Search/Search';

const Box = () => {
    return (
        <div className='container'>
            <h1 className='hero'>Epicure works with the top chef restaurants in Tel Aviv</h1>
            <Search />
        </div>


    );
};

export default Box;