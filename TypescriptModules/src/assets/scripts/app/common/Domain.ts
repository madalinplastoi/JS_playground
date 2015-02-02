/**
 * Created by madalin on 12/17/2014.
 */

///<reference path='Notifications.ts'/>

module Common{
    export class Person{
        public Id:number;
        public FirstName:string;
        public LastName:string;
        public Age:number;

        constructor(id:number, firstName:string, lastName:string, age:number){
            this.Id = id;
            this.FirstName = firstName;
            this.LastName = lastName;
            this.Age = age;

            var test:string = Common.Notifications.PROXY_DELETE_PERSON;
        }
    }
}
