/**
 * Created by madalin on 1/2/2015.
 */

///<reference path='../../../../../../typings/durandal/durandal.d.ts'/>
///<reference path='../../../utils/WebComponent.ts'/>
///<reference path='../MainMediator.ts'/>
///<reference path='../model/MainModelProxy.ts'/>

module SalaryAssignment {

    export class MainViewModel extends WebComponent {
        //@todo: implement activate method ( which will call the proxy and using promises will update data for view)
        dataContext:any = null;

        activate(customerId:string, userId:string){
            MainMediator.getInstance(this);
            MainModelProxy.getInstance().loadData(customerId,userId).done(function(result){

            })
        }
    }
}