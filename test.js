test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 146 yens", function () {

    const { fromDollarToYen } = require('./app.js');

    const yens = fromDollarToYen(5);

    const expected = 5 * 146;

    expect(yens).toBe(expected);
})

test("One yen should be 0.00556 pounds", function () {

    const { fromYenToPound } = require('./app.js');

    const pounds = fromYenToPound(5000);

    const expected = 5000 * 0.00556;

    expect(pounds).toBe(expected);
})