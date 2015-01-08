var express = require('express');
var router = express.Router();
var salaryassignment = require("./../business/salaryassignment");
var utils = require('./utils');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('landing-page', { title: 'Express' });
});

router.get('/salaryAssignment', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/salaryAssignment/startWith', function (req, res) {
  var responseData = new utils.JsonResponse();
  var customerId = req.query.customerId;
  var userId = req.query.userId;

  if (customerId == '12' && userId == '23') {
    var customer = salaryassignment.GetCustomerById(customerId);
    responseData.initWithData(customer);
  }
  else responseData.initWithError("Cannot find customer!");

  res.writeHead(200, {'content-type':'text/json'})
  res.end(JSON.stringify(responseData));
});

router.get('/salaryAssignment/listSchedules',function (req, res) {
  var responseData = new utils.JsonResponse();
  var customerId = req.query.customerId;

  if (customerId == '12') {
    var schedules = salaryassignment.GetSchedulesForCustomer(customerId);
    responseData.initWithData(schedules);
  }
  else responseData.initWithError("Cannot find schedules!");

  res.writeHead(200, {'content-type': 'text/json'})
  res.end(JSON.stringify(responseData));
});

router.get('/salaryAssignment/schedule',function (req, res) {
  var responseData = new utils.JsonResponse();
  var scheduleId = req.query.id;
   responseData.initWithData(salaryassignment.GetScheduleById(scheduleId));

   res.writeHead(200, {'content-type': 'text/json'})
   res.end(JSON.stringify(responseData));
});
module.exports = router;
