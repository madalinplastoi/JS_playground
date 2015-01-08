/**
 * Created by tzutz on 08.01.2015.
 */
///<reference path='../../../typings/durandal/durandal.d.ts'/>
///<reference path='../../utils/WebComponent.ts'/>
///<reference path='ScheduleMediator.ts'/>
///<reference path='../../modelproxies/ScheduleListModelProxy.ts'/>

import webComponentRef = require('./../../utils/WebComponent');
import mediatorRef = require('./ScheduleMediator');
import proxyRef = require('../../modelproxies/ScheduleListModelProxy');
import domainRef = require('./../../utils/Domain');

declare var AppConfiguration;
class Schedule extends webComponentRef.WebComponent{
    public Schedule:domainRef.Schedule = new domainRef.Schedule();
    static _self:Schedule = null;

    constructor(){
        super();
        Schedule._self = this;
    }

    activate(scheduleId:string){
        debugger;

        proxyRef.ScheduleListModelProxy.getInstance().getSchedule(scheduleId).fail(function (result) {
        }).done(function(result){
            var schedule = new domainRef.Schedule();
            schedule.initFromData(result.Data);
            Schedule._self.Schedule = schedule;
        });
    }
    canDeactivate(){
        return true;
    }
}
export = Schedule;