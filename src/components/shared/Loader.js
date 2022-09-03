import React from 'react';
import loader from '../../assets/loader.gif';

const Loader = () => {
    return (
        <div className='loader my-5'>
            <img src={loader} alt='loader' className='img-fluid' />
        </div>
    );
};

export default Loader;