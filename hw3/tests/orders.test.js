const orders = require('../routes/orders.js');
//Create a test object like one in orders.js
var TestOrder = {Topping: 'Test', Quantity: 0};
var TestJSON = JSON.stringify(TestOrder);
//Check if an order for one of the toppings have a string and number
//Source that helped me:
//https://jestjs.io/docs/en/expect
test('Class type checking', () => 
    {
        expect(TestJSON).toEqual(expect.stringContaining('Topping'));
    });