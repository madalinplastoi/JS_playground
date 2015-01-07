/**
 * Created by madalin on 1/2/2015.
 */
///<reference path='../../typings/durandal/durandal.d.ts'/>
///<reference path='../AppBoot.ts'/>

declare var AppConfiguration:any;

export class MainModelProxy {

    private static _instance:MainModelProxy = null;
    public data:any;

    constructor() {

        if (MainModelProxy._instance) {
            throw new Error("Error: Instantiation failed: Use MainModelProxy.getInstance() instead of new.");
        }

        MainModelProxy._instance = this;
    }

    static getInstance():MainModelProxy {
        if (MainModelProxy._instance === null) {
            MainModelProxy._instance = new MainModelProxy();
        }
        return MainModelProxy._instance;
    }
    getData(){
        return this.data;
    }

    loadData(customerId:number, userId:number) {
        return AppConfiguration.DurandalHttpPlugin.get("/salaryAssignment/startWith?customerId=" + customerId + "&userId=" + userId).fail(function(error){
        }).done(function(result){
            this.data = result;
        });
    }
}
