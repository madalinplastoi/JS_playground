/**
 * Created by madalin on 1/2/2015.
 */

///<reference path='../../../typings/durandal/durandal.d.ts'/>
///<reference path='../../utils/WebComponent.ts'/>
///<reference path='MainMediator.ts'/>
///<reference path='model/MainModelProxy.ts'/>

import webComponentRef = require('./../../utils/WebComponent');
import mainMediatorRef = require('./MainMediator');
import mainModelProxyRef = require('./model/MainModelProxy');

class Main extends webComponentRef.WebComponent {
    //@todo: implement activate method ( which will call the proxy and using promises will update data for view)
    dataContext:any = null;

    constructor(){
        super();
    }

    activate(headerActivationData:any) {
        mainMediatorRef.MainMediator.getInstance(this);
        mainModelProxyRef.MainModelProxy.getInstance().loadData(headerActivationData.customerId, headerActivationData.userId).fail(function (error) {
            debugger;
        })
    }
}

export = Main;
