const upperCaseSymbol = (symbol) => {
    return symbol.toUpperCase();
}

const toFixedNumber = (number) => {
    return number.toFixed(2)
}

const priceChangePercentage7d = (price7daysAgo, currentPrice) => {
    const rateOfChange = (price7daysAgo - currentPrice) * -1;
    const percentage = price7daysAgo > currentPrice ? (rateOfChange / price7daysAgo) * 100 : (rateOfChange / currentPrice) * 100;
    return percentage.toFixed(2);
}
export {
    upperCaseSymbol,
    toFixedNumber,
    priceChangePercentage7d
}