import React from 'react';
import Coin from './Coin';
import Loader from './Loader';
import LoaderChangePage from './LoaderChangePage';

const Coins = ({ coinsFiltered, sePage, changePage }) => {
    return (
        <div className="row">
            <div className="col-12 d-flex align-items-center justify-content-center flex-column mt-3">
                {
                    coinsFiltered.length ?
                        <>
                            <div className="table-responsive w-100">
                                <table className='mt-3 table'>
                                    <thead className='py-2 px-3'>
                                        <tr>
                                            <th>Coin</th>
                                            <th>Price</th>
                                            <th>24h</th>
                                            <th>7d</th>
                                            <th>Total Volume</th>
                                            <th>Mkt Cap</th>
                                            <th>Last 7 Days</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            coinsFiltered.map(coin => <tr key={coin.id}><Coin {...coin} /></tr>)

                                        }
                                    </tbody>
                                </table>
                            </div>
                            <button onClick={() => sePage(prevPage => prevPage + 1)} className='btn btn-outline-dark'>Load More {changePage ? <LoaderChangePage /> : ""}</button>
                        </> :
                        <Loader />
                }
            </div>
        </div>
    );
};

export default Coins;