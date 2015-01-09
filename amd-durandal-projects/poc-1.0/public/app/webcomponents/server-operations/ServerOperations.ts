/**
 * Created by madalin on 1/9/2015.
 */
///<reference path='../../../typings/durandal/durandal.d.ts'/>
///<reference path='../../utils/WebComponent.ts'/>
///<reference path='MockOperationsMediator.ts'/>
///<reference path='../../modelproxies/MockOperationsModelProxy.ts'/>

import webComponentRef = require('./../../utils/WebComponent');
import mediatorRef = require('./MockOperationsMediator');
import proxyRef = require('../../modelproxies/MockOperationsModelProxy');
import successProxyRef = require('./GetSuccessActionProxy');
import alertProxyRef = require('./GetAlertActionProxy');
import errorProxyRef = require('./GetErrorActionProxy');
import domainRef = require('./../../utils/Domain');

declare var AppConfiguration;
class ServerOperations extends webComponentRef.WebComponent{

    public GetSuccess:successProxyRef.GetSuccessActionProxy;
    public GetAlert:alertProxyRef.GetAlertActionProxy;
    public GetError:errorProxyRef.GetErrorActionProxy;

    static _self:ServerOperations = null;

    constructor(){
        super();
        ServerOperations._self = this;
    }

    initProxies():void{
        this.GetSuccess = new successProxyRef.GetSuccessActionProxy();
        this.GetAlert = new alertProxyRef.GetAlertActionProxy();
        this.GetError = new errorProxyRef.GetErrorActionProxy();
    }

    activate(){
        //register mediator
        mediatorRef.MockOperationsMediator.getInstance().register(this);

        //init proxies
        this.initProxies();
    }

    canDeactivate(){
        mediatorRef.MockOperationsMediator.getInstance().unregister();
        return true;
    }
}
export = ServerOperations;
