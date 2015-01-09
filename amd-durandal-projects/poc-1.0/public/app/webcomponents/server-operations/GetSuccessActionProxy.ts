/**
 * Created by madalin on 1/9/2015.
 */

///<reference path='../../../typings/durandal/durandal.d.ts'/>
///<reference path='../../../typings/kolite/kolite.d.ts'/>

import actionProxyRef = require('../../utils/ActionProxy');
import proxyRef = require('./../../modelproxies/MockOperationsModelProxy');
import command = require('kocommand');

export class GetSuccessActionProxy extends actionProxyRef.ActionProxy {
    private Command:KoliteAsyncCommand;
    static _self:GetSuccessActionProxy = null;

    constructor() {
        super();
        GetSuccessActionProxy._self = this;

        this.Command = command.asyncCommand({
            execute: function (context, callback) {
                proxyRef.MockOperationsModelProxy.getInstance().doServerCall('success').always(function (result) {
                    setTimeout(() => {
                        callback();
                        GetSuccessActionProxy._self.notification = result.Message;
                    }, 1500);
                });
            },

            canExecute: function (isExecuting) {
                if (isExecuting)GetSuccessActionProxy._self.notification = '';
                return !isExecuting;
            }
        });
    }
}