import React, { useState } from 'react';
import './ChefsPage.css';

//Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

//Component
import ChefItem from '../../components/Chefs/ChefItem';
import Spinner from '../../components/layout/Spinner';

const ChefsPage = ({ chef: { chefs, loading_c } }) => {
    const [params, setParams] = useState({
        all: true,
        new: false,
        mostViewd: false
    });
    const onClickParams = e => setParams({
        all: e.target.name === 'all' ? true : false,
        new: e.target.name === 'new' ? true : false,
        mostViewd: e.target.name === 'mostViewd' ? true : false
    });
    console.log(params.all && (!chefs || loading_c));
    return (
        <div className='chefs-container'>
            <div className='frame-148'>
                <div className='tabs-btns'>
                    <div className='tabs-btns-frame1'>
                        <button style={{ 'fontWeight': params.all === true ? 'bold' : 'normal' }} name='all' className='btn-all' onClick={e => onClickParams(e)}>All</button>
                        <button style={{ 'fontWeight': params.new === true ? 'bold' : 'normal' }} name='new' className='btn-new' onClick={e => onClickParams(e)}>New</button>
                        <button style={{ 'fontWeight': params.mostViewd === true ? 'bold' : 'normal' }} name='mostViewd' className='btn-most-viewd' onClick={e => onClickParams(e)}>Most Viewd</button>
                    </div>
                </div>
                <div className='display-chefs'>
                    {!chefs || loading_c ? (<Spinner />) : (
                        params.all ? chefs.map(chef => <ChefItem key={chef._id} chef={chef} />)  :
                        params.new ? chefs.filter(chef => chef.seniority < 5).map(chef => (<ChefItem key={chef._id} chef={chef}/>)) :
                        chefs.map(chef => <ChefItem key={chef._id} chef={chef} />)
                        
                    )}
                </div>
            </div>
        </div>
    )
};

ChefsPage.propTypes = {
    chef: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    chef: state.chef
});

export default connect(mapStateToProps)(ChefsPage);