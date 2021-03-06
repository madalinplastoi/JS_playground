/**
 * Created by madalin on 1/2/2015.
 */

///<reference path='../typings/durandal/durandal.d.ts'/>
///<reference path='../typings/jquery/jquery.d.ts'/>
///<reference path='../typings/knockout/knockout.d.ts'/>

import DurandalSystemModule = require('durandal/system');
import DurandalAppModule = require('durandal/app');
import DurandalViewLocatorModule = require('durandal/viewLocator');

export class AppBoot {
    private static _instance:AppBoot = null;

    constructor() {
        if (AppBoot._instance) {
            throw new Error("Error: Instantiation failed: Use AppBoot.getInstance() instead of new.");
        }

        DurandalSystemModule.debug(true);
        DurandalAppModule.title = 'amd-durandal-SalaryAssignment-POC-v1.0';

        //@todo : add observable plugin
        DurandalAppModule.configurePlugins({
            router: true,
            http: true,
            observable: true,
            serializer: true,
            dialog: true
        });

        DurandalAppModule.start().then(function () {
            //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
            //Look for partial views in a 'views' folder in the root.
            DurandalViewLocatorModule.useConvention('webcomponents','views','');

            //Show the app by setting the root view model for our application with a transition.
            DurandalAppModule.setRoot('webcomponents/Shell', 'entrance');
        });

        AppBoot._instance = this;
    }

    static getInstance():AppBoot{
        if (AppBoot._instance === null) {
            AppBoot._instance = new AppBoot();
        }
        return AppBoot._instance;
    }
}