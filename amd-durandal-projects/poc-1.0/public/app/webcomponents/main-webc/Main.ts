/**
 * Created by madalin on 1/2/2015.
 */

///<reference path='../../../typings/durandal/durandal.d.ts'/>
///<reference path='../../utils/WebComponent.ts'/>
///<reference path='MainMediator.ts'/>
///<reference path='../../modelproxies/MainModelProxy.ts'/>

import webComponentRef = require('./../../utils/WebComponent');
import mainMediatorRef = require('./MainMediator');
import mainModelProxyRef = require('../../modelproxies/MainModelProxy');

class Main extends webComponentRef.WebComponent {

    dataContext:any = null;

    constructor(){
        super();
    }

    activate(headerActivationData:any) {
        mainMediatorRef.MainMediator.getInstance(this);
        mainModelProxyRef.MainModelProxy.getInstance().loadData(headerActivationData.customerId, headerActivationData.userId).fail(function (result) {
            debugger;
        }).done(function(result){
            this.dataContext = result;
        })
    }
}

export = Main;
