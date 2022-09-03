import React from 'react';
import loaderChangePage from '../../assets/loadPage.gif';

const LoaderChangePage = () => {
    return (
        <img src={loaderChangePage} alt="loader" style={{ width: '30px', height: '30px' }} />
    );
};

export default LoaderChangePage;