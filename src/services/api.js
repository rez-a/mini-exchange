import axios from 'axios';


const client = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20'
})

const getCoins = async (page) => {
    const response = await client.get(`&page=${page}&sparkline=true`);
    return response.data;
}

export {
    getCoins
}