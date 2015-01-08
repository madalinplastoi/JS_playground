/**
 * Created by tzutz on 07.01.2015.
 */
///<reference path='../../typings/durandal/durandal.d.ts'/>
///<reference path='../AppBoot.ts'/>
///<reference path='../utils/Notifications.ts'/>

import DurandalAppModule = require('durandal/app');
import notifications = require('./../utils/Notifications');

declare var AppConfiguration:any;
export class ScheduleListModelProxy {
    private static _instance:ScheduleListModelProxy = null;
    public data;

    constructor() {

        if (ScheduleListModelProxy._instance) {
            throw new Error("Error: Instantiation failed: Use ScheduleListModelProxy.getInstance() instead of new.");
        }

        ScheduleListModelProxy._instance = this;
    }

    static getInstance():ScheduleListModelProxy {
        if (ScheduleListModelProxy._instance === null) {
            ScheduleListModelProxy._instance = new ScheduleListModelProxy();
        }
        return ScheduleListModelProxy._instance;
    }

    getData() {
        return this.data;
    }

    loadData(customerId:number) {
        return AppConfiguration.DurandalHttpPlugin.get("/salaryAssignment/listSchedules?customerId=" + customerId).fail(function (error) {
            debugger;
        }).done(function (result) {
            this.data = result;
        });
    }

    getSchedule(scheduleId:string) {
        return AppConfiguration.DurandalHttpPlugin.get("/salaryAssignment/schedule?id=" + scheduleId);
    }

    delete(scheduleId:string):void {
        return AppConfiguration.DurandalHttpPlugin.get("/salaryAssignment/deleteSchedule?id=" + scheduleId).done(function(result){
            DurandalAppModule.trigger(notifications.Notifications.DELETE_SCHEDULE_COMPLETED, scheduleId);
        });
    }
}