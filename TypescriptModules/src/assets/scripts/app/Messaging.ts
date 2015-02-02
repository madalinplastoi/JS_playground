/**
 * Created by madalin on 12/17/2014.
 */
///<reference path='../typings/knockout/knockout.d.ts'/>

import ko = require('knockout');

export module Messaging {

    export class MessageObject {
        public Name:KnockoutObservable<string>;
        public Body:KnockoutObservable<any>;

        constructor() {
            this.Name = ko.observable('');
            this.Name.extend({notify: "always"});
            this.Body = ko.observable(null);
        }
    }

    export class Messenger {

        private static _instance:Messenger = null;
        private Message:MessageObject;
        private Callbacks:Array<any>;

        constructor() {
            if (Messenger._instance) {
                throw new Error("Error: Instantiation failed: Use Messenger.getInstance() instead of new.");
            }

            this.Message = new Messaging.MessageObject();
            this.Callbacks = [];

            this.Message.Name.subscribe(function (newValue) {
                for (var i in Messenger._instance.Callbacks) {
                    Messenger._instance.Callbacks[i](newValue, Messenger._instance.Message.Body());
                }
            });

            Messenger._instance = this;
        }

        subscribe(callback:any):void {
            if (callback != null) {
                this.Callbacks.push(callback);
            }
        }

        sendMessage(message:string, body:any):void {
            this.Message.Body(body);
            this.Message.Name(message);
        }

        static getInstance():Messenger {
            if (Messenger._instance === null) {
                Messenger._instance = new Messenger();
            }
            return Messenger._instance;
        }
    }
}
