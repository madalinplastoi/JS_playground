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
import observable = require('plugins/observable');

class Main extends webComponentRef.WebComponent {

    private customer:domainRef.Customer = new domainRef.Customer();
    static _self:Main = null;

    constructor() {
        super();
        observable.defineProperty(this.customer, 'fullName', function(){
            debugger;
            if (this != null)
                return this.FirstName + ' ' + this.LastName;
            else return '';
        });
        Main._self = this;
    }

    activate(headerActivationData:any) {
        mainMediatorRef.MainMediator.getInstance(this);
        mainModelProxyRef.MainModelProxy.getInstance().loadData(headerActivationData.customerId, headerActivationData.userId).fail(function (error) {
            debugger;
        }).done(function(result){
            Main._self.customer.init(result.Data.id, result.Data.firstName, result.Data.lastName);
        })
    }
}

export = Main;
