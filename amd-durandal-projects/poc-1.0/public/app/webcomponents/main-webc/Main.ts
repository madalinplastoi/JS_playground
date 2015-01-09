/**
 * Created by madalin on 1/2/2015.
 */

///<reference path='../../../typings/durandal/durandal.d.ts'/>
///<reference path='../../utils/WebComponent.ts'/>
///<reference path='../../utils/Domain.ts'/>
///<reference path='MainMediator.ts'/>
///<reference path='../../modelproxies/MainModelProxy.ts'/>

import webComponentRef = require('./../../utils/WebComponent');
import mainMediatorRef = require('./MainMediator');
import mainModelProxyRef = require('../../modelproxies/MainModelProxy');
import domainRef = require('./../../utils/Domain');
import obs = require('plugins/observable');

class Main extends webComponentRef.WebComponent {

    private customer:domainRef.Customer;
    static _self:Main = null;

    constructor() {
        super();
        this.customer = new domainRef.Customer();
        obs.defineProperty(this, 'fullName', {
            read: () => {
                return this.customer.FirstName + ' ' + this.customer.LastName;
            }
        });
        Main._self = this;
    }

    initProxies():void{

    }

    activate(headerActivationData:any) {
        mainMediatorRef.MainMediator.getInstance().register(this);
        this.initProxies();

        mainModelProxyRef.MainModelProxy.getInstance().loadData(headerActivationData.customerId, headerActivationData.userId).fail(function (error) {
            debugger;
        }).done(function(result){
            Main._self.customer.init(result.Data.id, result.Data.firstName, result.Data.lastName);
        })
    }

    canDeactivate() {
        mainMediatorRef.MainMediator.getInstance().unregister();
        return true;
    }
}

export = Main;
