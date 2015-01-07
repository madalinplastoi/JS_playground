/**
 * Created by madalin on 1/5/2015.
 */
///<reference path='../../utils/WebComponent.ts'/>

import webComponentRef = require('./../../utils/WebComponent');
import mediatorRef = require('./../../utils/Mediator');
export class MainMediator extends mediatorRef.Mediator{
    private static _instance:MainMediator = null;

    constructor(viewModel:webComponentRef.WebComponent) {
        if (MainMediator._instance) {
            throw new Error("Error: Instantiation failed: Use MainMediator.getInstance() instead of new.");
        }
        super(viewModel);
        MainMediator._instance = this;
    }

    static getInstance(viewModel:webComponentRef.WebComponent):MainMediator {
        if (MainMediator._instance === null) {
            MainMediator._instance = new MainMediator(viewModel);
        }
        return MainMediator._instance;
    }
}