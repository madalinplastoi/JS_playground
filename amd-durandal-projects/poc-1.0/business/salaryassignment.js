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

exports.GetScheduleById = function (id) {
    var schedule = null;
    for(var i=0;i<database.someSchedules1.length;i++){
        if(database.someSchedules1[i].id == id){
            schedule = database.someSchedules1[i];
            break;
        }
    }
    return schedule;
}
