/**
 * Created by tzutz on 07.01.2015.
 */
///<reference path='../../utils/WebComponent.ts'/>
///<reference path='../../../typings/durandal/durandal.d.ts'/>
///<reference path='../../utils/Notifications.ts'/>
///<reference path='ScheduleList.ts'/>

import webComponentRef = require('./../../utils/WebComponent');
import mediatorRef = require('./../../utils/Mediator');
import DurandalAppModule = require('durandal/app');
import notifications = require('./../../utils/Notifications');
import ScheduleList = require('./ScheduleList');

export class ScheduleListMediator extends mediatorRef.Mediator{
    private static _instance:ScheduleListMediator = null;

    constructor() {
        if (ScheduleListMediator._instance) {
            throw new Error("Error: Instantiation failed: Use ScheduleListMediator.getInstance() instead of new.");
        }
        super();
        ScheduleListMediator._instance = this;

        DurandalAppModule.on('all', function(msg, payload){
            switch(msg){
                case notifications.Notifications.DELETE_SCHEDULE_COMPLETED:{
                    (<ScheduleList> /*</>*/ScheduleListMediator.getInstance().context).onScheduleRemoved(payload);
                }
            }
        });
    }

    static getInstance():ScheduleListMediator {
        if (ScheduleListMediator._instance === null) {
            ScheduleListMediator._instance = new ScheduleListMediator();
        }
        return ScheduleListMediator._instance;
    }
}