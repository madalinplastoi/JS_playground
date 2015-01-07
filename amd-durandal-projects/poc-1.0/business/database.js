/**
 * Created by tzutz on 10/22/2014.
 */

exports.jad = {code:3, description:"Jamaican Dollar", symbol:"$"};

exports.fromEmployer1 = {id:"emp1", name: "Google"};

exports.fromEmployer2 = {id:"emp2", name: "Shoppers Drugmart"};

exports.forCustomer1 = {
    id: 'cust1',
    firstName: 'Joe',
    lastName: 'Smith'
};

exports.forCustomer2 = {
    id: 'cust2',
    firstName: 'Reggie',
    lastName: 'Mantle'
};

exports.schedule1Details = {id:"sch1", forCustomer:this.forCustomer1, fromEmployer:this.fromEmployer1, assignmentMethod: {code:'byPercentage'}, currency:this.jad};
exports.schedule2Details = {id:"sch2", forCustomer:this.forCustomer1, fromEmployer:this.fromEmployer2, assignmentMethod: {code:'byAmount'}, currency:this.jad};

exports.someSchedules1 = [this.schedule1Details, this.schedule2Details];



