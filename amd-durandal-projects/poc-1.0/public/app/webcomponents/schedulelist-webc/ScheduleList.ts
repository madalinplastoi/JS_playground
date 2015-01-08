/**
 * Created by tzutz on 07.01.2015.
 */
///<reference path='../../../typings/durandal/durandal.d.ts'/>
///<reference path='../../utils/WebComponent.ts'/>
///<reference path='ScheduleListMediator.ts'/>
///<reference path='../../modelproxies/ScheduleListModelProxy.ts'/>

import webComponentRef = require('./../../utils/WebComponent');
import mediatorRef = require('./ScheduleListMediator');
import proxyRef = require('../../modelproxies/ScheduleListModelProxy');
import addScheduleActionProxyRef = require('./AddScheduleNavigationActionProxy');
import deleteScheduleActionProxyRef = require('./DeleteScheduleActionProxy');
import navigateToScheduleActionProxyRef = require('./NavigateToScheduleActionProxy');
import domainRef = require('./../../utils/Domain');

declare var AppConfiguration;
class ScheduleList extends webComponentRef.WebComponent{
    public Schedules = [];
    public NavigateToAddSchedule:addScheduleActionProxyRef.AddScheduleNavigationActionProxy;
    public DeleteSchedule:deleteScheduleActionProxyRef.DeleteScheduleActionProxy;
    public NavigateToSchedule:navigateToScheduleActionProxyRef.NavigateToScheduleActionProxy;
    static _self:ScheduleList = null;

    constructor(){
        ScheduleList._self = this;
    }

    activate(){
        debugger;
        var activationData = AppConfiguration.ActivationData;
        mediatorRef.ScheduleListMediator.getInstance(this);
        this.NavigateToAddSchedule = new addScheduleActionProxyRef.AddScheduleNavigationActionProxy();
        this.DeleteSchedule = new deleteScheduleActionProxyRef.DeleteScheduleActionProxy();
        this.NavigateToSchedule = new navigateToScheduleActionProxyRef.NavigateToScheduleActionProxy();
        proxyRef.ScheduleListModelProxy.getInstance().loadData(activationData.customerId).fail(function (result) {
        }).done(function(result){
            if(result!=null && result.Data!=null){
                var schedules = [];
                for(var i = 0; i< result.Data.length; i++){
                    var schedule = new domainRef.Schedule();
                    schedule.initFromData(result.Data[i]);
                    schedules.push(schedule);
                }
                ScheduleList._self.Schedules.push.apply(ScheduleList._self.Schedules,schedules);
            }
        });
    }
    canDeactivate(){
        return true;
    }
}
export = ScheduleList;
