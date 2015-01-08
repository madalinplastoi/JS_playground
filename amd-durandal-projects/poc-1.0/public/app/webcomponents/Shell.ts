/**
 * Created by madalin on 1/7/2015.
 */

///<reference path='../../typings/durandal/durandal.d.ts'/>
///<reference path='../../typings/jquery/jquery.d.ts'/>
///<reference path='../../typings/knockout/knockout.d.ts'/>

import DurandalRootRouter = require('plugins/router');
import DurandalAppModule = require('durandal/app');

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

        this.absoluteURI = 'salaryAssignment?customerId=' + this.headerActivationData.customerId + "&userId=" + this.headerActivationData.userId;

        this.router.on('router:route:not-found').then(function(e){
            debugger;
        });

        DurandalAppModule.on('all').then(function(event){
            //the arguments array contains the payload

            debugger;
        });
    }

    activate():void {
        this.router.map([
            { route: ['', 'default'], title:'Schedule list', moduleId: 'webcomponents/schedulelist-webc/ScheduleList'}
        ]).buildNavigationModel();

        return this.router.activate();
    }
}

export = Shell;