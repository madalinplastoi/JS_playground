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

    constructor() {
        this.router = DurandalRootRouter;
        this.headerActivationData = {
            customerId: 12,
            userId: 4
        };
    }

    activate():void {

    }
}
 export = Shell;