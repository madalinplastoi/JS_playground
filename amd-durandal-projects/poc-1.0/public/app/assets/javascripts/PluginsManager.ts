/**
 * Created by tzutz on 06.01.2015.
 */
///<reference path='../../../typings/durandal/durandal.d.ts'/>
import DurandalHttp = require('plugins/http');
module PluginsManager {
     class Manager {
        private static _instance:Manager = null;

        public DurandalHttpPlugin;

        constructor() {
            if (Manager._instance) {
                throw new Error("Error: Instantiation failed: Use MainModelProxy.getInstance() instead of new.");
            }
            this.DurandalHttpPlugin = DurandalHttp;
            Manager._instance = this;
        }

        static getInstance():Manager {
            if (Manager._instance === null) {
                Manager._instance = new Manager();
            }
            return Manager._instance;
        }
    }
}