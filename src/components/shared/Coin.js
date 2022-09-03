import React from 'react';
import { upperCaseSymbol, toFixedNumber, priceChangePercentage7d } from '../../helper/index';
import { Sparklines, SparklinesLine } from 'react-sparklines';


const Coin = ({ name, symbol, image, sparkline_in_7d, current_price, price_change_percentage_24h, market_cap, total_volume }) => {
    return (
        <>
            <td>
                <div className='d-flex align-items-center'>
                    <div className="image">
                        <img src={image} className='img-fluid' alt={name} />
                    </div>
                    <div className="title d-flex align-items-center ms-2">
                        <h6 className='mb-0'>{name}</h6>
                        <p className='mb-0 ms-2 text-muted symbol'>{upperCaseSymbol(symbol)}</p>
                    </div>
                </div>
            </td>
            <td>
                <p className='mb-0'>${current_price}</p>
            </td>
            <td>
                <p className={`mb-0 ${price_change_percentage_24h >= 0 ? "text-success" : "text-danger"}`}>{toFixedNumber(price_change_percentage_24h)}%</p>
            </td>
            <td>
                <p className={`mb-0 ${priceChangePercentage7d(sparkline_in_7d.price[0], current_price) >= 0 ? "text-success" : "text-danger"}`}>{priceChangePercentage7d(sparkline_in_7d.price[0], current_price)}%</p>
            </td>
            <td>
                <p className='mb-0'>${total_volume.toLocaleString()}</p>
            </td>
            <td>
                <p className='mb-0'>${market_cap.toLocaleString()}</p>
            </td>
            <td>
                <Sparklines data={sparkline_in_7d.price}>
                    <SparklinesLine color={priceChangePercentage7d(sparkline_in_7d.price[0], current_price) >= 0 ? "green" : "red"} />
                </Sparklines>
            </td>
        </>
    );
};

export default Coin;