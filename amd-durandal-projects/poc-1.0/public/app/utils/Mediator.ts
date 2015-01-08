/**
 * Created by tzutz on 07.01.2015.
 */

import webComponentRef = require('./WebComponent');

export class Mediator{
    public context : webComponentRef.WebComponent;
    constructor(){
    }

    register(viewModel : webComponentRef.WebComponent){
        if(this.context == null)this.context = viewModel;
        else throw('Mediator is already registered!');
    }

    unregister(){
        this.context = null;
    }
}