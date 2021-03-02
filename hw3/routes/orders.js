var express = require('express');
var router = express.Router();
var PlainOrders = {Topping: 'Plain',Quantity: 6};
var ChocOrders = {Topping: 'Chocolate',Quantity: 6};
var StrawOrders = {Topping: 'Strawberry',Quantity: 6};
var JanOrders = [PlainOrders, ChocOrders, StrawOrders];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(JSON.stringify(JanOrders));
});

//Make router prepared for Orders
//This was where I got stuck
//I tried looking at these for assistance
//https://www.codota.com/code/javascript/functions/express/Router/post
//https://expressjs.com/en/4x/api.html#app.post.method

router.post('/');

module.exports = router;

