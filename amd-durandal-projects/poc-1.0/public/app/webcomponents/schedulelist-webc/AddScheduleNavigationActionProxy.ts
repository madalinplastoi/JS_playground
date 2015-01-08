/**
 * Created by tzutz on 07.01.2015.
 */

///<reference path='../../../typings/durandal/durandal.d.ts'/>
///<reference path='../../../typings/kolite/kolite.d.ts'/>

import actionProxyRef = require('../../utils/ActionProxy');
import DurandalRootRouter = require('plugins/router');
import command = require('kocommand');

export class AddScheduleNavigationActionProxy extends actionProxyRef.ActionProxy{
    private Command: KoliteAsyncCommand;
    constructor(){
            super();

            this.Command = command.asyncCommand({
                execute: function(context, callback) {
                    debugger;
                    DurandalRootRouter.navigate("#newschedule");
                },

                canExecute: function(isExecuting) {
                    return !isExecuting ;
                }
            });
        }
}