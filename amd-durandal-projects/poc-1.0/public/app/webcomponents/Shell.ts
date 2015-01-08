/**
 * Created by madalin on 1/7/2015.
 */

///<reference path='../../typings/durandal/durandal.d.ts'/>
///<reference path='../../typings/jquery/jquery.d.ts'/>
///<reference path='../../typings/knockout/knockout.d.ts'/>

import DurandalRootRouter = require('plugins/router');
import DurandalAppModule = require('durandal/app');
declare var AppConfiguration;
class Shell {
    public router:any;
    public headerActivationData:any;
    public absoluteURI:string;

    constructor() {
        this.router = DurandalRootRouter;

        this.headerActivationData = {
            customerId: 12,
            userId: 23
        };
        AppConfiguration.ActivationData = this.headerActivationData;
        this.absoluteURI = 'salaryAssignment/customerId=' + this.headerActivationData.customerId + "&userId=" + this.headerActivationData.userId;
    }

    activate():void {

        this.router.map([
            { route: '', title:'Schedule list', moduleId: 'webcomponents/schedulelist-webc/ScheduleList'},
            { route: 'newschedule', title:'Schedule new', moduleId: 'webcomponents/schedulelist-webc/ScheduleList', hash : '#newschedule'}
        ]).buildNavigationModel();

        return this.router.activate();
    }
}

export = Shell;