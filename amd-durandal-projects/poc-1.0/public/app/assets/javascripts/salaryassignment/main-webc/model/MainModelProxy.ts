/**
 * Created by madalin on 1/2/2015.
 */
///<reference path='../../../../../../typings/durandal/durandal.d.ts'/>
///<reference path='../../../AppBoot.ts'/>

export module SalaryAssignment {

    declare  var requirejs:any;
    export class MainModelProxy {

        private static _instance:MainModelProxy = null;
        constructor(){
            debugger;
            requirejs.Plugin.get("http://google.com").fail(function(error){
                debugger;
            });
            if (MainModelProxy._instance) {
                throw new Error("Error: Instantiation failed: Use MainModelProxy.getInstance() instead of new.");
            }

            MainModelProxy._instance = this;
        }

        static getInstance():MainModelProxy{
            if (MainModelProxy._instance === null) {
                MainModelProxy._instance = new MainModelProxy();
            }
            return MainModelProxy._instance;
        }


        loadData(customerId:string, userId:string){
            //return DurandalHttp.get("salaryAssignment/startSession/customerId=" + customerId + "&userId=" + userId);
        }
    }
}