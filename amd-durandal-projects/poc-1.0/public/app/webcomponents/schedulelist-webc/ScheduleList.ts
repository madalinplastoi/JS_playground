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

class ScheduleList extends webComponentRef.WebComponent{
    public Schedules = [];
    public NavigateToAddSchedule:addScheduleActionProxyRef.AddScheduleNavigationActionProxy;
    public DeleteSchedule:deleteScheduleActionProxyRef.DeleteScheduleActionProxy;
    public NavigateToSchedule:navigateToScheduleActionProxyRef.NavigateToScheduleActionProxy;

    activate(activationData){
        debugger;
        mediatorRef.ScheduleListMediator.getInstance(this);
        this.NavigateToAddSchedule = new addScheduleActionProxyRef.AddScheduleNavigationActionProxy();
        this.DeleteSchedule = new deleteScheduleActionProxyRef.DeleteScheduleActionProxy();
        this.NavigateToSchedule = new navigateToScheduleActionProxyRef.NavigateToScheduleActionProxy();
        proxyRef.ScheduleListModelProxy.getInstance().loadData(activationData.customerId, activationData.userId).fail(function (result) {
            debugger;
        }).done(function(result){
            this.Schedules.push.apply(result);
        });
    }
}
export = ScheduleList;
