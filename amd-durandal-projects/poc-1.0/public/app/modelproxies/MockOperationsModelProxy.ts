/**
 * Created by madalin on 1/9/2015.
 */

///<reference path='../../typings/durandal/durandal.d.ts'/>
///<reference path='../AppBoot.ts'/>
///<reference path='../utils/Notifications.ts'/>

import DurandalAppModule = require('durandal/app');
import notifications = require('./../utils/Notifications');

declare var AppConfiguration:any;
export class MockOperationsModelProxy {
    private static _instance:MockOperationsModelProxy = null;
    public data;

    constructor() {

        if (MockOperationsModelProxy._instance) {
            throw new Error("Error: Instantiation failed: Use MockOperationsModelProxy.getInstance() instead of new.");
        }

        MockOperationsModelProxy._instance = this;
    }

    static getInstance():MockOperationsModelProxy {
        if (MockOperationsModelProxy._instance === null) {
            MockOperationsModelProxy._instance = new MockOperationsModelProxy();
        }
        return MockOperationsModelProxy._instance;
    }

    doServerCall(typeOfResult:string){
        return AppConfiguration.DurandalHttpPlugin.get("/doServerCall/"+typeOfResult).done(function(result){
            DurandalAppModule.trigger(notifications.Notifications.SOME_SERVER_REQUEST_COMPLETED, result);
        });
    }
}