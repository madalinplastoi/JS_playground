/**
 * Created by madalin on 1/2/2015.
 */
var Domain;
(function (Domain) {
    var Customer = (function () {
        function Customer(id, firstName, lastName) {
            this.Id = id;
            this.FirstName = firstName;
            this.LastName = lastName;
        }
        return Customer;
    })();
    Domain.Customer = Customer;
    var Employer = (function () {
        function Employer(id, name) {
            this.Id = id;
            this.Name = name;
        }
        return Employer;
    })();
    Domain.Employer = Employer;
    var Currency = (function () {
        function Currency(code, description, symbol) {
            this.Code = code;
            this.Description = description;
            this.Symbol = symbol;
        }
        return Currency;
    })();
    Domain.Currency = Currency;
    var BankAccount = (function () {
        function BankAccount(id, number, kind, currency, branch, code) {
            this.Id = id;
            this.Number = number;
            this.Kind = kind;
            this.Currency = currency;
            this.BranchNumber = branch;
            this.Code = code;
        }
        return BankAccount;
    })();
    Domain.BankAccount = BankAccount;
    var Assignment = (function () {
        function Assignment(id, value, bankAccount, description, priority, percent) {
            this.Id = id;
            this.Value = value;
            this.Account = bankAccount;
            this.Description = description;
            this.Priority = priority;
            this.Percent = percent;
        }
        return Assignment;
    })();
    Domain.Assignment = Assignment;
    var Schedule = (function () {
        function Schedule(id, forCustomer, fromEmployer, assignmentMethod, currency, assignments) {
            this.Id = id;
            this.ForCustomer = forCustomer;
            this.FromEmployer = fromEmployer;
            this.AssignmentMethod = assignmentMethod;
            this.Currency = currency;
            this.Assignments = assignments;
            this.ExpectedSalary = 0;
        }
        return Schedule;
    })();
    Domain.Schedule = Schedule;
    var ScheduleDetails = (function () {
        function ScheduleDetails(id, forCustomer, fromEmployer, assignmentMethod) {
            this.Id = id;
            this.ForCustomer = forCustomer;
            this.FromEmployer = fromEmployer;
            this.AssignmentMethod = assignmentMethod;
        }
        return ScheduleDetails;
    })();
    Domain.ScheduleDetails = ScheduleDetails;
    var AssignmentMethod = (function () {
        function AssignmentMethod(code) {
            this.Code = code;
        }
        return AssignmentMethod;
    })();
    Domain.AssignmentMethod = AssignmentMethod;
})(Domain || (Domain = {}));
//# sourceMappingURL=Domain.js.map