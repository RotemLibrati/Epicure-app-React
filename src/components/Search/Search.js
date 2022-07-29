import React from 'react';
import './Search.css';

const Search = () => {
    return (
        <div className='container-search'>
            <img src={require('../../assert/images/Search.png')} alt="search" />
            <div className='frame1'>
                <div className='type'>
                    <div className='type2' />
                </div>
                <input className='input-search' />
            </div>
            
        </div>
    )
};

export default Search;