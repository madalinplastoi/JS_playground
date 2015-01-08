/**
 * Created by madalin on 1/2/2015.
 */

export class Customer {
    public Id:string = '';
    public FirstName:string = '';
    public LastName:string = '';

    constructor() {

    }

    init(id:string, firstName:string, lastName:string):void {
        this.Id = id;
        this.FirstName = firstName;
        this.LastName = lastName;
    }
}

    export class Employer {
        public Id:string;
        public Name:string;

        constructor(id:string, name:string) {
            this.Id = id;
            this.Name = name;
        }
    }

    export class Currency {
        public Code:number;
        public Description:string;
        public Symbol:string;

        constructor(code:number, description:string, symbol:string) {
            this.Code = code;
            this.Description = description;
            this.Symbol = symbol;
        }
    }

    export class BankAccount {
        public Id:string;
        public Number:string;
        public Kind:string;
        public Currency:Currency;
        public BranchNumber:string;
        public Code:string;

        constructor(id:string, number:string, kind:string, currency:Currency, branch:string, code:string) {
            this.Id = id;
            this.Number = number;
            this.Kind = kind;
            this.Currency = currency;
            this.BranchNumber = branch;
            this.Code = code;
        }
    }

    export class Assignment {
        public Id:string;
        public Value:number;
        public Account:BankAccount;
        public Description:string;
        public Priority:number;
        public Percent:string;

        constructor(id:string, value:number, bankAccount:BankAccount, description:string, priority:number, percent?:string) {
            this.Id = id;
            this.Value = value;
            this.Account = bankAccount;
            this.Description = description;
            this.Priority = priority;
            this.Percent = percent;
        }
    }

    export class Schedule {
        public Id:string;
        public ForCustomer:Customer;
        public FromEmployer:Employer;
        public AssignmentMethod:string;
        public Assignments:Assignment[];
        public Currency:Currency;

        //TODO: what about expected salary? is this a computed value?
        public ExpectedSalary:number;

        constructor(id:string, forCustomer:Customer, fromEmployer:Employer, assignmentMethod:string, currency:Currency, assignments:Assignment[]) {
            this.Id = id;
            this.ForCustomer = forCustomer;
            this.FromEmployer = fromEmployer;
            this.AssignmentMethod = assignmentMethod;
            this.Currency = currency;
            this.Assignments = assignments;

            this.ExpectedSalary = 0;
        }
    }

    export class ScheduleDetails {
        public Id:string;
        public ForCustomer:Customer;
        public FromEmployer:Employer;
        public AssignmentMethod:string;
        public Currency:Currency;

        constructor(id:string, forCustomer:Customer, fromEmployer:Employer, assignmentMethod:string) {
            this.Id = id;
            this.ForCustomer = forCustomer;
            this.FromEmployer = fromEmployer;
            this.AssignmentMethod = assignmentMethod;
        }

    }

    export class AssignmentMethod {
        public Code:string;

        constructor(code:string) {
            this.Code = code;
        }
    }
