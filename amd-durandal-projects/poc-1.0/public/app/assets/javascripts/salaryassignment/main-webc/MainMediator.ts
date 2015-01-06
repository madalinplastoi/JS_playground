/**
 * Created by madalin on 1/5/2015.
 */
///<reference path='../../utils/WebComponent.ts'/>
module SalaryAssignment {

    export class MainMediator {
        private static _instance:MainMediator = null;
        private webComponent;
        constructor(webComponent:WebComponent){
            if (MainMediator._instance) {
                throw new Error("Error: Instantiation failed: Use MainMediator.getInstance() instead of new.");
            }
            this.webComponent = webComponent;
            MainMediator._instance = this;
        }

        static getInstance(webComponent:WebComponent):MainMediator{
            if (MainMediator._instance === null) {
                MainMediator._instance = new MainMediator(webComponent);
            }
            return MainMediator._instance;
        }
    }
}