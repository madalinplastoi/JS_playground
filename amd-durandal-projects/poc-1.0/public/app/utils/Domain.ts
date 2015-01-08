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
        public Id:string='';
        public Name:string='';

        init(id:string, name:string) {
            this.Id = id;
            this.Name = name;
        }
    }

    export class Currency {
        public Code:number=0;
        public Description:string='';
        public Symbol:string='';

        init(code:number, description:string, symbol:string) {
            this.Code = code;
            this.Description = description;
            this.Symbol = symbol;
        }
    }

    export class BankAccount {
        public Id:string='';
        public Number:string='';
        public Kind:string='';
        public Currency:Currency = new Currency();
        public BranchNumber:string='';
        public Code:string='';

        init(id:string, number:string, kind:string, currency:Currency, branch:string, code:string) {
            this.Id = id;
            this.Number = number;
            this.Kind = kind;
            this.Currency = currency;
            this.BranchNumber = branch;
            this.Code = code;
        }
    }

    export class Assignment {
        public Id:string='';
        public Value:number=0;
        public Account:BankAccount = new BankAccount();
        public Description:string='';
        public Priority:number=0;
        public Percent:string='';

        init(id:string, value:number, bankAccount:BankAccount, description:string, priority:number, percent?:string) {
            this.Id = id;
            this.Value = value;
            this.Account = bankAccount;
            this.Description = description;
            this.Priority = priority;
            this.Percent = percent;
        }
    }

    export class Schedule {
        public Id:string='';
        public ForCustomer:Customer = new Customer();
        public FromEmployer:Employer = new Employer();
        public AssignmentMethod:string='';
        public Assignments:Assignment[] = [];
        public Currency:Currency = new Currency();

        //TODO: what about expected salary? is this a computed value?
        public ExpectedSalary:number = 0;

        init(id:string, forCustomer:Customer, fromEmployer:Employer, assignmentMethod:string, currency:Currency, assignments:Assignment[]) {
            this.Id = id;
            this.ForCustomer = forCustomer;
            this.FromEmployer = fromEmployer;
            this.AssignmentMethod = assignmentMethod;
            this.Currency = currency;
            this.Assignments = assignments;

            this.ExpectedSalary = 0;
        }

        initFromData(data:any){
            this.Id = data.Id;
            this.ForCustomer.init(data.forCustomer.id,data.forCustomer.firstName, data.forCustomer.lastName);
            this.FromEmployer.init(data.fromEmployer.id,data.fromEmployer.name);
            this.AssignmentMethod = data.assignmentMethod;
            this.Currency.init(data.currency.code, data.currency.description,data.currency.symbol);

        }
    }

    export class ScheduleDetails {
        public Id:string='';
        public ForCustomer:Customer;
        public FromEmployer:Employer;
        public AssignmentMethod:string='';
        public Currency:Currency;

        constructor(id:string, forCustomer:Customer, fromEmployer:Employer, assignmentMethod:string) {
            this.Id = id;
            this.ForCustomer = forCustomer;
            this.FromEmployer = fromEmployer;
            this.AssignmentMethod = assignmentMethod;
        }

    }

    export class AssignmentMethod {
        public Code:string='';

        constructor(code:string) {
            this.Code = code;
        }
    }
