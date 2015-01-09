/**
 * Created by madalin on 1/9/2015.
 */

///<reference path='../../../typings/durandal/durandal.d.ts'/>
///<reference path='../../../typings/kolite/kolite.d.ts'/>
///<reference path='../../utils/ActionProxy.ts'/>

import actionProxyRef = require('../../utils/ActionProxy');
import proxyRef = require('./../../modelproxies/MockOperationsModelProxy');
import command = require('kocommand');

export class GetAlertActionProxy extends actionProxyRef.ActionProxy {
    private Command:KoliteAsyncCommand;
    static _self:GetAlertActionProxy = null;

    constructor() {
        super();
        GetAlertActionProxy._self = this;

        this.Command = command.asyncCommand({
            execute: function (context, callback) {
                proxyRef.MockOperationsModelProxy.getInstance().doServerCall('alert').always(function (result) {
                    setTimeout(() => {
                        callback();
                        GetAlertActionProxy._self.notification = result.Message;
                    }, 1500);
                });
            },

            canExecute: function (isExecuting) {
                if (isExecuting)GetAlertActionProxy._self.notification = '';
                return !isExecuting;
            }
        });
    }
}
