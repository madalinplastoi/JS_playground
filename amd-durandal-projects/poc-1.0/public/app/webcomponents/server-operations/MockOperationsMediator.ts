/**
 * Created by madalin on 1/9/2015.
 */
///<reference path='../../utils/WebComponent.ts'/>
///<reference path='../../../typings/durandal/durandal.d.ts'/>
///<reference path='../../utils/Notifications.ts'/>
///<reference path='ServerOperations.ts'/>

import webComponentRef = require('./../../utils/WebComponent');
import mediatorRef = require('./../../utils/Mediator');
import DurandalAppModule = require('durandal/app');
import notifications = require('./../../utils/Notifications');
import ServerOperations = require('./ServerOperations');

export class MockOperationsMediator extends mediatorRef.Mediator{
    private static _instance:MockOperationsMediator = null;

    constructor() {
        if (MockOperationsMediator._instance) {
            throw new Error("Error: Instantiation failed: Use MockOperationsMediator.getInstance() instead of new.");
        }
        super();
        MockOperationsMediator._instance = this;

        DurandalAppModule.on('all', function(msg, payload){
            switch(msg){
                case notifications.Notifications.SOME_SERVER_REQUEST_COMPLETED:{
                    debugger;
                    //TODO: the mediator will reference the web component to do something...same time, result will be available via promise into the action proxy!!!
                }
            }
        });
    }

    static getInstance():MockOperationsMediator {
        if (MockOperationsMediator._instance === null) {
            MockOperationsMediator._instance = new MockOperationsMediator();
        }
        return MockOperationsMediator._instance;
    }
}
