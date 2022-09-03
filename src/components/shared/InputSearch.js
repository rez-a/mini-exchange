import React from 'react';

const InputSearch = ({ serach, setSearch }) => {
    return (
        <div className='row'>
            <div className="col-6 mx-auto">
                <input value={serach} onChange={(e) => setSearch(e.target.value.trim())} type="text" className='form-control' placeholder='Search' />
            </div>
        </div>
    );
};

export default InputSearch;