/**
 * Created by madalin on 1/2/2015.
 */

///<reference path='../../../typings/durandal/durandal.d.ts'/>
///<reference path='../../../typings/jquery/jquery.d.ts'/>
///<reference path='../../../typings/knockout/knockout.d.ts'/>

import DurandalSystemModule = require('durandal/system');
import DurandalAppModule = require('durandal/app');
import DurandalViewLocatorModule = require('durandal/viewLocator');

export class AppBoot {

    constructor() {

        debugger;
        DurandalSystemModule.debug(true);

        DurandalAppModule.title = 'amd-durandal-SalaryAssignment-POC-v1.0';

        DurandalAppModule.configurePlugins({
            router: true,
            dialog: true
        });

        DurandalAppModule.start().then(function() {
            //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
            //Look for partial views in a 'views' folder in the root.
            DurandalViewLocatorModule.useConvention();

            //Show the app by setting the root view model for our application with a transition.
            //app.setRoot('viewmodels/shell', 'entrance');
        });
    }
}