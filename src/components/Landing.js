import React, { useState, useEffect } from 'react';
import { getCoins } from '../services/api';
import Coins from './shared/Coins';
import InputSearch from './shared/InputSearch';

const Landing = () => {
    const [coins, setCoins] = useState([]);
    const [serach, setSearch] = useState('');
    const [page, sePage] = useState(1);
    const [changePage, setChangePage] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            setChangePage(true)
            const data = await getCoins(page)
            setCoins([...coins, ...data])
            setChangePage(false)
        }
        fetchData()
    }, [page])

    const coinsFiltered = coins.filter(coin => coin.name.toLowerCase().includes(serach.toLowerCase()));

    console.log(serach);
    return (
        <>
            <InputSearch serach={serach} setSearch={setSearch} />
            <Coins coinsFiltered={coinsFiltered} sePage={sePage} changePage={changePage} />
        </>
    );
};

export default Landing;