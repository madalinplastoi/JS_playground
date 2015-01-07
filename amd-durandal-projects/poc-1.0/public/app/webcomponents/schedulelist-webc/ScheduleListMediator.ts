/**
 * Created by tzutz on 07.01.2015.
 */
///<reference path='../../utils/WebComponent.ts'/>

import webComponentRef = require('./../../utils/WebComponent');
import mediatorRef = require('./../../utils/Mediator');
export class ScheduleListMediator extends mediatorRef.Mediator{
    private static _instance:ScheduleListMediator = null;

    constructor(viewModel:webComponentRef.WebComponent) {
        if (ScheduleListMediator._instance) {
            throw new Error("Error: Instantiation failed: Use ScheduleListMediator.getInstance() instead of new.");
        }
        super(viewModel);
        ScheduleListMediator._instance = this;
    }

    static getInstance(viewModel:webComponentRef.WebComponent):ScheduleListMediator {
        if (ScheduleListMediator._instance === null) {
            ScheduleListMediator._instance = new ScheduleListMediator(viewModel);
        }
        return ScheduleListMediator._instance;
    }
}