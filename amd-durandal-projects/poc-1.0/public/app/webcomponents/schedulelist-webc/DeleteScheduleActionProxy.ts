/**
 * Created by tzutz on 07.01.2015.
 */

///<reference path='../../../typings/durandal/durandal.d.ts'/>
///<reference path='../../../typings/kolite/kolite.d.ts'/>

import actionProxyRef = require('../../utils/ActionProxy');
import proxyRef = require('./../../modelproxies/ScheduleListModelProxy');
import command = require('kocommand');

export class DeleteScheduleActionProxy extends actionProxyRef.ActionProxy{
    private Command: KoliteAsyncCommand;

    constructor(){
        super();

        this.Command = command.asyncCommand({
            execute: function(context, callback) {
                proxyRef.ScheduleListModelProxy.getInstance().delete(context.Id).always(callback());
            },

            canExecute: function(isExecuting) {
                return !isExecuting ;
            }
        });
    }
}