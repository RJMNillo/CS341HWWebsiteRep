var express = require('express');
var router = express.Router();
var PlainOrders = JSON.stringify({Topping: 'Plain',Quantity: 6});
var ChocOrders = JSON.stringify({Topping: 'Chocolate',Quantity: 6});
var StrawOrders = JSON.stringify({Topping: 'Strawberry',Quantity: 6});
var JanOrders = [PlainOrders, ChocOrders, StrawOrders];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(JSON.stringify(JanOrders));
});

module.exports = router;

