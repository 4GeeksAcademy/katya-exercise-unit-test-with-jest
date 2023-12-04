// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar (eurAmount) {
    let rate = oneEuroIs.USD;
    let usdAmount = rate * eurAmount;
    return usdAmount;
};

function fromDollarToYen (usdAmount) {
    let rate = Math.round(oneEuroIs.JPY / oneEuroIs.USD);
    let yenAmount = rate * usdAmount;
    return yenAmount;
}

function fromYenToPound (yenAmount) {
    let rate = Math.round(oneEuroIs.GBP / oneEuroIs.JPY * 100000) / 100000;
    let gbpAmount = rate * yenAmount;
    return gbpAmount;
}
module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound};
