/**
 * Created by Madalin on 10/23/2014.
 */
var database = require("./database");

exports.GetCustomerById = function(id){
    return database.forCustomer1;
}

exports.GetSchedulesForCustomer = function(customerId){
    return database.someSchedules1;
}
