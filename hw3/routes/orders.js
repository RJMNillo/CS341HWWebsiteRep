var express = require('express');
var router = express.Router();
var PlainOrders = {Topping: 'Plain',Quantity: 6};
var ChocOrders = {Topping: 'Chocolate',Quantity: 6};
var StrawOrders = {Topping: 'Strawberry',Quantity: 6};
var JanOrders = [PlainOrders, ChocOrders, StrawOrders];

var JSONOrder = JSON.stringify(JanOrders);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(JSONOrder);
});

//Make router prepared for Orders
//This was where I got stuck
//I tried looking at these for assistance
//https://www.codota.com/code/javascript/functions/express/Router/post
//https://expressjs.com/en/4x/api.html#app.post.method


//I was going to get something down for this function, but I am not
//Able to get something meaningful, as I was trying to fix up
//My code from the last few HWs so that it avoids the 404 not found.
//Was not able to get any further than that unfortunately.
router.post('/orders', function(req, res, next)
{
  exports.dbquery("SELECT QUANTITY, TOPPING FROM ORDERS;", function (error, results){});
});

module.exports = router;



